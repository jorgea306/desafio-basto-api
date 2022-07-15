import mongoose from 'mongoose';
import config from './config.js';

(async () => {
    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONOGO_DATABASE}`);
        console.log('Database is connecetec to: ', db.connection.name);
    } catch (error) {
        console.error(error);
    }
})()