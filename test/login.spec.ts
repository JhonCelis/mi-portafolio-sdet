import {test,expect} from '@playwright/test';

test('usuario puede iniciar sesión exitosamente', async ({page})=>{
    //1. Navegar a la pagina de prueba
    await page.goto('https://www.saucedemo.com/');

    //2. Interactuar con los elementos(Llenar usuario y contraseña)
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    //3. hacer clic en el botón login
    await page.locator('[data-test="login-button"]').click();

    //4. Aserción ( Validación): Comprobar que estamos en la página de inventario
    await expect(page).toHaveURL('httpa://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');

});
