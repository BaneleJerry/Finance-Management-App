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
        last_accessed_at: new Date(),
        token: "sample_token_1", // Replace with actual token if required
      },
      {
        name: "Jane",
        surname: "Smith",
        date_of_birth: "1991-02-02",
        username: "janesmith",
        email: "jane.smith@example.com",
        passwordHash: "plaintext_password_hash_2", // Replace with actual hashed password
        createdAt: new Date(),
        last_accessed_at: new Date(),
        token: "sample_token_2", // Replace with actual token if required
      },
      {
        name: "Banele",
        surname: "Thabede",
        date_of_birth: "2001-12-18",
        username: "Thabede.18",
        email: "Banelethabede@outllok.com",
        passwordHash:
          "$2b$10$B8AtXwOXFTRtRw3yjkujhOdQkgqnaLFT9PESKEQPqHDyp6Hpof2mO",
        createdAt: new Date("2024-06-10T00:07:55.950Z"),
        last_accessed_at: new Date("2024-06-11T00:29:14.556Z"),
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTcxODA2NTc1NCwiZXhwIjoxNzE4MDY5MzU0fQ.QWKzktk_qF1oT8-rCBai0AUGE0l_HB04hkrfKRFCQ5E",
      },
      {
        name: "Alice",
        surname: "Johnson",
        date_of_birth: "1985-05-05",
        username: "alicej",
        email: "alice.johnson@example.com",
        passwordHash: "plaintext_password_hash_3", // Replace with actual hashed password
        createdAt: new Date(),
        last_accessed_at: new Date(),
        token: "sample_token_3", // Replace with actual token if required
      },
      {
        name: "Bob",
        surname: "Brown",
        date_of_birth: "1979-11-11",
        username: "bobbrown",
        email: "bob.brown@example.com",
        passwordHash: "plaintext_password_hash_4", // Replace with actual hashed password
        createdAt: new Date(),
        last_accessed_at: new Date(),
        token: "sample_token_4", // Replace with actual token if required
      },
      // Add more users here...
    ];

    await queryInterface.bulkInsert("users", usersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
