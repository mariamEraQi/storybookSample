import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { MyButton, MyButtonProps } from '../../src/components/Button'
import React from 'react'

const meta: Meta<MyButtonProps> = {
  title: 'Button',
  component: MyButton,

  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<MyButtonProps>

export const Basic: Story = {
  storyName: 'Basic',
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    disabled: false,
    text: 'Tap me',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Disabled',
  },
}
