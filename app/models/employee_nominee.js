import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const employee_nominee = sequelize.define(
    "employee_nominee",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      dob: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  employee_nominee.association = (db)=>{
    employee_nominee.belongsTo(db.employee);
    employee_nominee.belongsTo(db.relationship);
  }
  return employee_nominee;
};
