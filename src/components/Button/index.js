import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

export const Button = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  }
})

export default Button
