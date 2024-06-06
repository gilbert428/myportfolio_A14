// Link.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
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

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Link',
  href: '#',
};

export const Hover = Template.bind({});
Hover.args = {
  primary: true,
  children: 'Hover Link',
  href: '#',
  backgroundColor: 'lightblue', // Example background color for hover state
};
