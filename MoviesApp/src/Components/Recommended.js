import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import itemHorizontal from '../Assets/Images/Item-Horizontal.png';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {
    ACCESS_TOKEN,
    BASE_URL,
    BASE_URL_ALDIPEE,
    IMAGES_URL,
    IMAGES_URL_ALDIPEE,
} from '../Helpers/ApiAccess';
import axios from 'axios';

// image

export default function Recommended() {
    const [listMovie, setListMovie] = useState([]);

    useEffect(() => {
        getLitsMovieRecommended();
    }, []);

    const getLitsMovieRecommended = async () => {
        try
        {
            const results = await axios.get(`${BASE_URL_ALDIPEE}movies`);
            setListMovie(results.data.results);
        } catch (error)
        {
            console.log(error);
        }
    };

    const posterMovie = ({ item }) => {
        return (
            <View style={Styles.containerItemHorizontal}>
                <Image
                    source={{ uri: `${IMAGES_URL_ALDIPEE}${item.poster_path}` }}
                    style={Styles.itemHorizontal}
                />
            </View>
        );
    };

    return (
        <View>
            <Text style={Styles.title}>Recommended</Text>
            <FlatList
                data={listMovie}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={posterMovie}
                style={{ marginBottom: scale(12) }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    title: {
        fontSize: scale(20),
        fontWeight: '700',
        marginBottom: scale(10),
    },
    containerItemHorizontal: {
        // backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        height: scale(120),
        alignItems: 'center',
    },
    itemHorizontal: {
        marginRight: scale(10),
        height: scale(110),
        width: scale(85),
        borderRadius: 10,
    },
});
