const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb+srv://pranjal:pranjal@cluster0.oa6on.mongodb.net/FragnanceBackend?retryWrites=true&w=majority');
}