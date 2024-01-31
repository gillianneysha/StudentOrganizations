// const db = require('../models');
// const Student = db.students;
// const Op = db.Sequelize.Op;
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// exports.create = (req, res) => {
//     const student = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       idNumber: req.body.idNumber,
//       emailAddress: req.body.emailAddress,
//       password: bcrypt.hashSync(req.body.password, 10),
//       course: req.body.course
//     };
  
//     Student.create(student)
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message: err.message || "Some error occured"
//         });
//       });
//     };

// exports.findAll = (req, res) => {
//     Student.findAll( {
//       attributes: { exclude: ['password'] } // Exclude the 'password' field
//     })
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message:
//             err.message || 'Some error occurred while retrieving students'
//         });
//       });
//   };

//   // New login logic
// exports.login = (req, res) => {
//   const { idNumber, password } = req.body;

//   // Find the user by student number
//   Student.findOne({ where: { idNumber } })
//     .then((student) => {
//       if (!student) {
//         return res.status(404).send({ message: 'User not found.' });
//       }

//       // Compare the provided password with the hashed password in the database
//       bcrypt.compare(password, student.password, (err, result) => {
//         if (err || !result) {
//           return res.status(401).send({ message: 'Invalid credentials.' });
//         }

//         // Generate a JWT token for authentication
//         const token = jwt.sign({ id: student.id, idNumber: student.idNumber }, 'a1b1c1', {
//           expiresIn: '1h'
//         });

//         // res.send({ message: 'Sign-in successful.', idNumber});
//         res.redirect('/signin?successMessage=Sign-in successful.');

//       });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred'
//       });
//     });
// };

// const db = require('../models');
// const Student = db.students;
// const Op = db.Sequelize.Op;
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// exports.create = (req, res) => {
//     const student = {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         idNumber: req.body.idNumber,
//         emailAddress: req.body.emailAddress,
//         password: bcrypt.hashSync(req.body.password, 10),
//         course: req.body.course
//     };

//     Student.create(student)
//         .then((data) => {
//             res.redirect('/students?successMessage=Registration successful.');
//         })
//         .catch((err) => {
//             res.redirect('/students?errorMessage=Failed to register.');
//         });
// };

// exports.findAll = (req, res) => {
//     Student.findAll({
//         attributes: { exclude: ['password'] } // Exclude the 'password' field
//     })
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: err.message || 'Some error occurred while retrieving students'
//             });
//         });
// };

// // New login logic
// exports.login = (req, res) => {
//     const { idNumber, password } = req.body;

//     // Find the user by student number
//     Student.findOne({ where: { idNumber } })
//         .then((student) => {
//             if (!student) {
//                 return res.status(404).send({ message: 'User not found.' });
//             }

//             // Compare the provided password with the hashed password in the database
//             bcrypt.compare(password, student.password, (err, result) => {
//                 if (err || !result) {
//                     return res.redirect('/signin?errorMessage=Invalid credentials.');
//                 }

//                 // Generate a JWT token for authentication
//                 const token = jwt.sign({ id: student.id, idNumber: student.idNumber }, 'a1b1c1', {
//                     expiresIn: '1h'
//                 });

//                 // If the login is successful, redirect with success message
//                 res.redirect('/signin?successMessage=Sign-in successful.');
//             });

//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: err.message || 'Some error occurred'
//             });
//         });
// };

const db = require('../models');
const Student = db.students;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.create = (req, res) => {
    const student = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        idNumber: req.body.idNumber,
        emailAddress: req.body.emailAddress,
        password: bcrypt.hashSync(req.body.password, 10),
        course: req.body.course
    };

    Student.create(student)
        .then((data) => {
            res.redirect('/registration?successMessage=Registration successful.');
        })
        .catch((err) => {
            res.redirect('/registration?errorMessage=Failed to register.');
        });
};

exports.findAll = (req, res) => {
    Student.findAll({
        attributes: { exclude: ['password'] } // Exclude the 'password' field
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving students'
            });
        });
};

// New login logic
exports.login = (req, res) => {
    const { idNumber, password } = req.body;

    // Find the user by student number
    Student.findOne({ where: { idNumber } })
        .then((student) => {
            if (!student) {
                return res.status(404).send({ message: 'User not found.' });
            }

            // Compare the provided password with the hashed password in the database
            bcrypt.compare(password, student.password, (err, result) => {
                if (err || !result) {
                    return res.redirect('/signin?errorMessage=Invalid credentials.');
                }

                // Generate a JWT token for authentication
                const token = jwt.sign({ id: student.id, idNumber: student.idNumber }, 'a1b1c1', {
                    expiresIn: '1h'
                });

                // If the login is successful, redirect with success message
                res.redirect('/signin?successMessage=Sign-in successful.');
            });

        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred'
            });
        });
};

