import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Recommended from '../../Components/Recommended';
import { Button } from 'react-native-elements';
import LatestUploaded from '../../Components/LatestUploaded';


export default function Home() {

    return (
        <View style={Styles.container}>
            <Recommended />
            <LatestUploaded />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(12),
        backgroundColor: '#493b7a'
    },

})