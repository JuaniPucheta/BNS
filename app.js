import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const port = process.env.PORT || 4000;

const swaggerSpec = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Node Swagger API",
			version: "1.0.0",
		},
		servers: [
			{
				url: "http://localhost:4000",
			},
		],
	},
	apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

app.use(express.json());
app.use(usuarioRoutes);

app.use(
	"/swagger",
	swaggerUI.serve,
	swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

app.listen(port, () => {
	console.log(`Escuchando en ${port}`);
});
