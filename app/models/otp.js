import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const otp = sequelize.define("otp", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invalid_attempt_count: {
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    attempt_at:{
        type: DataTypes.DATE,
        allowNull:false
    },
  },{
    timestamps:true,
    paranoid:true,
  });
  otp.association = (db)=>{
    otp.belongsTo(db.employee);
  }
  return otp;
};