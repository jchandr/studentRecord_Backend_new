/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('specializationexaminertable', {
    ExamSequenceNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Examiner: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'specializationexaminertable'
  });
};
