using System;
using Geonote.Models;

namespace Geonote.Repositories
{
    public class HintRepository
    {
        private static readonly string HintTableName = "Hint";

        public static void AddNewHint(string hintName, string? hintId, Categories? category, Location? location)
        {
            var id = Guid.NewGuid();

            var columnNames = "Id, Name, Category, Location";
            var columnValues = $"\"{id}\", \"{hintName}\", \"{category}, \"{location}\"";

            if (hintId != null)
            { columnNames += ", id"; columnValues += $", \"{hintId}\""; }


            if (category != null)
            {
                if (category.Id != null)
                { columnNames += ", CategoryId"; columnValues += $", \"{category.Id}\""; }
            }


            if (location != null)
            {
                if (location.Id != null)
                { columnNames += ", LocationId"; columnValues += $", \"{location.Id}\""; }
            }

            SQLTableManagement.InsertData(HintTableName, columnNames, columnValues);
        }
    }
}

