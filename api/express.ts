import express, {Application} from 'express';
const cors = require('cors');

const app: Application = express();

const healthCheck = require('./routes/healthCheck')
const gcpRunGet = require('./routes/gcp-run-get')
const gcpRunCreate = require('./routes/gcp-run-create')
const databaseThing = require('./routes/databaseReturn')
const database = require('./database')

app.use(express.json());
app.use(cors());
//app.use(database);

app.use("/api/healthcheck", healthCheck);
app.use("/api/gcp/get", gcpRunGet);
app.use('/api/gcp/create',gcpRunCreate )
app.use("/api/sql", databaseThing)

export default app;
