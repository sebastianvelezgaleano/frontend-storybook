import { test as base, expect } from "@playwright/test";
import type { Page, TestInfo } from "@playwright/test";
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
  test("variants visual regression", async ({ page }, testInfo: TestInfo) => {
    for (const variant of variants) {
      await page.goto(`/iframe.html?id=components-button--${variant}`);
      const button = await page.locator(".btn");
      expect(
        await page.screenshot({
          animations: "disabled",
        })
      ).toMatchSnapshot(`button-${variant}.png`);
    }
  });

  test("sizes visual regression", async ({ page }, testInfo: TestInfo) => {
    const sizeMap: Record<ButtonProps["size"], string> = {
      sm: "small",
      md: "medium",
      lg: "large",
      xl: "extra-large",
      full: "full-width",
    };

    for (const size of sizes) {
      await page.goto(`/iframe.html?id=components-button--${sizeMap[size]}`);
      const button = await page.locator(".btn");
      expect(await page.screenshot()).toMatchSnapshot(`button-${size}.png`);
    }
  });

  test("loading state", async ({ page }, testInfo: TestInfo) => {
    await page.goto("/iframe.html?id=components-button--loading");
    const loadingIndicator = await page.locator(".btn-loader");
    await expect(loadingIndicator).toBeVisible();
    expect(await page.screenshot()).toMatchSnapshot("button-loading.png");
  });

  test("disabled state", async ({ page }, testInfo: TestInfo) => {
    await page.goto("/iframe.html?id=components-button--disabled");
    const button = await page.locator(".btn");
    await expect(button).toBeDisabled();
    expect(await page.screenshot()).toMatchSnapshot("button-disabled.png");
  });

  test("icons render correctly", async ({ page }, testInfo: TestInfo) => {
    await page.goto("/iframe.html?id=components-button--with-custom-icons");
    const button = await page.locator(".btn");
    await expect(button.locator(".btn-icon-left")).toBeVisible();
    await expect(button.locator(".btn-icon-right")).toBeVisible();
    expect(await page.screenshot()).toMatchSnapshot("button-with-icons.png");
  });

  test("hover states", async ({ page }, testInfo: TestInfo) => {
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
