import { test, expect } from '@playwright/test';

test('hero renders wordmark, both variants, and notify CTAs', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/SCOUT/i);
  await expect(page.getByText('Lager', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('Low Carb', { exact: false }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /Notify me/i }).first()).toBeVisible();
});
