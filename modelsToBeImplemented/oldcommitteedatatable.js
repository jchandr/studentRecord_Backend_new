/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oldcommitteedatatable', {
    RowId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Idx: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    FacultyID: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    Member_Name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Role: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Affiliation: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    TransactionDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    AddBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DropTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    DropBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'oldcommitteedatatable'
  });
};
