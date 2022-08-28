import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/librodb',
  {
/*     useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true */
  }
).then(db => console.log("db is conect")).catch(e=>console.error(e));