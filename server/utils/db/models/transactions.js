const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    
    static associations(models) {
      Transactions.belongsTo(models.Users, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
      Transactions.belongsTo(models.categories, { foreignKey: "category_id" });
    }
  }
  Transactions.init(
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
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      description: {
        type: DataTypes.TEXT,
      },
      type: {
        type: DataTypes.ENUM("income", "expense"),
        allowNull: false,
      },
    },
    { sequelize, modelName: "transactions" }
  );
  return Transactions;
};
