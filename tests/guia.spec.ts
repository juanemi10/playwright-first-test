 /*    Esto se usa para llenar con el mismo dato, muchos campos
 
        let textoAEscribir = : 'Estoy aprendiendo Playwright';
 
            await test.step('Puedo ingresar texto en el campo Un aburrido Texto', async () => {
              await page.getByPlaceholder('Ingresá texto').fill('textoAEscribir');
            }) */
/* Informacion util

        await test.step('Puedo ingresar texto en el campo Un aburrido Texto', async () => {
            await page.getByPlaceholder('Ingresá texto').type('Estoy aprendiendo Playwright');
            await page.getByPlaceholder('Ingresá texto').press('Enter');
            Esto simula tipeo de teclas. .press('Shift+ArrowLeft');

Se puede usar el type en lugar del fill, sirve cuando tenes que hacer tracking de las teclas que se tipearon y demas*/


/*
   await test.step('Esto sube archivos', async () => {
   await page.getByLabel('Upload file').setInputFiles(['pathalArchivo.pdf', 'Invoicel.pdf', 'Invoice2.pdf'])
   await page.getByLabel('Upload file').setInputFiles([])
   await page.getById('DragFrom').dragTo(page.getByTestId{'DragTo'});
}) */



   /*
  test('Puedo seleccionar y deseleccionar un checkbox en el @Sandbox', async ({ page }) => {
 
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })
            await test.step('Puedo seleccionar el checkbox para Pasta', async () => {
                const sandbox = new SandboxPage(page);
                //await page.getByLabel('Pasta 🍝').check();
                await sandbox.checkPasta();
 
                await expect(sandbox.pastaCheckbox, 'El checkbox no estaba seleccionado').toBeChecked();
 
            })
 
            await test.step('Puedo deseleccionar el checkbox Pasta', async () => {
                await page.getByLabel('Pasta 🍝').uncheck();
 
                await expect(page.getByLabel('Pasta 🍝'), 'El checkbox no estaba seleccionado').not.toBeChecked();
            })
 
        }) 
   test('Click en Botón ID Dinámico', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })
 
            await test.step('Puedo hacer click en el botón con ID dinámico', async () => {
                const botonIDDinamico = page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' });
                await botonIDDinamico.click({ force: true });
                await expect(page.getByText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')).toBeVisible();
            })
 
        })
   
        */