import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { fonts } from '../components/CustomFont';

 function WelcomeScreen() {
  const navigation = useNavigation();
  
  useEffect(() => {
    setTimeout(()=> navigation.navigate('Home'),2500)
  }, []);
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-400">
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fbbf24" translucent = {true}/>
      <View className="bg-white/20 rounded-full" style={{padding:hp(5.5)}}>
        <View className="bg-white/20 rounded-full"style={{padding:hp(5)}}>
          <Image source={require('../../assets/images/food.png')} style={{ width:hp(20), height:hp(20)}}/>
        </View>
      </View>

      <View className="flex items-center space-y-2">
        <Text className="text-white tracking-widest" style={{fontSize:hp(7),fontFamily:fonts.BOLD}}>Foody</Text>
        <Text className="font-medium text-white tracking-widest" style={{fontSize:hp(2),fontFamily:fonts.REGULAR}}>Food is always right</Text>
      </View>

      
    </View>
  );
}
export default WelcomeScreen;
