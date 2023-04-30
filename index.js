const mongoose = require('mongoose');

let url = 'mongodb+srv://nntruyen027:2706@cluster0.exukcih.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', (err) => {
    if (err) throw err;
});

db.once('open', () => {
    //Khởi tạo schema
    var Schema = mongoose.Schema;

    var blogSchema = new Schema({
        title: String,
        author: String,
        body: String,
        hidden: Boolean
    });

    blogSchema.methods.showMessages = function () {
        console.log(`Đã thêm bài viết mới có tên ${this.title}`);
    }

    var Blog = mongoose.model('Blog', blogSchema);

    var dataInsert = {
        title: 'Lập trình NodeJS căn bản',
        author: 'Freetuts.net',
        body: 'Nội dung lập trình NodeJs căn bản',
        hidden: false
    }

    var blogCollections = new Blog(dataInsert);

    blogCollections.save().then(data => {
        console.log(data);
        blogCollections.showMessages();
    }).catch(err => {
        console.error(err);
    })
});

