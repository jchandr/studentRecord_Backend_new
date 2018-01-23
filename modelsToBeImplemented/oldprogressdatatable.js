/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oldprogressdatatable', {
    Idx: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    Date_Admission_ToMS: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Date_MS_Degree: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Date_Admission_ToProgram: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Comp_Exam_Complete: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Date_Comp_Exam_Completion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ABD: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Admission_Candidacy_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Graduated: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Award_Degree_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Dropped_From_Program: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Dropped_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SwitchedPhD_To_MS: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Switched_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TransTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EditBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'oldprogressdatatable'
  });
};
