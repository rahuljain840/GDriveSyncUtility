using GDriveSyncUtilityLib.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GDriveSyncUtilityLib.Manager
{
    class FileManager : IDBManager
    {
        public List<FileModel> GetAllFiles()
        {
            return new List<FileModel>();
        }

        public FileModel GetFileByID(int id)
        {
            return new FileModel();
        }

        public bool SaveFile(FileModel file)
        {

            return false;
        }
    }
}
