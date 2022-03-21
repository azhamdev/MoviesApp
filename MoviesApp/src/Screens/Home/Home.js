import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Input } from 'react-native-elements'

export default function Home({ navigation }) {
    return (
        <View>
            <Input
                placeholder='BASIC INPUT' />
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Text>
                    ke Details
                </Text>
            </TouchableOpacity>
        </View>
    )
}