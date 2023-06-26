import React from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'

export default function PrimaryButton(props) {
  return (
    <View>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})

