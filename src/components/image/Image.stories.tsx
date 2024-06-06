// src/components/Image/Image.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import {Image} from './Image';

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    primary: { control: 'boolean' },
    large: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  src: 'https://via.placeholder.com/150',
  alt: 'Primary Image',
};

export const Large = Template.bind({});
Large.args = {
  large: true,
  src: 'https://via.placeholder.com/300',
  alt: 'Large Image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  src: 'https://via.placeholder.com/150',
  alt: 'Disabled Image',
};

export const Hover = Template.bind({});
Hover.args = {
  primary: true,
  src: 'https://via.placeholder.com/150',
  alt: 'Hover Image',
  backgroundColor: 'lightblue',
};
