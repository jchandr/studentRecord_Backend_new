/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('progresstable', {
    idx: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true
    },
    dateAdmissionToMS: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    completedMSBU: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    dateMSDegree: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateAdmissionToProgram: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    compExamComplete: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    dateCompExamCompletion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    abd: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    admissionCandidancyDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    graduatedPhd: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    awardDegreeDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    droppedFromProgram: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    droppedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    switchedPhdToMs: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    switchedDate: {
      type: DataTypes.DATEONLY,
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
    }
  }, {
    tableName: 'progresstable'
  });
};
