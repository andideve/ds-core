import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from '@emotion/styled';

import Provider from '../provider';

const Paragraph = styled.p(({ theme }) => {
  console.log(theme);
  return { fontSize: '1rem', lineHeight: '1.5rem', fontWeight: 400 };
});

export default {
  title: 'Provider',
  component: Provider,
} as ComponentMeta<typeof Provider>;

const Template: ComponentStory<typeof Provider> = ({ children, ...args }) => (
  <Provider {...args}>
    <Paragraph>Hello World!</Paragraph>
  </Provider>
);

export const Example = Template.bind({});
Example.args = {
  themeConfig: {
    colorMode: 'dark',
  },
};
