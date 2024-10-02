import { Database } from 'bun:sqlite'
{
  using db = new Database('test.db')
  using mem = new Database(':memory:')

  db.query(`
           CREATE TABLE person(
             name TEXT,
             age INTEGER,
           )
           `).run()
}
