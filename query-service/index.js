require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const _ = require('lodash');
const Joi = require('joi');

const { getClient } = require('./mclient.js');

app.use(express.json());
app.use(cors());
app.options('*', cors());

//Need to add validation, long, lat and radius present and dependent
const paginationSchema = Joi.object()
  .keys({
    offset: Joi.number().required(),
    count: Joi.number().required().min(10),
    country_of_destination: Joi.string(),
    country_of_origin: Joi.string(),
    facility_sends_to_id: Joi.string(),
    goods_description: Joi.string(),
    longitude: Joi.number(),
    latitude: Joi.number(),
    radius: Joi.number(),
  })
  .or(
    'offset',
    'country_of_destination',
    'country_of_origin',
    'facility_sends_to_id',
    'goods_description',
    'longitude',
    'latitude',
    'radius'
  );

let mongoClient = null;

getClient().then((client) => {
  mongoClient = client;
});

//getClient();

app.post('/data/search', async (req, resp) => {
  console.log('***************Request', req.body);
  console.log('***************Finding', req.body.query.filters[0]);
  //const inputParams = Object.keys(req.query);
  //const offset = req.query.offset;
  //const count = req.query.count;
  //const queryParamaters = { ...req.query };
  const respObjCursor = await mongoClient
    .db('Sample_Mocked_Data')
    .collection('Full_T')
    .find(req.body.query.filters[0])
    .limit(req.body.query.pageSize)
    .sort(req.body.query.sort);

  //await respObjCursor.forEach(console.dir);
  const allValues = await respObjCursor.toArray();
  console.log('all values length', allValues.length);

  const count = await respObjCursor.count();
  console.log('all values length - Count property', count);

  resp.json(allValues);
});

const port = process.env.EXPRESS_PORT || 3500;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
