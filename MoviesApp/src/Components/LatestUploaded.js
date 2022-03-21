import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import scrollVertical from '../Assets/Images/Scroll-Vertical.png'
import { BASE_URL_ALDIPEE, IMAGES_URL_ALDIPEE } from '../Helpers/ApiAccess';
import axios from 'axios';


export default function LatestUploaded() {
    const [listMovie, setListMovie] = useState([]);
    useEffect(() => {
        getListMovieLatest();
    }, []);

    const getListMovieLatest = async () => {
        try
        {
            const results = await axios.get(`${BASE_URL_ALDIPEE}movies`);
            setListMovie(results.data.results);
        } catch (error)
        {
            console.log(error);
        }
    };

    const cardMovie = ({ item }) => {
        return (
            <View style={Styles.card}>
                <Image source={{ uri: `${IMAGES_URL_ALDIPEE}${item.poster_path}` }} style={Styles.scrollVertical} />
                <View style={Styles.descriptions}>
                    <View style={Styles.titleContainer}>
                        <Text style={{ fontSize: scale(20), fontWeight: '800', marginBottom: 8, flexWrap: 'wrap' }}>
                            {item.original_title}
                        </Text>
                    </View>
                    <Text style={{ marginBottom: 4 }}>
                        {item.release_date}
                    </Text>
                    <Text style={{ marginBottom: 4 }}>
                        Rating : {item.vote_average}
                    </Text>
                    {/* <Text style={{ marginBottom: 10 }}>
                        Genre 
                    </Text> */}
                    <TouchableOpacity>
                        <View style={Styles.buttonShowMore}>
                            <Text style={Styles.textButton}>
                                Show More
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ paddingBottom: 0, flex: 1 }}>
            <Text style={Styles.title}>
                Latest Uploaded
            </Text>
            <FlatList
                data={listMovie}
                keyExtractor={(item, index) => index}
                renderItem={cardMovie}
                showsVerticalScrollIndicator={false}
            />
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
        borderRadius: 12
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
        fontSize: scale(14)
    },
    descriptions: {
        marginLeft: scale(12),
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#272651',
        padding: scale(10),
        borderRadius: 12,
        marginBottom: scale(10),
        // flexWrap: 'wrap',
        // flex: 1,
    },
    titleContainer: {
        maxWidth: scale(180),
        // flex: 1,
        // flexWrap: 'wrap',
        // backgroundColor: 'red'
    }
})