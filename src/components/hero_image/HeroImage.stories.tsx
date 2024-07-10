// src/components/HeroImage/HeroImage.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import HeroImage from './HeroImage';

export default {
  title: 'HeroImage',
  component: HeroImage,
  argTypes: {
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<typeof HeroImage> = (args) => <HeroImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  src: 'https://via.placeholder.com/800x400',
  alt: 'Primary Hero Image',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByAltText('Primary Hero Image');
  await userEvent.click(imageElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  src: 'https://via.placeholder.com/800x400',
  alt: 'Disabled Hero Image',
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByAltText('Disabled Hero Image');
  await userEvent.click(imageElement);
};
