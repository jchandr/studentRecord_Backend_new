/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facultytable', {
    facultyId: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    authorityLevel: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    affiliation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    tableName: 'facultytable'
  });
};
