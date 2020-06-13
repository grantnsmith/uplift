module.exports = function(sequelize, DataTypes) {
  const Business = sequelize.define("Business", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: DataTypes.INTEGER,
    website: DataTypes.TEXT,
    address: DataTypes.TEXT,
    twitter: DataTypes.TEXT,
    instagram: DataTypes.TEXT,
    facebook: DataTypes.TEXT,
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Business.associate = function(models) {
    Business.belongsTo(models.Category);
  };

  return Business;
};
