var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://player-1:mixjin-6mabqo-Kyncuw@cluster0.cwtwv.mongodb.net/myDB1?retryWrites=true&w=majority",{ useNewUrlParser: true });
module.exports = mongoose;
