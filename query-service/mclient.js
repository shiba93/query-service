const { MongoClient } = require('mongodb');

const getClient = async () => {
  const uri = 'mongodb://localhost:27017/';

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('client connected')
    await listDatabases(client);
    return client;
  } catch (e) {
    console.error(e);
  }
};

const closeClient = () => {
  client.close();
};

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log('*******Databases:');
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

module.exports = {
  getClient,
  closeClient,
};
