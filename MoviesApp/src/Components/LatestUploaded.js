import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import scrollVertical from '../Assets/Images/Scroll-Vertical.png'

export default function LatestUploaded() {
    return (
        <View>
            <View>
                <Text style={Styles.title}>
                    Latest Uploaded
                </Text>
                <View style={Styles.card}>
                    <Image source={scrollVertical} style={Styles.scrollVertical} />
                    <View style={Styles.descriptions}>
                        <Text style={{ fontSize: scale(20), fontWeight: '800', marginBottom: 8 }}>
                            Title of Movie
                        </Text>
                        <Text style={{ marginBottom: 4 }}>
                            Release Date
                        </Text>
                        <Text style={{ marginBottom: 4 }}>
                            Rating : Rating
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            Genre
                        </Text>
                        <TouchableOpacity>
                            <View style={Styles.buttonShowMore}>
                                <Text style={Styles.textButton}>
                                    Show More
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    title: {
        fontSize: scale(20),
        fontWeight: '700',
        marginBottom: scale(10)
    },
    scrollVertical: {
        width: scale(125),
        height: scale(125),
    },
    buttonShowMore: {
        width: scale(160),
        height: scale(32),
        backgroundColor: '#b93f8c',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textButton: {
        color: 'white',
        fontWeight: '600',
    },
    descriptions: {
        marginLeft: scale(12),
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#272651',
        padding: scale(10),
        borderRadius: 12,
        marginBottom: scale(10)
    }
})