// const db = require('../models');
// const Organization = db.organizations;
// const Op = db.Sequelize.Op;


// exports.create = (req, res) => {
//     const organization = {
//       name: req.body.name,
//       aka: req.body.aka,
//       description: req.body.description
//     };
  
//     Organization.create(organization)
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
//     Organization.findAll()
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

const db = require('../models');
const Organization = db.organizations;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const organization = {
        name: req.body.name,
        aka: req.body.aka,
        description: req.body.description
    };

    Organization.create(organization)
        .then((data) => {
            res.redirect('/organization?successMessage=Organization added successfully.');
        })
        .catch((err) => {
            res.redirect('/organization?errorMessage=Failed to add organization.');
        });
};

exports.findAll = (req, res) => {
    Organization.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving organizations'
            });
        });
};
