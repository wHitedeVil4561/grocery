import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const city = sequelize.define("city", {
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
  city.association = (db)=>{
    city.hasMany(db.employee);
  }
  return city;
};