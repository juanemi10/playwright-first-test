 import { test, Browser, Page, expect } from '@playwright/test';

 (async ()=> {
     let browser: Browser;
     let page: Page;

     test.describe('Acciones en el Automation Sandbox', () => {
        test('Click en Botón ID Dinamico', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de FRT', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');   
            })
            
            await test.step('Puedo hacer clik en el botón con ID dinámico', async () => {
               await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();   
            })
            await test.step('Puedo ingresar texto en el campo Un aburrido Texto', async () => {
              await page.getByPlaceholder('Ingresá texto').fill('Estoy aprendiendo Playwright');
            })
            await test.step('Puedo seleccionar el checkbox para Pasta', async () => {
                await page.getByRole('checkbox', { name: 'Pasta 🍝' }).check();
                await page.getByRole('checkbox', { name: 'Pasta 🍝' }).uncheck();
            })
            await test.step('Puedo seleccionar un radiobutton para si', async () => {
                await page.getByRole('radio', { name: 'Si' }).check()
            })
            await test.step('Puedo seleccionar un dropdown de los dias de la semana', async () => {
                await page.getByLabel('Dropdown').selectOption('Tennis')
            })
            
            
            
            
        })
        

     })
    
 })();