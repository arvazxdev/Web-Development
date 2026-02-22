use("CrudDb");

console.log(db);
db.createCollection("courses");

// db.courses.insertOne({
//     name: "Sigma Web Dev Course",
//     type: "Free",
//     price: 0,
//     language: "Hindi"
// })

// db.courses.insertMany([
//     {
//         "name": "Ultimate Python Bootcamp",
//         "type": "Paid",
//         "price": 1000,
//         "language": "English"
//     },
//     {
//         "name": "Full Stack Web Development",
//         "type": "Free",
//         "price": 0,
//         "language": "Hindi"
//     },
//     {
//         "name": "Kotlin Mastery Course",
//         "type": "Paid",
//         "price": 799,
//         "language": "English"
//     },
//     {
//         "name": "Machine Learning A to Z",
//         "type": "Paid",
//         "price": 899,
//         "language": "Hindi"
//     },
//     {
//         "name": "JavaScript Pro Course",
//         "type": "Free",
//         "price": 0,
//         "language": "English"
//     },
//     {
//         "name": "AI & Deep Learning",
//         "type": "Paid",
//         "price": 1000,
//         "language": "English"
//     },
//     {
//         "name": "Cyber Security Basics",
//         "type": "Paid",
//         "price": 599,
//         "language": "Hindi"
//     },
//     {
//         "name": "Cloud Computing Essentials",
//         "type": "Paid",
//         "price": 1000,
//         "language": "English"
//     },
//     {
//         "name": "Android App Development",
//         "type": "Free",
//         "price": 0,
//         "language": "Hindi"
//     },
//     {
//         "name": "Blockchain for Beginners",
//         "type": "Paid",
//         "price": 899,
//         "language": "English"
//     }
// ]
// );


// READ

let a = db.courses.find({type: "Free"});
console.log(a.count());

let b = db.courses.findOne({type: "Paid"});
console.log(b);


// UPDATE

db.courses.updateOne({price: 0}, { $set: {price: 299}});
db.courses.updateMany({price: 0}, { $set: {price: 199}});


// DELETE

db.courses.deleteOne({type: "Free"});
db.courses.deleteMany({type: "Free"});