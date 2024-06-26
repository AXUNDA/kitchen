const { Sequelize } = require("sequelize");
import config from "../common/config";
const sequelize = new Sequelize(config.DB_URI as string);
sequelize.sync({ alter: true });

export { sequelize };
