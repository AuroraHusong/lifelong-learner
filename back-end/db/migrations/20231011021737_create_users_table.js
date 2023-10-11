exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary(); // Auto-incrementing primary key
      table.string('name').notNullable(); // Name column, not nullable
      table.string('username').notNullable(); // Username column, not nullable
      table.string('email').notNullable().unique(); // Email column, not nullable and unique
      table.string('password').notNullable(); // Password column, not nullable
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Created timestamp
      table.timestamp('updated_at').defaultTo(knex.fn.now()); // Updated timestamp
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };
  