using System;
namespace Geonote.Repositories
{
    public class HintRepository
    {
        private static readonly string HintTableName = "Hint";

        public static void AddNewHint(string hintName, string? hintId)
        {
            var id = Guid.NewGuid();

            var columnNames = "Id, Name";
            var columnValues = $"\"{id}\", \"{hintName}\"";

            if (hintId != null)
            { columnNames += ", hintId"; columnValues += $", \"{hintId}\""; }

            SQLTableManagement.InsertData(HintTableName, columnNames, columnValues);

           
        }
    }
}

