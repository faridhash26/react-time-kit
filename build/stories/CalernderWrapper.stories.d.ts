/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<CalenderWrapperProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const PrimaryJalali: Story;
export declare const PrimaryJalaliButtonDefaultStyle: Story;
