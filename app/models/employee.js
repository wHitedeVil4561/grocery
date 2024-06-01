import { Sequelize } from "sequelize";
import { APP_CONSTANT } from "../constant/app.constant.js";

export default (sequelize, DataTypes) => {
  const employee = sequelize.define(
    "employee",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      employee_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type:DataTypes.STRING,
      },
      email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      phone: {
        type:DataTypes.STRING,
      },
      country_code: {
        type:DataTypes.STRING,
        defaultValue:'+91'
      },
      dob: {
        type: DataTypes.DATE,
      },
      password: {
        type: DataTypes.STRING,
      },
      onboard_status: {
        type: DataTypes.INTEGER,
        defaultValue: APP_CONSTANT.ONBOARD_STATUS.PENDING
      },
      secondary_email:{
        type: DataTypes.STRING,
      },
      secondary_phone:{
        type: DataTypes.STRING,
      },
      secondary_country_code:{
        type: DataTypes.STRING,
        defaultValue: '+91'
      },
      joining_date: {
        type:DataTypes.DATE,
      }
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  employee.association = (db)=>{
    employee.hasOne(db.employee_nominee);
    employee.belongsTo(db.gender);
    employee.belongsTo(db.city);
    employee.hasMany(db.session);
    employee.hasOne(db.otp);
    
  }
  return employee;
};
