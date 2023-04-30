const mongoose = require('mongoose');

let url = 'mongodb+srv://nntruyen027:2706@cluster0.exukcih.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', (err) => {
    if (err) throw err;
});

db.once('open', () => {
    console.log('Kết nối thành công!');
});