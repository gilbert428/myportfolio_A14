// src/components/Section/Section.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Section from './Section';

export default {
  title: 'Section',
  component: Section,
  argTypes: {
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<typeof Section> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Primary Section',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const sectionElement = canvas.getByText('Primary Section');
  await userEvent.click(sectionElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Section',
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const sectionElement = canvas.getByText('Disabled Section');
  await userEvent.click(sectionElement);
};