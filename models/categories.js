module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    businessType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "./assets/fist.jpg"
    }
  });

  Category.associate = function(models) {
    Category.hasMany(models.Business);
  };

  return Category;
};
