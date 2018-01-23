/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('specializationexamresultstable', {
    ExamSequenceNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CreateIndex: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    SemesterCode: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    ExamDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Topic: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Comment: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Student: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    Result: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: 'To be graded'
    },
    TransactionTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'specializationexamresultstable'
  });
};
