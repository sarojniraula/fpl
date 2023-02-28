import { TouchableOpacity, View, Image, Text, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/Entypo'

export default Members = ({navigation}) => {
    return (
        <ScrollView style={{paddingTop: 50, flex: 1, backgroundColor: 'orange'}}>
            <TouchableOpacity style={{flexDirection: "row", marginLeft: 15}} onPress={()=>navigation.pop()}>
                <Icon name="chevron-left" size={28} />
                <Text style={{fontSize: 20}}>Back</Text>
            </TouchableOpacity>
        <View style={{paddingTop: 50}}>
            <View style={{flexDirection:'row', paddingVertical: 50}}>
                <TouchableOpacity style={{paddingHorizontal: 20}} onPress={()=>(navigation.navigate('Individual', {id: 290467}))}>
                    <Image style={{width: 80, height: 80}} source={require('../assets/Individuals/saroj.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal: 20}} onPress={()=>(navigation.navigate('Individual', {id: 6433}))}>
                    <Image style={{width: 80, height: 80}} source={require('../assets/Individuals/anzan.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal: 20}} onPress={()=>(navigation.navigate('Individual', {id: 14984}))}>
                    <Image style={{width: 80, height: 80}} source={require('../assets/Individuals/gaurab.jpg')} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', paddingVertical: 50}}>
                <TouchableOpacity style={{paddingHorizontal: 20}} onPress={()=>(navigation.navigate('Individual', {id: 692853}))}>
                    <Image style={{width: 80, height: 80}} source={require('../assets/Individuals/bidish.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal: 20}} onPress={()=>(navigation.navigate('Individual', {id: 41341}))}>
                    <Image style={{width: 80, height: 80}} source={require('../assets/Individuals/gaurav.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal: 20}} onPress={()=>(navigation.navigate('Individual', {id: 17738}))}>
                    <Image style={{width: 80, height: 80}} source={require('../assets/Individuals/himal.jpg')} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', paddingVertical: 50}}>
                <TouchableOpacity style={{paddingHorizontal: 20}} onPress={()=>(navigation.navigate('Individual', {id: 14787}))}>
                    <Image style={{width: 80, height: 80}} source={require('../assets/Individuals/pravin.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal: 20}} onPress={()=>(navigation.navigate('Individual', {id: 6283}))}>
                    <Image style={{width: 80, height: 80}} source={require('../assets/Individuals/sujan.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal: 20}} onPress={()=>(navigation.navigate('Individual', {id: 21460}))}>
                    <Image style={{width: 80, height: 80}} source={require('../assets/Individuals/govinda.jpg')} />
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}