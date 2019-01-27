using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace WebApi.CustomClasses
{
    public class CustomMySqlDatabase
    {
        string myConnectionString = "SERVER=localhost;" +
                            "DATABASE=phase7;" +
                            "UID=phase7;" +
                            "PASSWORD=-sEf.RQrGm.BoUjB51OM;" +
                            "PORT=3306;" +
                            "SSL Mode=none;";

        public List<string[]> readRowFromTableWhereString(string table, string where, string mydata)
        {
            MySqlConnection connection = new MySqlConnection(myConnectionString);
            List<string[]> myList = new List<string[]>();
            MySqlCommand command = connection.CreateCommand();
            command.CommandText = "SELECT * FROM " + table + " WHERE " + where + " = '" + mydata + "'";
            connection.Open();
            MySqlDataReader Reader = command.ExecuteReader();
            while (Reader.Read())
            {
                string[] data = new string[Reader.FieldCount];
                for (int i = 0; i < Reader.FieldCount; i++)
                {
                    data[i] = Reader.GetValue(i).ToString();
                }
                myList.Add(data);
            }
            connection.Close();
            return myList;            
        }
    }
}
