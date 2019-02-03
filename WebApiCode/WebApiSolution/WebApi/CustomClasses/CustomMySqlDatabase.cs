using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace WebApi.CustomClasses
{
    public class CustomMySqlDatabase
    {
        /*string myConnectionString = "SERVER=localhost;" +
                            "DATABASE=phase7_personalwebsite;" +
                            "UID=phase7;" +
                            "PASSWORD=-sEf.RQrGm.BoUjB51OM;" +
                            "PORT=3306;" +
                            "SSL Mode=none;";*/

        string myConnectionString = "SERVER=localhost;" +
                            "DATABASE=personalwebsite;" +
                            "UID=root;" +
                            "PASSWORD=;";

        public List<string[]> readEverythingFromTable(string table)
        {
            MySqlConnection connection = new MySqlConnection(myConnectionString);
            List<string[]> myList = new List<string[]>();
            MySqlCommand command = connection.CreateCommand();
            command.CommandText = "SELECT * FROM " + table;
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

        public void updateValueToTableWhere(string tabel, string columndata, string wherecolumn, string wheredata)
        {                        
            MySqlConnection connection = new MySqlConnection(myConnectionString);
            string myInsertQuery = "UPDATE " + tabel + " SET " + columndata + " WHERE " + wherecolumn + " = " + wheredata;
            MySqlCommand myCommand = new MySqlCommand(myInsertQuery);
            myCommand.Connection = connection;
            connection.Open();
            myCommand.ExecuteNonQuery();
            myCommand.Connection.Close();
        }

        public void insertStringRow(string tabel, string row, string data)
        {
            MySqlConnection connection = new MySqlConnection(myConnectionString);
            string myInsertQuery = "INSERT INTO " + tabel + " (" + row + ") VALUES (" + data + ")";
            MySqlCommand myCommand = new MySqlCommand(myInsertQuery);
            myCommand.Connection = connection;
            connection.Open();
            myCommand.ExecuteNonQuery();
            myCommand.Connection.Close();
        }

        public void deleterowstring(string tablename, string where, string wheredata)
        {
            MySqlConnection connection = new MySqlConnection(myConnectionString);
            string myInsertQuery = "DELETE FROM " + tablename + " WHERE " + where + " = " + wheredata;
            MySqlCommand myCommand = new MySqlCommand(myInsertQuery);
            myCommand.Connection = connection;
            connection.Open();
            myCommand.ExecuteNonQuery();
            myCommand.Connection.Close();
        }
    }
}
