// src/components/Link/Link.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Link from './Link';

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    children: { control: 'text' },
    href: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
  href: '#',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Primary Link',
  href: '#',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Primary Link');
  await userEvent.click(linkElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Link',
  href: '#',
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Disabled Link');
  await userEvent.click(linkElement);
};

export const Hover = Template.bind({});
Hover.args = {
  primary: true,
  children: 'Hover Link',
  href: '#',
  backgroundColor: 'lightblue',
};

Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Hover Link');
  await userEvent.hover(linkElement);
  await userEvent.unhover(linkElement);
};
