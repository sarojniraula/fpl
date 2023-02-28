import AnimatedLottieView from 'lottie-react-native';
import {Text, TouchableOpacity, View } from 'react-native';

export default Landing = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor:'#808080'}}>
      <View>
        <Text style={{fontFamily:'Cursive', fontSize: 50, color: '#19375f', paddingTop:50}}>The Poland Team FPL</Text>
      </View>
      <View style={{paddingTop: 400}}>
        <AnimatedLottieView source={require("../../assets/44319-facebook-advertising.json")} loop autoPlay />
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Members')} style={{borderColor: 'yellow', borderWidth: 4, paddingHorizontal: 70, paddingVertical: 10, width: '60%', marginHorizontal: 70}}>
          <Text style={{fontFamily:'Cursive', fontSize: 20, alignSelf: 'center', color:'#222222'}}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
