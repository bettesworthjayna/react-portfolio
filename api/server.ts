import app from './express'
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

