'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    image: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10,2),
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
    Spot.hasMany(models.Review, { 
      foreignKey: 'spotId',
      onDelete: 'CASCADE',
      hooks: true
   })
  };
  return Spot;
};