import * as mongoose from 'mongoose'

const { MONGO_URL, DB_NAME }: any = process.env

export default (() => {
  ;(<any>mongoose.Promise) = global.Promise

  return {
    connect() {
      return mongoose
        .connect(
          MONGO_URL,
          {
            dbName: DB_NAME,
          },
        )
        .then(() => console.log('Successfully connected to db'))
        .catch(err => console.error(err))
    },
    disconnect() {
      return mongoose.disconnect()
    },
  }
})()
