/* Configure projects for major browsers 
  projects: [
    {
      name: 'Computadora',
      testMatch: "/*.spec.ts",
      use: { ...devices['Desktop Chrome'] },
    },
 
    {
      name: 'Iphone',
      testMatch: "/*.spec.ts",
      use: { ...devices['iPhone 12'] },
    },
 
    {
      name: 'iPad',
      testMatch: "/*.spec.ts",
      use: { ...devices['iPad (gen 7)'] },
    }
Esto nos va a permitir correr estas distintas configuraciones con el comando en la terminal: 

// npx playwright test --project=Computadora */