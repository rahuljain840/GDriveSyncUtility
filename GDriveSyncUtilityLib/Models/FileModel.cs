using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GDriveSyncUtilityLib.Models
{
    public class FileModel
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public DateTime? CreatedAt { get; set; }

        public Boolean IsNew { get; set; }

        public Boolean Updated { get; set; }

        public Boolean Deleted { get; set; }
    }
}