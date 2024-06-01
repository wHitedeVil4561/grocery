import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const session = sequelize.define("session", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    device_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    device_type: {
      type: DataTypes.STRING,
      allowNull:false
    },
    device_token:{
        type: DataTypes.STRING,
        allowNull:false
    },
    token:{
        type:DataTypes.STRING,
        allowNull:false
    },
  },{
    timestamps:true,
    paranoid:true,
  });
  session.association = (db)=>{
    session.belongsTo(db.employee);
  }
  return session;
};