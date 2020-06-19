import * as Knex from "knex";

exports.up = function (knex: Knex) {
  return knex.schema.createTable("group_members", (table) => {
    table.uuid("id").primary();
    table.uuid("groupId").references("groups.id");
    table.uuid("userId").references("users.id");
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTable("group_members");
};
