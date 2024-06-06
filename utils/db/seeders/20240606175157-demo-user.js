"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersData = [
      {
        name: "John",
        surname: "Doe",
        date_of_birth: "1990-01-01",
        username: "johndoe",
        email: "john.doe@example.com",
        passwordHash: "plaintext_password_hash_1", // Replace with actual hashed password
        createdAt: new Date(),
        last_accesed_at: new Date(),
      },
      {
        name: "Jane",
        surname: "Smith",
        date_of_birth: "1991-02-02",
        username: "janesmith",
        email: "jane.smith@example.com",
        passwordHash: "plaintext_password_hash_2", // Replace with actual hashed password
        createdAt: new Date(),
        last_accesed_at: new Date(),
      },
      // Add more users here...
    ];

    await queryInterface.bulkInsert("Users", usersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
