// First step: enter ./server run command sequelize-auto -o "./schema/desso" -d desso -h 127.0.0.1 -u root -p 3306 -x YOUR_PASSWORD -e mysql
// DB_USER=root
// DB_URL=127.0.0.1
// DB_PASSWORD=19950620
// PORT=8889

import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.DB_URL)
const desso = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env
    .DB_URL || 'localhost'}/desso`,
  {
    define: {
      timestamps: false //stop auto adding timestamp to database
    }
  }
)

export default {
  desso // export database api to Models
}