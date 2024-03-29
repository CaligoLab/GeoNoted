﻿using System;
namespace Geonote.Repositories
{
    public class TypeRepository
    {
        private static readonly string ErrandType = "Type";

        public static void AddNewType(string typeName, bool recurring)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData(ErrandType, "ID, TypeName, Recurring", $"\" {id}\", \"{typeName}\", \"{recurring}\"");
        }

        public TypeRepository()
        {

        }
    }
}

