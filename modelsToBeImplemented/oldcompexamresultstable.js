/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oldcompexamresultstable', {
    ExamSequenceNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Student: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    WrittenResult: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OralResult: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TransactionTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ChangeTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'oldcompexamresultstable'
  });
};
