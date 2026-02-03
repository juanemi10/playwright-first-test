import { type Locator, type Page } from '@playwright/test';

export class SandboxPage {
    readonly page: Page;
    readonly dynamicIdButton: Locator;
    readonly dynamicIdMessage: Locator;
    readonly mainInput: Locator;
    readonly pastaCheckbox: Locator;
    readonly siRadioButton: Locator;
    readonly sportsDropdown: Locator;
    readonly popupBtn: Locator;
    readonly popupText: Locator;
    readonly closePopupBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dynamicIdButton = page.getByRole('button', { name: 'Hacé click para generar un ID' });
        this.dynamicIdMessage = page.getByText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.');
        this.mainInput = page.getByPlaceholder('Ingresá texto');
        this.pastaCheckbox = page.getByRole('checkbox', { name: 'Pasta 🍝' });
        this.siRadioButton = page.getByRole('radio', { name: 'Si' });
        this.sportsDropdown = page.getByLabel('Dropdown');
        this.popupBtn = page.getByRole('button', { name: 'Mostrar popup' });
        this.popupText = page.getByText('¿Viste? ¡Apareció un Pop-up!');
        this.closePopupBtn = page.getByRole('button', { name: 'Cerrar' });
    }

    async navigate() {
        await this.page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    }

    async enterText(text: string) {
        await this.mainInput.fill(text);
    }

    async selectCheckbox(label: string) {
        await this.page.getByRole('checkbox', { name: label }).check();
    }

    async selectRadioButton(label: string) {
        await this.page.getByRole('radio', { name: label }).check();
    }

    async getStaticTableNames() {
        return await this.page.$$eval(
            'h2:has-text("Tabla estática") + table tbody tr td:nth-child(2)',
            elements => elements.map(e => e.textContent?.trim())
        );
    }

    async getDynamicTableValues() {
        return await this.page.$$eval(
            'h2:has-text("Tabla dinámica") + table tbody tr td',
            elements => elements.map(e => e.textContent?.trim())
        );
    }
}