const mongoose = require ("mongoose");


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social_network_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

//  this is to allow log mongo queries being executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;
