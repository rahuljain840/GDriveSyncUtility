using GDriveSyncUtilityLib.Manager;
using GDriveSyncUtilityLib.Models;
using Google.Apis.Drive.v3;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace GDriveSyncUtilityLib.Helpers
{
    public class FileHelper
    {
        public static string filePath = "C:\\file.json";

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

        public static string LoadJson()
        {
            using (StreamReader r = new StreamReader(filePath))
            {
                return r.ReadToEnd();
            }
        }

        public static void WriteJson(string jsonData)
        {
            File.WriteAllText(filePath, jsonData);            
        }
    }
}