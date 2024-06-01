import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const relationship = sequelize.define("relationship", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  relationship.association = (db)=>{
      relationship.hasMany(db.employee_nominee);
  }
  return relationship;
};
