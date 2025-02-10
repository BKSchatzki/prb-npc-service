import req from 'supertest';

import app from '@/index.js';

describe('NPC Service Tests', () => {
  describe('GET /api/v1/npc/human', () => {
    test('human endpoint should return human npc', async () => {
      const res = await req(app).get('/api/v1/npc/human');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('species');
      expect(res.body.species).toBe('human');
    });
  });
  describe('GET /api/v1/npc', () => {
    test('npcs should have a name', async () => {
      const res = await req(app).get('/api/v1/npc');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('species');
      expect(res.body.name).toBeTypeOf('string');
      expect(res.body.name).toBeTruthy();
    });
  });
  describe('GET /api/v1/names', () => {
    test('names should be separated by species', async () => {
      const res = await req(app).get('/api/v1/names');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('aasimar');
    });
  });
});
