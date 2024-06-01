import { Sequelize } from "sequelize";

export default (sequelize) => {
  const blog_category_mapping = sequelize.define("blog_category_mapping", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
  },{
    timestamps: true,
  });
  blog_category_mapping.association = (db)=>{
    db.blog.belongsToMany(db.blog_category,{through:blog_category_mapping});
    db.blog_category.belongsToMany(db.blog,{through:blog_category_mapping})
  }
  return blog_category_mapping;
};