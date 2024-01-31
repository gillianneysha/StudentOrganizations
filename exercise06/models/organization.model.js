module.exports = (sequelize, Sequelize) => {
    
  
      const Organization = sequelize.define('organization', {
        name: {
          type: Sequelize.STRING,
          unique: true
        },
        aka: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true
        }
      });
      Organization.sync().catch((err) => {
        console.error(`Error syncing Organization model: ${err.message}`);
      });
      return Organization;
    };