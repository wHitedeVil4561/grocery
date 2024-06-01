import { Sequelize } from "sequelize";
import  { APP_CONSTANT }  from "../constant/app.constant.js";

export default (sequelize, DataTypes) => {
  const blog = sequelize.define(
    "blog",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      proposed_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      proposed_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      approved_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      approved_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cover_img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content_media_type: {
        type: DataTypes.INTEGER,
        defaultValue: APP_CONSTANT.MEDIA.IMG
      },
      content_media_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      key_takeaway: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull:false
      }
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  return blog;
};
