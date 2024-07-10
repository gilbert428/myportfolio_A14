// button.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByText('Button');
  await userEvent.click(buttonElement);
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Primary Button',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByText('Primary Button');
  await userEvent.hover(buttonElement);
  await userEvent.unhover(buttonElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByText('Disabled Button');
  await userEvent.click(buttonElement);
};
