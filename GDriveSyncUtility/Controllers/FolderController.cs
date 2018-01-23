using GDriveSyncUtilityLib.GDriveApi;
using GDriveSyncUtilityLib.Helpers;
using GDriveSyncUtilityLib.Manager;
using GDriveSyncUtilityLib.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GDriveSyncUtility.Controllers
{
    public class FolderController : ApiController
    {
        private readonly IDBManager _dbManager;

        public FolderController(IDBManager dbManager)
        {
            _dbManager = dbManager;
        }

        // GET: api/Folder
        public List<FileModel> Get()
        {
            var service = AuthenticationHelper.GetDriveService();

            var gdriveFolders = FolderAPI.GetFolders(service);

            return FileHelper.GetFiles(_dbManager, gdriveFolders);
        }

        // GET: api/Folder/5
        public List<FileModel> Get(string id)
        {
            var service = AuthenticationHelper.GetDriveService();

            var gdriveFolders = FolderAPI.GetFolders(service, id);

            return FileHelper.GetFiles(_dbManager, gdriveFolders);
        }

        // POST: api/Folder
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Folder/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Folder/5
        public void Delete(int id)
        {
        }
    }
}
