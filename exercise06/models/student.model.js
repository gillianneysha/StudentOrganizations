module.exports = (sequelize, Sequelize) => {
  const validCourses = ['BIA', 'CA', 'IS', 'IEMC', 'BM', 'EGBM', 'HRM', 'MM', 'CSEC', 'REM', 'SIE'];

    const Student = sequelize.define('student', {
      idNumber: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isInt: true
          }
      },
      password: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      emailAddress: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      course: {
        type: Sequelize.STRING,
        validate:{
            isIn: {
                args:[validCourses],
                msg: 'Invalid course. Please choose one of: BIA, CA, IS, IEMC, BM, EGBM, HRM, MM, CSEC, REM, SIE',
            }
        }
      }
    });
    Student.sync().catch((err) => {
      console.error(`Error syncing Student model: ${err.message}`);
    });
    return Student;
  };