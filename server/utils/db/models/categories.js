const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.belongsTo(models.Users, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
      Categories.hasMany(models.transactions, { foreignKey: "category_id" });
      Categories.hasMany(models.budget, { foreignKey: "category_id" });
    }
  }

  Categories.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("income", "expense"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "categories",
      indexes: [
        {
          unique: true,
          fields: ["user_id", "name", "type"],
        },
      ],
    }
  );
  return Categories;
};
