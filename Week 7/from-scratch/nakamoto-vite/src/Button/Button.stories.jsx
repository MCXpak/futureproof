import React from 'react';

import { Button } from '.'

export default {
    component: Button,
    title: 'Button',
};

const Template = args => <Button {...args} />

export const Default = Template.bind({});


export const Secondary = Template.bind({})
Secondary.args = {
    variant: "secondary",
    btnText: "Secondary Button"
}
