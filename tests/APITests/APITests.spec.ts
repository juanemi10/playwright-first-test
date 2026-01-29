/*import { test, expect } from '@playwright/test';

const REPO = 'Api-testing-Playwright';
const USER = 'juanemi10';


test('Crear issue usando configuración global', async ({ request }) => {
  // Solo necesitas el endpoint relativo, Playwright usa el baseURL automáticamente
  const response = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: 'Issue desde Playwright Config',
      body: 'Probando la configuración centralizada de headers.',
      labels: ['bug']
    }
  });

  expect(response.status()).toBe(201);
  
  const body = await response.json();
  console.log(`Número de issue: ${body.number}`);
});*/