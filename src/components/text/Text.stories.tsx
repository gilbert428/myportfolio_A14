// src/components/Text/Text.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    color: { control: 'color' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Lorem ipsum dolor sit amet');
  await userEvent.click(textElement);
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small Text',
};

Small.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Small Text');
  await userEvent.click(textElement);
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Medium Text',
};

Medium.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Medium Text');
  await userEvent.click(textElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Text',
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Disabled Text');
  await userEvent.click(textElement);
};
