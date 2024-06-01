import { Sequelize } from "sequelize";
import { APP_CONSTANT } from "../constant/app.constant.js";

export default (sequelize, DataTypes) => {
  const company = sequelize.define("company", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull:false
    },
    logo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    note:{
        type:DataTypes.STRING,
        allowNull:false
    },
    billing_doc:{
        type:DataTypes.STRING,
        allowNull:false
    },
    billing_date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    status:{
        type:DataTypes.INTEGER,
        defaultValue:APP_CONSTANT.STATUS.ACTIVE
    }
  },{
    timestamps:true,
    paranoid:true,
  });
  company.association = (db)=>{
    company.hasMany(db.company_contact_person);
    company.belongsTo(db.industry,{
        allowNull:false
    });
  }
  return company;
};