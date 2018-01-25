using GDriveSyncUtilityLib.GDriveApi;
using GDriveSyncUtilityLib.Helpers;
using GDriveSyncUtilityLib.Manager;
using GDriveSyncUtilityLib.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace GDriveSyncUtility.Controllers
{
    public class FileController : ApiController
    {
        private readonly IDBManager _dbManager;

        public FileController(IDBManager dbManager)
        {
            _dbManager = dbManager;
        }

        // GET: api/Files
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Files/5
        public List<FileModel> Get(string id)
        {
            var service = AuthenticationHelper.GetDriveService();

            var gdriveFiles = FileAPI.GetFilesInFolder(service, id);

            return FileHelper.GetFiles(_dbManager, gdriveFiles);
        }

        // POST: api/Files
        public void Post([FromBody]string value)
        {

        }

        // POST: api/Files
        public void Post([FromBody]List<FileModel> files)
        {
            foreach (var file in files)
            {
                _dbManager.SaveFile(file);
            }
        }

        // PUT: api/Files/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Files/5
        public void Delete(int id)
        {
        }
    }
}
