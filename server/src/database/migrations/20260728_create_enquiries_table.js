/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('enquiries', (table) => {
    table.string('id', 30).primary();
    table.string('full_name', 150).notNullable();
    table.string('email', 255).notNullable();
    table.string('phone_number', 50).notNullable();
    table.string('service', 100).notNullable();
    table.text('message').notNullable();
    table.string('status', 50).notNullable().defaultTo('New');
    table.timestamps(true, true); // created_at, updated_at
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('enquiries');
};
