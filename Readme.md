Playwright Automation Sandbox 🚀


Este repositorio contiene un framework de automatización robusto desarrollado para el Automation Sandbox de Free Range Testers. El proyecto aplica estándares de la industria para garantizar escalabilidad y fácil mantenimiento.

🛠️ Tecnologías y Patrones


Lenguaje: TypeScript.

Framework de Testing: Playwright.

Patrón de Diseño: Page Object Model (POM) para el aislamiento de la lógica de negocio y locators.

CI/CD: Pipeline configurado mediante GitHub Actions para ejecución automática en cada push.

📂 Estructura del Proyecto


Plaintext
├── pages/              # Clases Page Object (Locators y Acciones)

├── tests/              # Scripts de prueba (.spec.ts)

├── .github/workflows/  # Configuración de Integración Continua (playwright.yml)

└── playwright.config.ts # Configuración global del framework


🚀 Instalación y Uso
Clonar el repositorio:

Bash

git clone https://github.com/juanemi10/playwright-first-test.git

cd playwright-first-test

Instalar dependencias:

Bash

npm install

Ejecutar los tests:

Bash

npx playwright test

Ver reportes:

Bash

npx playwright show-report


📈 Casos de Prueba Automatizados
Manejo de IDs dinámicos con esperas asincrónicas.

Validación de Tablas Estáticas y comparación de arrays de datos.

Interacción con Tablas Dinámicas y validación de cambios post-reload.

Automatización de formularios (Checkboxes, Radio Buttons y Dropdowns).

Manejo de Pop-ups y ventanas emergentes.