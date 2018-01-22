'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    idx: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    transactionTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    firstName: {
      type: DataTypes.STRING(450),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(450),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(450),
      allowNull: true
    },
    studentBNumber: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    contactAdviser: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    authorizeFlag: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    studentType: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: 'PhD'
    },
    addBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'studenttable'
  }, {
  });
  return Student;
};

