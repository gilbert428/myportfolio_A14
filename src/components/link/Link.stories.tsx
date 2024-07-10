// Link.stories.tsx
import type { Meta, StoryFn } from '@storybook/react';
import Link from './Link';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    children: { control: 'text' },
    href: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
  };
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Link');
  await userEvent.click(linkElement);
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Primary Link',
  };
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Primary Link');
  await userEvent.click(linkElement);
};

export const Hover = Template.bind({});
Hover.args = {
  primary: true,
  children: 'Hover Link',
   backgroundColor: 'lightblue',
};
Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Hover Link');
  await userEvent.hover(linkElement);
  await userEvent.unhover(linkElement);
};
