/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rpeProspectusTable', {
    idx: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    prospectus: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    prospectusTitle: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    prospectusDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rpePresentationApproved: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    rppDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rpeReportApproved: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    rprDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    editBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    defenseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dissertationTitle: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'rpeProspectusTable'
  });
};
