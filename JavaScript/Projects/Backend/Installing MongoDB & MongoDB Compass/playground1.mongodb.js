use('SigmaDatabase');

// Insert a few documents into the coursed collection.
db.getCollection('courses').insertMany([
  {
    "name": "Python",
    "cost": "Free",
    "learner": "Arvaz",
    "age": 14
  },
  {
    "name": "JavaScript",
    "cost": "Free",
    "learner": "Arvaz",
    "age": 14
  },
  {
    "name": "C++",
    "cost": "Paid",
    "learner": "Arvaz",
    "age": 14
  },
  {
    "name": "Kotlin",
    "cost": "Free",
    "learner": "Arvaz",
    "age": 14
  },
  {
    "name": "Swift",
    "cost": "Paid",
    "learner": "Arvaz",
    "age": 14
  },
  {
    "name": "C#",
    "cost": "Free",
    "learner": "Arvaz",
    "age": 14
  },
  {
    "name": "Ruby",
    "cost": "Free",
    "learner": "Arvaz",
    "age": 14
  },
  {
    "name": "Go",
    "cost": "Free",
    "learner": "Arvaz",
    "age": 14
  },
  {
    "name": "PHP",
    "cost": "Free",
    "learner": "Arvaz",
    "age": 14
  },
  {
    "name": "Rust",
    "cost": "Free",
    "learner": "Arvaz",
    "age": 14
  }
]
);


// Print a message to the output window.
console.log(`Done, data inserted!`);