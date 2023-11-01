import * as dotenv from 'dotenv';
import { Express } from 'express-serve-static-core'; // Import Express type
import { getConnection } from './connection';
import { sampleData } from './data/dataSource';

dotenv.config();

const startServer = (app: Express) => { // Use Express type
  const PORT = process.env.PORT || 3000;

  app.get("/health", (req, res) => {
    return res.status(200).send({
      message: "buhay !!!!"
    });
  });

  app.get("/semi", (req, res) => {
    return res.status(500).send({
      message: " !! semi error lng naman !!"
    });
  });

  app.get("/get-data", (req, res) => {
    return res.status(200).send(sampleData);
  });

  app.get("/get-articles", async (req, res) => {
    await getConnection().then(async (db) => {
      const articleC = await db.collection('articles').find({});
      const articles = await articleC.toArray();
      console.log("res", articles);
      res.status(200).send(articles);
    });
  });

  app.listen(PORT, async () => {
    console.log(`listening on port ${PORT}`);
  });
};

export default startServer;
