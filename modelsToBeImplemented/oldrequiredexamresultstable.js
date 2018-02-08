/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oldrequiredexamresultstable', {
    ExamSequenceNumber: {
      type: DataTypes.INTEGER(11),
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
      allowNull: false
    },
    TransactionTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ChangeBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ChangeTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'oldrequiredexamresultstable'
  });
};
