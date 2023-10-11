exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { name: 'Vivian Visual', username: 'vivianVisual', email: 'vivVisual@example.com', password: 'securepass' },
        // Add more data for the initial user, if needed
      ]);
    });
};