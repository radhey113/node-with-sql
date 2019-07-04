'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      name: {
          type: DataTypes.STRING
      },
      createdAt: {
          allowNull: false,
          type: DataTypes.DATE
      },
      updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
      }
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};