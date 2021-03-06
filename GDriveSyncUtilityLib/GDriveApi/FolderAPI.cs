﻿using Google.Apis.Drive.v3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GDriveSyncUtilityLib.GDriveApi
{
    public class FolderAPI
    {
        /// <summary>
        /// Get files belonging to a folder.
        /// </summary>
        /// <param name="service">Drive API service instance.</param>
        /// <param name="folderId">ID of the folder to print files from</param>
        public static IList<Google.Apis.Drive.v3.Data.File> GetFolders(DriveService service, string folderId = "root")
        {
            // Define parameters of request.
            FilesResource.ListRequest listRequest = service.Files.List();
            listRequest.PageSize = 999;
            listRequest.Fields = "nextPageToken, files(id, name, parents)";
            listRequest.Q = "mimeType = 'application/vnd.google-apps.folder' and '" + folderId + "' in parents";
            
            // List files.
            IList<Google.Apis.Drive.v3.Data.File> gfiles = listRequest.Execute().Files;

            return gfiles;
        }
    }
}
