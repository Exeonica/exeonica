// @ts-check
const { test, expect } = require("@playwright/test");

const baseURL = "http://localhost:3000/";

test("has title", async ({ page }) => {
  await page.goto(baseURL);

  await expect(page).toHaveTitle("exeonica");
});
