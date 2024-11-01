import { test as base, expect } from "@playwright/test";
import type { Page } from "@playwright/test";
import type { ButtonProps } from "./Button";

const test = base.extend<{ page: Page }>({});

const variants: ButtonProps["variant"][] = [
  "primary",
  "secondary",
  "outline",
  "ghost",
];
const sizes: ButtonProps["size"][] = ["sm", "md", "lg", "xl", "full"];

test.describe("Button Visual Tests", () => {
  test("variants visual regression", async ({ page }) => {
    for (const variant of variants) {
      await page.goto(`/iframe.html?id=components-button--${variant}`);
      await page.locator(".btn");
      expect(
        await page.screenshot({
          animations: "disabled",
        })
      ).toMatchSnapshot(`button-${variant}.png`);
    }
  });

  test("sizes visual regression", async ({ page }) => {
    const sizeMap = {
      sm: "small",
      md: "medium",
      lg: "large",
      xl: "extra-large",
      full: "full-width",
    } as const;

    for (const size of sizes) {
      await page.goto(`/iframe.html?id=components-button--${sizeMap[size]}`);
      await page.locator(".btn");
      expect(await page.screenshot()).toMatchSnapshot(`button-${size}.png`);
    }
  });

  test("loading state", async ({ page }) => {
    await page.goto("/iframe.html?id=components-button--loading");
    const loadingIndicator = await page.locator(".btn-loader");
    await expect(loadingIndicator).toBeVisible();
    expect(await page.screenshot()).toMatchSnapshot("button-loading.png");
  });

  test("disabled state", async ({ page }) => {
    await page.goto("/iframe.html?id=components-button--disabled");
    await expect(page.locator(".btn")).toBeDisabled();
    expect(await page.screenshot()).toMatchSnapshot("button-disabled.png");
  });

  test("icons render correctly", async ({ page }) => {
    await page.goto("/iframe.html?id=components-button--with-custom-icons");
    await expect(page.locator(".btn-icon-left")).toBeVisible();
    await expect(page.locator(".btn-icon-right")).toBeVisible();
    expect(await page.screenshot()).toMatchSnapshot("button-with-icons.png");
  });

  test("hover states", async ({ page }) => {
    for (const variant of variants) {
      await page.goto(`/iframe.html?id=components-button--${variant}`);
      const button = await page.locator(".btn");
      await button.hover();
      expect(await page.screenshot()).toMatchSnapshot(
        `button-${variant}-hover.png`
      );
    }
  });
});
