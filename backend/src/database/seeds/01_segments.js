const tableName = 'segments';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        { name: 'Alimentação', description: 'Alimentação' },
        { name: 'Manutenção', description: 'Manutenção' },
        { name: 'Engenharia - Construção', description: 'Engenharia - Construção' },
        { name: 'Saúde - Laboratório', description: 'Saúde - Laboratório' },
        { name: 'Saúde - Diversos', description: 'Saúde - Diversos' },
        { name: 'Manutenção Viária', description: 'Manutenção Viária' },
        { name: 'Mobiliário e Eletrodomésticos', description: 'Mobiliário e Eletrodomésticos' },
        { name: 'Software e Sistemas', description: 'Software e Sistemas' },
        { name: 'Saúde - Clínica', description: 'Saúde - Clínica' },
        { name: 'Transporte - Pessoas', description: 'Transporte - Pessoas' },
        { name: 'Transporte - Grande Porte', description: 'Transporte - Grande Porte' },
        { name: 'Saúde - Geral', description: 'Saúde - Geral' },
        { name: 'Jurídico', description: 'Jurídico' },
        { name: 'Saúde - Profissionais', description: 'Saúde - Profissionais' },
        { name: 'Marketing e Publicidade', description: 'Marketing e Publicidade' },
      ]);
    });
};














