import { View, Text, Modal } from 'react-native'
import React from 'react'

export default function Bottompopup(props) {
  return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={show}
        >
            <View>
                <Text></Text>
            </View>
        </Modal>
  )
}