import app from "./app";
import { sequelize } from "./config/db-connector"; // Adjust the path as necessary

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Base de datos conectada");
    app.listen(6505, () => {
      console.log("Server activo");
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

main();
