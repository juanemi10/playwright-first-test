import { test, expect } from '@playwright/test';
import { SandboxPage } from '../Pages/SandboxPage';

test.describe('Acciones en el Automation Sandbox', () => {
  let sandbox: SandboxPage;

  test.beforeEach(async ({ page }) => {
    sandbox = new SandboxPage(page);
    await sandbox.navigate();
  });

  test('Valido la columna Nombre de la tabla estática', async () => {
    const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe'];
    const valoresNombres = await sandbox.getStaticTableNames();
    expect(valoresNombres).toEqual(nombresEsperados);
  });

  test('Valido que todos los valores cambian en la tabla dinámica luego de un reload', async ({ page }) => {
    const valoresAntes = await sandbox.getDynamicTableValues();
    console.log('VALORES ANTES:');
    console.table(valoresAntes);

    await page.reload();

    const valoresPostReload = await sandbox.getDynamicTableValues();
    console.log('VALORES DESPUES:');
    console.table(valoresPostReload);

    expect(valoresAntes.length).toBe(valoresPostReload.length);
    
    valoresAntes.forEach((valor: string | null, index: number) => {
      expect(valor).not.toBe(valoresPostReload[index]);
    });
  });
});