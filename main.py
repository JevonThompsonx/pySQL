"""
Learning how to use sqlite 
"""
import sqlite3

conn = sqlite3.connect('test.db')
mem = sqlite3.connect(':memory:')

# Cursor creation

cursor = conn.cursor()
memCursor = mem.cursor()

# Table creation

cursor.execute(""" CREATE TABLE IF NOT EXISTS people(
               first_name TEXT,
               last_name TEXT,
               age INTEGER
);
               """)
#cursor.execute("""
 #   INSERT INTO people(first_name,last_name, age)
  # VALUES("Samantha", "Grey", 21);
   #            """)
#secondInsert = ("Johnny", "Karcol", 34)
#cursor.execute("""
 #   INSERT INTO people(first_name,last_name, age)
  #  VALUES(?,?,?);
   #            """, secondInsert )
#manyInsert = [
    #    {"first_name": "Samantha","age":25, "last_name":"Barnes"},
   #     {"first_name": "Joe","age":35, "last_name":"Barnes"},
  #      {"first_name": "Sarah","age":25, "last_name":"Barnes"}
     #   ]
#cursor.executemany("""
              #     INSERT INTO people(first_name,last_name,age)
               #    VALUES(:first_name,:last_name,:age)
                #   """,manyInsert)
response = cursor.execute("SELECT DISTINCT last_name FROM people ;").fetchall()
for person in response:
    print(person)
conn.commit()
conn.close()
