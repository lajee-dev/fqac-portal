import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}
let client: MongoClient | undefined

export function getMongoClient() {
  if (!uri) throw new Error('MONGODB_URI is not configured')
  if (!client) client = new MongoClient(uri, options)
  return client
}

export async function getDatabase() {
  const mongo = getMongoClient()
  await mongo.connect()
  return mongo.db(process.env.MONGODB_DB || 'fqac')
}
