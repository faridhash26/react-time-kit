import type { Meta, StoryObj } from "@storybook/react";

import CalenderWrapper from "../Components/wrapper/CalenderWrapper";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Calender",
  component: CalenderWrapper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof CalenderWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: "ازتاریخ",
    calenderType: "default",
  },
};
export const PrimaryJalali: Story = {
  args: {
    title: "ازتاریخ",
    isRequired: true,
    calenderType: "jalali",
  },
};
export const PrimaryJalaliButtonDefaultStyle: Story = {
  args: {
    title: "ازتاریخ",
    isRequired: true,
    calenderType: "jalali",

    buttonClassName: "default_select_style",
  },
};
