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
         SELECT first_name, last_name,age FROM people
         `).all() as Person[]

  //for (let row of result) {
  // console.log(`
  //first name ${row.first_name}
  //last_name ${row.last_name}
  //age ${row.age}
  //`)
  //}
  //console.log(db.query('SELECT COUNT(*) as total_people FROM people').get())
  //console.log(db.query('SELECT COUNT(*) as total_barnes_family_members FROM people WHERE last_name="Barnes"').get())
  //console.log('\n the oldest barnes family members are:')
  //console.log(db.query('SELECT * FROM people WHERE last_name="Barnes" ORDER BY age DESC LIMIT 5').all())
  //
  db.query(`
           CREATE TABLE IF NOT EXISTS MOCK_DATA(
             id INTEGER PRIMARY KEY NOT NULL,
             first_name TEXT NOT NULL,
             last_name TEXT NOT NULL,
             email TEXT UNIQUE NOT NULL,
             gender TEXT NOT NULL
           )
           `).run()
  db.query(`
CREATE TABLE IF NOT EXISTS dating_data(
  id INTEGER PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  description TEXT NOT NULL,
  state TEXT NOT NULL,
  single INTEGER NOT NULL,
  gender TEXT,
  queer INTEGER DEFAULT 0
)
         `).run()
  console.log(db.query('SELECT name FROM sqlite_master WHERE type="table"').all())
}


