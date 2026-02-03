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

  test('Selecciono checkbox Pasta', async () => {
    await sandbox.selectCheckbox('Pasta 🍝');
    await expect(sandbox.pastaCheckbox).toBeChecked();
  });

  test('Selecciono radio button Sí', async () => {
    await sandbox.selectRadioButton('Si');
    await expect(sandbox.siRadioButton).toBeChecked();
  });

  test('Selecciono deporte Tennis del dropdown', async () => {
    await sandbox.sportsDropdown.selectOption('Tennis');
    await expect(sandbox.sportsDropdown).toHaveValue('Tennis');
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

  test('Validando dentro de un popup', async () => {
    await sandbox.popupBtn.click();
    await expect(sandbox.popupText).toBeVisible();
    await sandbox.closePopupBtn.click();
  });
});