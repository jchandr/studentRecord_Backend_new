'use strict'
module.exports = (sequelize, DataTypes) => {
  var Funding = sequelize.define('Funding', {
    rowIdx: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idx: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    semesterCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    raOrTaOrGa: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    stipend: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    tuition: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    numberCredits: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    courses: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    stipendAmount: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '-1'
    },
    transTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    editBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'fundingtable'
  }, {});
  return Funding;
}
