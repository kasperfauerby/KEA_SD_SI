import  express  from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import users  from "./routers/users.js";
import spacecrafts from "./routers/spacecrafts.js";

const app = express();

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Node Swagger API",
        version: "1.0.0",
        description: "A sample API",
    },
};

const options = {
    swaggerDefinition,
    apis: ["./routers/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use(users);
app.use(spacecrafts);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});