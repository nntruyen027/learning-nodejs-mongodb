const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/StudentManagement', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connecting!');
}).catch(err => {
    console.error(err);
})

let studentSchema = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String
    },
    man: Boolean,
    major: String,
    course: Number,
    faculty: String
});

let Student = mongoose.model('student', studentSchema);

// Student.insertMany([
//     {
//         name: {
//             firstName: 'Nguyễn Ngọc',
//             lastName: 'Truyện'
//         },
//         man: true,
//         major: 'Software Engineering',
//         course: 46,
//         faculty: 'College Of Infomation And Comunication Technology'
//     },
//     {
//         name: {
//             firstName: 'Đỗ Kỳ',
//             lastName: 'Duyên'
//         },
//         man: false,
//         major: 'Software Engineering',
//         course: 46,
//         faculty: 'College Of Infomation And Comunication Technology'
//     },
//     {
//         name: {
//             firstName: 'Bạch Toàn',
//             lastName: 'Mỹ'
//         },
//         man: true,
//         major: 'Computer Networking And Data Comunicaion',
//         course: 46,
//         faculty: 'College Of Infomation And Comunication Technology'
//     },
//     {
//         name: {
//             firstName: 'Nguyễn Phúc Nguyên',
//             lastName: 'Khoa'
//         },
//         man: true,
//         major: 'Software Engineering',
//         course: 47,
//         faculty: 'College Of Infomation And Comunication Technology'
//     },
//     {
//         name: {
//             firstName: 'Đặng Minh',
//             lastName: 'Nhựt'
//         },
//         man: true,
//         major: 'Computer Engineering',
//         course: 47,
//         faculty: 'College Of Engineering'
//     },
//     {
//         name: {
//             firstName: 'Lê Nguyễn Anh',
//             lastName: 'Tuấn'
//         },
//         man: true,
//         major: 'Construction Engineering',
//         course: 47,
//         faculty: 'College Of Engineering'
//     },
//     {
//         name: {
//             firstName: 'Huỳnh Long',
//             lastName: 'Vân'
//         },
//         man: true,
//         major: 'Computer Networking And Data Comunicaion',
//         course: 47,
//         faculty: 'College Of Infomation And Comunication Technology'
//     }
// ]).catch(err => {
//     console.log(err);
// })


Student.find({ course: 47, faculty: 'College Of Engineering' }, 'name major').then(result => {
    result.forEach(student => {
        console.log(`Student: ${student.name.firstName} ${student.name.lastName} - Major: ${student.major}`);
    })
})

Student.findOneAndUpdate({ name: { firstName: 'Lê Nguyễn Anh Tuấn', lastName: 'Nhựt' } }, { name: { firstName: 'Lê Nguyễn Anh', lastName: 'Tuấn' } }, { new: true }).then(result => {
    console.log(result);
}).catch(err => {
    console.error(err);
})


