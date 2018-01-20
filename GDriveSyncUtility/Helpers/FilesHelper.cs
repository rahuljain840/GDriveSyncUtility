using GDriveSyncUtility.Models;
using Google.Apis.Drive.v3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GDriveSyncUtility.Helpers
{
    public class FilesHelper
    {
        // ...

        /// <summary>
        /// Get files belonging to a folder.
        /// </summary>
        /// <param name="service">Drive API service instance.</param>
        /// <param name="folderId">ID of the folder to print files from</param>
        public static List<FileModel> GetFilesInFolder(DriveService service, String folderId)
        {
            // Define parameters of request.
            FilesResource.ListRequest listRequest = service.Files.List();
            listRequest.PageSize = 99;
            listRequest.Fields = "nextPageToken, files(id, name, parents)";
            listRequest.Q = "'" + folderId + "' in parents";

            // List files.
            IList<Google.Apis.Drive.v3.Data.File> gfiles = listRequest.Execute().Files;

            var files = new List<FileModel>();
            if (gfiles != null && gfiles.Count > 0)
            {
                foreach (var gfile in gfiles)
                {
                    files.Add(new FileModel()
                    {
                        Id = gfile.Id,
                        Name = gfile.Name,
                        CreatedAt = gfile.CreatedTime,
                        IsNew = true
                    });
                }
            }

            return files;
        }
    }
}