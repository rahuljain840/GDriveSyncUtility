using GDriveSyncUtilityLib.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GDriveSyncUtilityLib.Manager
{
    public interface IDBManager
    {
        List<FileModel> GetAllFiles();
        FileModel GetFileByID(int id);
    }
}
