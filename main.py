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

cursor.execute(""" CREATE TABLE people(
               first_name TEXT,
               last_name TEXT,
               age INTEGER,
)
               """)
