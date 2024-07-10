// src/components/Image/Image.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Image } from './Image';

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

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByAltText('Placeholder Image');
  await userEvent.click(imageElement);
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  src: 'https://via.placeholder.com/150',
  alt: 'Primary Image',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByAltText('Primary Image');
  await userEvent.click(imageElement);
};

export const Large = Template.bind({});
Large.args = {
  large: true,
  src: 'https://via.placeholder.com/300',
  alt: 'Large Image',
};

Large.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByAltText('Large Image');
  await userEvent.click(imageElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  src: 'https://via.placeholder.com/150',
  alt: 'Disabled Image',
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByAltText('Disabled Image');
  await userEvent.click(imageElement);
};

export const Hover = Template.bind({});
Hover.args = {
  primary: true,
  src: 'https://via.placeholder.com/150',
  alt: 'Hover Image',
  backgroundColor: 'lightblue',
};

Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByAltText('Hover Image');
  await userEvent.hover(imageElement);
  await userEvent.unhover(imageElement);
};
