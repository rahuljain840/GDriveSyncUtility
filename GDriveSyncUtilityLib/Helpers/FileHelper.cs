using GDriveSyncUtilityLib.Manager;
using GDriveSyncUtilityLib.Models;
using Google.Apis.Drive.v3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GDriveSyncUtilityLib.Helpers
{
    public class FileHelper
    {
        /// <summary>
        /// Get files belonging to a folder.
        /// </summary>
        /// <param name="service">Drive API service instance.</param>
        /// <param name="folderId">ID of the folder to print files from</param>
        public static List<FileModel> GetFiles(IDBManager dbManager, IList<Google.Apis.Drive.v3.Data.File> gfiles)
        {
            var dbfiles = dbManager.GetAllFiles();

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
                        IsNew = true,
                        Updated = false,
                        Deleted = false
                    });
                }
            }

            return files;
        }
    }
}