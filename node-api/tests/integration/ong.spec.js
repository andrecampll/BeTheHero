const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/conection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  
  afterAll(async () => {
    await connection.destroy();
  })
  
  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name:"TI",
        email:"contato@email.com",
        whatsapp:"2375283787",
        city: "Belém",
        uf: "PA" 
      });
    
      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
});
