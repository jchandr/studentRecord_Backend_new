/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requiredexamtable', {
    ExamSequenceNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SemesterCode: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    Area: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    EvaluationType: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'Written'
    },
    ExamDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'requiredexamtable'
  });
};
