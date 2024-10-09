import {test, expect} from '@playwright/test'

test('buy product', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');

    //choose the product
    await page.locator('(//a[@class="card"])[1]').click({timeout:20000});

    await page.locator("#btn-increase-quantity").click();
    const addCart = await page.locator(`//button[@id='btn-add-to-cart']`);
    await expect(await page.locator(`//button[@id='btn-add-to-cart']`)).toBeVisible();
    // Debugging: Check if the locator is found
    const isVisible = await addCart.isVisible();
    console.log(`Is the add to cart button visible? ${isVisible}`);
    
    await addCart.click();
    //go to your cart
    await page.locator("//a[@aria-label='cart']").click({timeout:10000});

    //confirm process
    await page.locator('[data-test="proceed-1"]').click({timeout:5000});
    
    await page.locator('[data-test="email"]').click();
    await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
    await page.locator('[data-test="password"]').fill('welcome01');
  
    await page.locator("input[value='Login']").dblclick();
    await page.locator("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").dblclick();

    await page.locator('[data-test="address"]').click();
    await page.locator('[data-test="address"]').fill('TalaatharbSt');
    await page.locator('[data-test="city"]').click();
    await page.locator('[data-test="city"]').fill('cairo');

    await page.locator('[data-test="state"]').fill('cairo');

    await page.locator('[data-test="country"]').fill('Egypt');

    await page.locator('[data-test="postcode"]').fill('16411');
    await page.locator("//div[@class='float-end']//button[@type='button'][normalize-space()='Proceed to checkout']").click();
    await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
    await page.locator('[data-test="finish"]').click();
})