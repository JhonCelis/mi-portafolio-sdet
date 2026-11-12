import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Flujo de Carrito de Compras', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  // Este bloque se ejecuta automáticamente ANTES de cada test de este archivo
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Agregar un producto actualiza el contador y aparece en el carrito', async ({ page }) => {
    // 1. Agregar la mochila al carrito
    await inventoryPage.addBackpackToCart();

    // 2. Validar que el ícono del carrito muestre el número "1"
    await expect(inventoryPage.cartBadge).toHaveText('1');

    // 3. Entrar al carrito y verificar que el producto esté listado
    await inventoryPage.goToCart();
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  });

});