import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
    },
    isLoading: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    leftIcon: {
      control: "text",
      description: "Icon element to display before the button text",
    },
    rightIcon: {
      control: "text",
      description: "Icon element to display after the button text",
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Basic variations
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: "Extra Large Button",
  },
};

export const FullWidth: Story = {
  args: {
    size: "full",
    children: "Full Width Button",
  },
};

// State variations
export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Loading Button",
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: "Disabled Button",
  },
};

// Icon variations
export const WithIcons: Story = {
  args: {
    children: "Button with Icons",
    leftIcon: "←",
    rightIcon: "→",
  },
};

const Star = () => (
  <span role="img" aria-label="star" style={{ display: "inline-flex" }}>
    ⭐
  </span>
);

const Rocket = () => (
  <span role="img" aria-label="rocket" style={{ display: "inline-flex" }}>
    🚀
  </span>
);

export const WithCustomIcons: Story = {
  args: {
    children: "Custom Icons",
    leftIcon: <Star />,
    rightIcon: <Rocket />,
  },
};
