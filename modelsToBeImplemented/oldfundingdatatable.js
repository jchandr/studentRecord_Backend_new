/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oldfundingdatatable', {
    RowIdx: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Idx: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    Semester_Code: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    RA_TA_GA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Stipend: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Tuition: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Number_Credits: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    Comment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Courses: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Stipend_Amount: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '-1'
    },
    TransTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EditBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ChangeTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    ChangeBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'oldfundingdatatable'
  });
};
