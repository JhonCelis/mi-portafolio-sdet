import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly backpackAddButton: Locator;
    readonly cartBadge: Locator;
    readonly carlink: Locator;

    constructor(page: Page){
        this.page = page;
        this.pageTitle = page.locator('.title');
        this.backpackAddButton = page.locator('[data-test="add-to-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.carlink = page.locator('.shopping_cart_link');
    }

    async addBackpackToCart() {
        await this.backpackAddButton.click();
    }

    async goToCart() {
        await this.carlink.click();
    }
}