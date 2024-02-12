import { test, expect } from '@playwright/test';

test('redirected to default locale', async ({ page }) => {
    const locale = 'en';
    const messages = await (import(`../../messages/${locale}.json`));
  const baseUrl = 'http://localhost:3000';
  await page.goto(baseUrl);

  // able to redirect to default en language
  await expect(page).toHaveURL(`${baseUrl}/${locale}`);
  // able to show correct language
  await expect(page).toHaveTitle(messages["Index"]["title"]);
});

test('redirected to hk locale', async ({ page }) => {
    const locale = 'hk';
    const messages = await (import(`../../messages/${locale}.json`));
  const baseUrl = 'http://localhost:3000';
  await page.goto(baseUrl);

//   await page.click('text=Lauguage');
  await page.getByRole('combobox').click();
  await page.getByLabel('hk').click();

  // able to redirect to default en language
  await expect(page).toHaveURL(`${baseUrl}/${locale}`);
  // able to show correct language
  await expect(page).toHaveTitle(messages["Index"]["title"]);
});


// more test here