import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native'; //location permission을 위한 것
import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "cb086239e7d92da773553d767eedf33d";

export default class extends React.Component{ //일단 class로 만들어놈
  state = {
    isLoading:true
  };

  getWeather = async(latitude, longitude) =>{
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );  //axios.get으로 정보를 링크에서 얻어옴
      
    //link같은걸 쓸 땐 axios나 fetch를 사용할 수 있음 (이번엔 axios 사용함. 그래서 npm add axios 해서 사용)
    //axios는 data를 줌
    
      this.setState({
        isLoading : false, 
        condition : data.weather[0].main, //data에서 weather을 가져옴
        temp : data.main.temp //data에서 temp을 가져옴
      });
      //isLoading을 false로 지정
  };

  getLocation = async() => {  //function을 만듦
    try{
      await Location.requestForegroundPermissionsAsync();  //Asks the user to grant permissions for location.
      //await을 하는 이유는 requestForegroundPermissionsAsync 끝에 Async라고 붙어있어서
      //이 Async가 있으면 무조건 await이 있어야함 (기다리라는 뜻이니까)
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();  //coords object를 가져옴 (이 function이 오브젝트를 반환해서)
      //이렇게 {}안에서 coords 오브젝트에 들어있는 latitude, longitude를 가져올 수 있음
      //만약 위에서 OK라고 하면 이게 실행, 아니면 error로 감
      //later we send to API and get weather
      this.getWeather(latitude, longitude);
      this.setState({isLoading : false}); //isLoading을 false로 만듦
      
    }
    catch(error){ //permission을 안줬을때
      Alert.alert("Can't find you", "Please allow the location permission");
      console.log(error);
    }
    
  }
  componentDidMount(){
    this.getLocation();
  }

  render() {  //클래스를 다룰때 필수인것
    const {isLoading, condition, temp} = this.state; //state에서 isLoading을 가져옴
    return isLoading ? <Loading/> : <Weather temp = {Math.round(temp)} condition={condition} />;  //is Loading=true면 Loading을, 아니면 Weather temp 반환
  }
}
