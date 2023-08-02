import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb+srv://gaurav:bhaskar@cluster0.jkueovp.mongodb.net/discount_khojo?retryWrites=true&w=majority' ;
    // const URL = "mongodb://127.0.0.1:27017/discount_khojo" ;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error while connecting with the database', error.message);
    }

};

export default Connection;