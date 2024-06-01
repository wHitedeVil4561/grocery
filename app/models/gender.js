import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const gender = sequelize.define("gender", {
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
  gender.association = (db)=>{
    gender.hasMany(db.employee);
  }
  return gender;
};