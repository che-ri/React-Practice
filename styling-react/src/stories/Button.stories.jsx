import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../components/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Button",
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = (args) => (
    <Button onClick={action("clicked")} {...args}>
        버튼입니당
    </Button>
);

export const Emoji = () => (
    <Button onClick={action("clicked")}>
        <span role="img" aria-label="so cool">
            😀😁😂🤣
        </span>
    </Button>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button",
};
