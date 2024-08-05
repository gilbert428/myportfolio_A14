// src/components/MobileMenu/MobileMenu.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import MobileMenu from './MobileMenu';

export default {
  title: 'MobileMenu',
  component: MobileMenu,
  argTypes: {
    collapsed: { control: 'boolean' },
    expanded: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<typeof MobileMenu> = (args) => <MobileMenu {...args} />;

export const Collapsed = Template.bind({});
Collapsed.args = {
  collapsed: true,
};

Collapsed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const menuElement = canvas.getByText((content, element) => content.includes('Menu'));
  await userEvent.click(menuElement);
};

export const Hover = Template.bind({});
Hover.args = {
  collapsed: true,
};

Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const menuElement = canvas.getByText((content, element) => content.includes('Menu'));
  await userEvent.hover(menuElement);
};

export const Focus = Template.bind({});
Focus.args = {
  collapsed: true,
};

export const Expanded = Template.bind({});
Expanded.args = {
  expanded: true,
};

Expanded.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const menuElement = canvas.getByText((content, element) => content.includes('Menu Expanded'));
  await userEvent.click(menuElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const menuElement = canvas.getByText((content, element) => content.includes('Menu'));
  await userEvent.click(menuElement);
};
