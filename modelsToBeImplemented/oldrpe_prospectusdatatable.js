/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oldrpe_prospectusdatatable', {
    Idx: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    Prospectus: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Prospectus_Title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Prospectus_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    RPE_Presentation_approved: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    RPP_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    RPE_Report_Approved: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    RPR_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TransTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EditBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DefenseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DissertationTitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'oldrpe_prospectusdatatable'
  });
};
