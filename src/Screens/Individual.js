import { useEffect, useState } from "react"
import { ActivityIndicator, View, Text, ScrollView, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Entypo'

export default Individual = ({navigation, route}) => {
    const teamId = route.params.id
    const [team, setTeam] = useState();

    function comma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        const getData = async() => {
            const res = await fetch(`https://fantasy.premierleague.com/api/entry/${teamId}/history/`, {
                method: 'GET',
                headers: {
                    'User-Agent': 'JePT'
                }
            })
            .then(res=>res.json())
            .then(res=>setTeam(res))
            .catch(e=>console.log(e))
        }
        getData()
    }, [])

    if (!team) {return <ActivityIndicator />}

    return(
        <ScrollView style={{paddingTop: 50, flex: 1, backgroundColor: 'cyan'}}>
            <TouchableOpacity style={{flexDirection: "row", paddingBottom: 200, marginLeft: 15}} onPress={()=>navigation.pop()}>
                <Icon name="chevron-left" size={28} />
                <Text style={{fontSize: 20}}>Back</Text>
            </TouchableOpacity>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Gameweek Points</Text>
                {team.current.slice(-1)[0].event_transfers_cost > 0
                    ? <Text style={{fontSize:18, fontWeight:'800', color:'blue'}}>
                        {team.current.slice(-1)[0].points}-{team.current.slice(-1)[0].event_transfers_cost}={team.current.slice(-1)[0].points-team.current.slice(-1)[0].event_transfers_cost}
                    </Text>
                    : <Text style={{fontSize:18, fontWeight:'800', color:'blue'}}>
                        {(team.current.slice(-1)[0].points)}
                    </Text>
                }
                <Text style={{fontSize:20, fontWeight:'bold'}}>Overall Rank</Text>
                <Text style={{fontSize:18, fontWeight:'800', color:'blue'}}>
                    {comma(team.current.slice(-1)[0].overall_rank)}
                </Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Previous Rank</Text>
                <Text style={{fontSize:18, fontWeight:'800', color:'blue'}}>
                    {comma(team.current.slice(-2)[0].overall_rank)}
                </Text>
                {team.current.slice(-1)[0].overall_rank < team.current.slice(-2)[0].overall_rank
                    ? <View>
                        <Text style={{color: 'green', fontSize: 20, fontWeight:'bold'}}>Rank Gain</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'green', fontSize: 18, paddingLeft: 20}}>
                                {comma(team.current.slice(-2)[0].overall_rank - team.current.slice(-1)[0].overall_rank)}
                            </Text>
                            <Icon name="arrow-bold-up" color='green' size={25}/>
                        </View>
                    </View>
                    : <View>
                        <Text style={{color: 'red', fontSize: 20, fontWeight:'bold'}}>Rank Loss</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'red', fontSize: 18, paddingLeft: 20}}>
                                {comma(team.current.slice(-1)[0].overall_rank - team.current.slice(-2)[0].overall_rank)}
                            </Text>
                            <Icon name='arrow-bold-down' color='red' size={25} />
                        </View>
                    </View>
                }
            </View>
        </ScrollView>
    )
}