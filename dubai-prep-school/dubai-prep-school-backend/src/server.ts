import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

try {
	mongoose.connect(config.DB_URI as string);

	app.listen(config.SERVER_PORT as string, () => {
		console.log(`Server is running on ${config.SERVER_PORT as string}`);
	});
} catch (error) {
    console.log(error);
}
