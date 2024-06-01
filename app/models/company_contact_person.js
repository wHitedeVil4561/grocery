import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const company_contact_person = sequelize.define("company_contact_person", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    },
    designation:{
        type:DataTypes.STRING,
        allowNull:false
    },
  },{
    timestamps:true,
    paranoid:true,
  });
  company_contact_person.association = (db) =>{
    company_contact_person.belongsTo(db.company,{
        allowNull:false
    });
  }
  return company_contact_person;
};