/*import { test, Browser, Page, expect } from '@playwright/test';

let browser: Browser;
let page: Page;

test.describe('Acciones en el Automation Sandbox', () => {

  test('Click en botón ID dinámico', async ({ page }) => {
    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();

    await expect(
      page.getByText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')
    ).toBeVisible();
  });

  test('Ingreso texto en el input', async ({ page }) => {
    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    await page.getByPlaceholder('Ingresá texto').fill('Estoy aprendiendo Playwright');

    await expect(
      page.getByPlaceholder('Ingresá texto')
    ).toHaveValue('Estoy aprendiendo Playwright');
  });

  test('Selecciono checkbox Pasta', async ({ page }) => {
    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    await page.getByRole('checkbox', { name: 'Pasta 🍝' }).check();

    await expect(
      page.getByRole('checkbox', { name: 'Pasta 🍝' })
    ).toBeChecked();
  });

  test('Selecciono radio button Sí', async ({ page }) => {
    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    await page.getByRole('radio', { name: 'Si' }).check();

    await expect(
      page.getByRole('radio', { name: 'Si' })
    ).toBeChecked();
  });

  test('Selecciono deporte Tennis del dropdown', async ({ page }) => {
    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

    await page.getByLabel('Dropdown').selectOption('Tennis');

    await expect(page.getByLabel('Dropdown')).toHaveValue('Tennis');

    const options = page.getByLabel('Dropdown').locator('option');

    await expect(options).toHaveText([
      'Seleccioná un deporte',
      'Fútbol',
      'Tennis',
      'Basketball'
    ]);
  });

  // ✅ TEST 1 TABLA ESTÁTICA
  test('Valido la columna Nombre de la tabla estática', async ({ page }) => {

    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

    const valoresColumnaNombres = await page.$$eval(
      'h2:has-text("Tabla estática") + table tbody tr td:nth-child(2)',
      elements => elements.map(e => e.textContent?.trim())
    );

    const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe'];

    await test.info().attach('screenshot', {
      body: await page.screenshot(),
      contentType: 'image/png',
    });

    expect(valoresColumnaNombres).toEqual(nombresEsperados);
  });

  // ✅ TEST 2 TABLA DINÁMICA
  test('Valido que todos los valores cambian en la tabla dinámica luego de un reload', async ({ page }) => {

    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

    const valoresTablaDinamica = await page.$$eval(
      'h2:has-text("Tabla dinámica") + table tbody tr td',
      elements => elements.map(e => e.textContent?.trim())
    );
     console.log(valoresTablaDinamica);

    await page.reload();

    const valoresPostReload = await page.$$eval(
      'h2:has-text("Tabla dinámica") + table tbody tr td',
      elements => elements.map(e => e.textContent?.trim())
    );
    console.log(valoresPostReload);

    expect(valoresTablaDinamica.length).toBe(valoresPostReload.length);

    valoresTablaDinamica.forEach((valor, index) => {
     expect(valor).not.toBe(valoresPostReload[index]);
      
    });
  
  });
   test('Validando dentro de un popup', async ({ page }) => {

       await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

       await page.getByRole('button', { name: 'Mostrar popup' }).click();

       await expect(page.getByText('¿Viste? ¡Apareció un Pop-up!')).toHaveText('¿Viste? ¡Apareció un Pop-up!');

       await page.getByRole('button', { name: 'Cerrar' }).click();

    });

});*/