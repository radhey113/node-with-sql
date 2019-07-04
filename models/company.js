'use strict';
module.exports = (sequelize, DataTypes) => {
    const company = sequelize.define('company', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        companyName: {
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

    company.associate = function(models) {
        // associations can be defined here
    };
    return company;
};