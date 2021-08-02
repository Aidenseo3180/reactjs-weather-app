import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze : { iconName : "weather-fog", gradient : ["#334d50","#cbcaa5"]},
    Clear : {iconName : "weather-sunny", gradient : ["#334d50","#cbcaa5"]},
    Rainy : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Tunderstorm : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Drizzle : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Snow : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Tornado : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Mist : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Dust : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Smoke : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Squail : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Fog : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Clouds : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Ash : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]},
    Sand : {iconName : "weather-pouring", gradient : ["#334d50","#cbcaa5"]}

}

export default function Weather({temp,condition}){    //temp 을 받음
    return (
    <LinearGradient 
    colors = {weatherOptions["Sand"].gradient} 
    style={styles.container}
    >
        <StatusBar barStyle = "light-content" />
        <View style = {styles.halfContainer}>
            <MaterialCommunityIcons name={weatherOptions["Sand"].iconName} size = {70} color = "white"/> 
            <Text style = {styles.temp}>{temp}℃</Text>
        </View>
        <View styles = {styles.halfContainer}>
            <Text></Text>
        </View>
    </LinearGradient>
    ); 
}
//halfContainer로 하나는 화면의 위쪽 반, 다른 하나는 아래쪽 반
//weatherOptions[condition].iconName 해서 똑같은 이름인걸 출력

Weather.propTypes = {
    temp : PropTypes.number.isRequired, //temp는 number니까
    condition : PropTypes.oneOf([
        "Tunderstorm", 
        "Drizzle", 
        "Snow",
        "Tornado",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squail",
        "Clear", 
        "Rain", 
        "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    temp : {
        fontSize : 32,
        color : "white"
    },  
    halfContainer:{
        flex: 1 ,
        justifyContent:"center",
        alignItems : "center"
    },

});

