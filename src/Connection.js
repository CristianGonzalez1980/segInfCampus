import mongoose from 'mongoose';
import config from './config.js';

(async () => {
    try {
        const db = await mongoose.connect("mongodb+srv://allusersdb:rjNhUvVaXOpRn5dl@cluster0.iqx0q.mongodb.net/hack?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("connected to:" + db.connection.name)
    } catch (err) {
        console.error(err)
    }
})();
