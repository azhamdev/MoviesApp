import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import itemHorizontal from '../Assets/Images/Item-Horizontal.png'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// image 

export default function Recommended() {
    return (
        <View>
            <Text style={Styles.title}>
                Recommended
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={Styles.containerItemHorizontal}>
                    <Image source={itemHorizontal} style={Styles.itemHorizontal} />
                    <Image source={itemHorizontal} style={Styles.itemHorizontal} />
                    <Image source={itemHorizontal} style={Styles.itemHorizontal} />
                    <Image source={itemHorizontal} style={Styles.itemHorizontal} />
                    <Image source={itemHorizontal} style={Styles.itemHorizontal} />
                    <Image source={itemHorizontal} style={Styles.itemHorizontal} />
                    <Image source={itemHorizontal} style={Styles.itemHorizontal} />
                </View>
            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({
    title: {
        fontSize: scale(20),
        fontWeight: '700',
        marginBottom: scale(10)
    },
    containerItemHorizontal: {
        // backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        height: scale(120),
        alignItems: 'center'
    },
    itemHorizontal: {
        marginRight: scale(10),
        height: scale(110),
        width: scale(85),
        borderRadius: 10
    },

})