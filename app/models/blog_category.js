import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const blog_category = sequelize.define(
    "blog_category",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      description: {
        type: DataTypes.STRING,
        allowNull:false
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  return blog_category;
};
