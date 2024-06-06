import { StoryFn, Meta } from '@storybook/react';
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

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Text',
};
