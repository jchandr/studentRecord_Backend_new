/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requiredexamresultstable', {
    ExamSequenceNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ActualExamDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Comment: {
      type: DataTypes.STRING(100),
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
    tableName: 'requiredexamresultstable'
  });
};
