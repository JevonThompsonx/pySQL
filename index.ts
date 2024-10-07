import { Database } from 'bun:sqlite'
{
  using db = new Database('test.db')
  using mem = new Database(':memory:')

  db.query(`
           CREATE TABLE IF NOT EXISTS people(
             first_name TEXT,
             last_name TEXT,
             age INTEGER
           )
           `).run()
  const result = db.query(`
         SELECT DISTINCT first_name, last_name,age FROM people
         `).all()
  for (let row of result) {
    console.log(`
  first name ${row.first_name}
  last_name ${row.last_name}
  age ${row.age}
                `)
  }
}

