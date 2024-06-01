import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const module = sequelize.define("module", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
  });
  return module;
};