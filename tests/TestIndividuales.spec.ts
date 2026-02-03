import { test, expect } from '@playwright/test';
import { SandboxPage } from '../Pages/SandboxPage';

test.describe('Acciones en el Automation Sandbox', () => {
  let sandbox: SandboxPage;

  test.beforeEach(async ({ page }) => {
    sandbox = new SandboxPage(page);
    await sandbox.navigate();
  });

  test('Click en botón ID dinámico', async () => {
    await sandbox.dynamicIdButton.click();
    await expect(sandbox.dynamicIdMessage).toBeVisible();
  });

  test('Ingreso texto en el input', async () => {
    const texto = 'Estoy aprendiendo Playwright';
    await sandbox.enterText(texto);
    await expect(sandbox.mainInput).toHaveValue(texto);
  });

  test('Valido la columna Nombre de la tabla estática', async ({ page }) => {
    const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe'];
    const valoresNombres = await sandbox.getStaticTableNames();
    
    expect(valoresNombres).toEqual(nombresEsperados);
  });

  test('Valido que los valores cambian en la tabla dinámica', async ({ page }) => {
    const valoresAntes = await sandbox.getDynamicTableValues();
    await page.reload();
    const valoresDespues = await sandbox.getDynamicTableValues();

    expect(valoresAntes.length).toBe(valoresDespues.length);
    valoresAntes.forEach((valor, i) => expect(valor).not.toBe(valoresDespues[i]));
  });
});