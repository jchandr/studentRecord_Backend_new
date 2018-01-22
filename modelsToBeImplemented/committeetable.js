/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('committeetable', {
    rowIdx: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idx: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    facultyId: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    transactionId: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    addBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    affiliation: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'committeetable'
  });
};
