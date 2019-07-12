'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      name: {
          type: DataTypes.STRING
      },
      email: {
          type: DataTypes.STRING
      },
      password: {
          type: DataTypes.STRING
      },
      accessToken: {
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
    User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};