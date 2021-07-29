import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component{
  getLocation = async() => {
    try{
      await Location.requestForegroundPermissionsAsync();  
      const location = await Location.getCurrentPositionAsync();
      //Send to API and get weather
      console.log(location);
    }
    catch(error){
      Alert.alert("Can't find you", "Please try again from a different location");
      console.log(error);
    }
    
  }
  componentDidMount(){
    this.getLocation();
  }

  render() {
    return <Loading></Loading>;
  }
}
