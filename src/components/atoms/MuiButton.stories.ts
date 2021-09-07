import { Story, Meta } from '@storybook/react'
import { MuiButton, ButtonProps } from './Button'

export default {
  title: 'Atoms/Button',
  component: MuiButton,
} as Meta

const Template: Story<ButtonProps> = args => (
  <MuiButton {...args} />
)

export const Primary = Template.bind({})
Primary.storyName = 'Primary'

Primary.args = {
  label: 'MuiButton',
}
