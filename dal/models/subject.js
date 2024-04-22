"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subject.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Subject",
    }
  );
  Subject.associate = function (models) {
    Subject.associate = function (models) {
      Subject.hasMany(models.Section, {
        foreignKey: "subjectId",
        as: "sections",
      });
    };
  };
  return Subject;
};
