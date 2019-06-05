import { sequelize } from './database/db';

const prepareDatabase = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await sequelize.authenticate();

      sequelize
        .sync({
          force: true
        })
        .then(() => resolve('Database Synced!'))
        .catch((err: any) => reject(err));
    } catch (err) {
      console.log(err);
    }
  });
};

export default prepareDatabase;
