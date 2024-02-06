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

// const MyButtonMeta: Meta<typeof MyButton> = {
//   title: 'MyButton',
//   component: MyButton,
//   argTypes: {
//     onPress: { action: 'pressed the button' },
//   },
//   args: {
//     text: 'Hello world',
//   },
//   decorators: [
//     (Story) => (
//       <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
//         <Story />
//       </View>
//     ),
//   ],
// };

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
    // onPress: () => {
    //   console.log('button clicked')
    // },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Disabled',
  },
}

// export const Basic: StoryObj<typeof MyButton> = {}

// export const AnotherExample: StoryObj<typeof MyButton> = {
//   args: {
//     text: 'Another example',
//   },
// }
