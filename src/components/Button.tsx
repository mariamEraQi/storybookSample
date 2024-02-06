import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export type MyButtonProps = {
  onPress: () => void
  text: string
  disabled: boolean
  bgColor: string
}

export const MyButton = ({
  onPress,
  text,
  disabled,
  bgColor,
}: MyButtonProps) => {
  const [backgColor, setBgColor] = React.useState('')
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: bgColor || backgColor || 'purple' },
      ]}
      onPress={() => {
        setBgColor(backgColor === 'red' ? 'blue' : 'red')
        onPress()
      }}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  text: { color: 'white' },
})
