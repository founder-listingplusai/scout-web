import { test, expect } from '@playwright/test';

test('hero renders wordmark, both variants, and notify CTAs', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/SCOUT/i);
  await expect(page.getByText('Lager', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('Low Carb', { exact: false }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /Notify me/i }).first()).toBeVisible();
});

test('all editorial sections render', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#field-notes')).toBeVisible();
  await expect(page.locator('#lager')).toBeVisible();
  await expect(page.locator('#lowcarb')).toBeVisible();
  await expect(page.locator('#story')).toBeVisible();
  await expect(page.locator('#lager').getByText(/Crisp\. Cold\. Classic\./)).toBeVisible();
  await expect(page.locator('#lowcarb').getByText(/Light on carbs/)).toBeVisible();
  await expect(page.getByRole('contentinfo')).toBeVisible(); // <footer>
});
