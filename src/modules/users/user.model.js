import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database/database.js';

export const User = sequelize.define(
    'users',
    {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('normal', 'admin'),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          user.password = await encryptedPassword(user.password);
        },
      },
    }
  );
  
  