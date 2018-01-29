using GDriveSyncUtilityLib.Helpers;
using GDriveSyncUtilityLib.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GDriveSyncUtilityLib.Manager
{
    public class FileManager : IDBManager
    {
        public List<FileModel> GetAllFiles()
        {
            var json = FileHelper.LoadJson();

            return JsonConvert.DeserializeObject<List<FileModel>>(json);
        }

        public FileModel GetFileByID(int id)
        {
            return new FileModel();
        }

        public bool SaveFile(FileModel file)
        {
            var fileJson = JsonConvert.SerializeObject(file);
            try
            {
                FileHelper.WriteJson(fileJson);
            }
            catch
            {
                return false;
            }

            return true;
        }
    }
}
