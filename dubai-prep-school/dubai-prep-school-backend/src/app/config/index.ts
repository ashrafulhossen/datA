import dotenv from "dotenv";
import path from "path";
dotenv.config({
	path: path.join(process.cwd(), ".env"),
});

export default {
	DB_URI: process.env.DB_URI,
	SERVER_PORT: process.env.SERVER_PORT,
};
