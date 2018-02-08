/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oldstudentdatatable', {
    Idx: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    TransactionTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    First_Name: {
      type: DataTypes.STRING(450),
      allowNull: true
    },
    Last_Name: {
      type: DataTypes.STRING(450),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(450),
      allowNull: true
    },
    Stud_BNumber: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    Username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Contact_Advisor: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    AuthorizeFlag: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Student_Type: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: 'PhD'
    },
    AddBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'oldstudentdatatable'
  });
};
