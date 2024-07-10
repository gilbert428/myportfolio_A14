// src/components/Input/Input.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    state: {
      control: { type: 'select', options: ['empty', 'focused', 'filled', 'disabled'] },
    },
    placeholder: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'empty',
  placeholder: 'Enter text...',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByPlaceholderText('Enter text...');
  await userEvent.type(inputElement, 'Test');
};

export const Focused = Template.bind({});
Focused.args = {
  state: 'focused',
  placeholder: 'Enter text...',
};

Focused.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByPlaceholderText('Enter text...');
  await userEvent.click(inputElement);
};

export const Filled = Template.bind({});
Filled.args = {
  state: 'filled',
  value: 'Filled text',
};

Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByDisplayValue('Filled text');
  await userEvent.clear(inputElement);
  await userEvent.type(inputElement, 'New text');
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  placeholder: 'Enter text...',
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByPlaceholderText('Enter text...');
  await userEvent.click(inputElement);
};
