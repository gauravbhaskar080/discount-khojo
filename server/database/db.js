import mongoose from 'mongoose';

const Connection = async () => {
    const URL = process.env.MONGO_URL;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error while connecting with the database', error.message);
    }

};

export default Connection;