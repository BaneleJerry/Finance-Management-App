const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    static associate(models) {
      Budget.belongsTo(models.Users, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
      Budget.belongsTo(models.categories, {
        foreignKey: "category_id",
      });
    }
  }

  Budget.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
      },
      amount: {
        type: DataTypes.NUMERIC(10, 2),
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "budget",
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["user_id", "category_id", "start_date", "end_date"],
        },
      ],
    }
  );

  return Budget;
};
