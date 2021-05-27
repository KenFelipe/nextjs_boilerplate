import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    label: 'Button',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark', value: '#111' },
        { name: 'gray', value: '#ccc' },
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  label: '1.Primary Button',
}

Primary.storyName = 'Primary Button'

Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'dark', value: '#111' },
      { name: 'gray', value: '#ccc' },
    ],
  },
}

Primary.decorators = [
  Story => (
    <div style={{ background: '#ccc' }}>
      <Story />
    </div>
  ),
]

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}
