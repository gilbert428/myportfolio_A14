import { StoryFn, Meta } from '@storybook/react';
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

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  placeholder: 'Enter text...',
};

export const Focused = Template.bind({});
Focused.args = {
  state: 'focused',
  placeholder: 'Enter text...',
};

export const Filled = Template.bind({});
Filled.args = {
  state: 'filled',
  value: 'Filled text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  placeholder: 'Enter text...',
  disabled: true,
};
