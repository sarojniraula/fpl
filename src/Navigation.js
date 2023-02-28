import { createStackNavigator } from "@react-navigation/stack";
import Individual from "./Screens/Individual";
import Landing from "./Screens/Landing";
import Members from "./Screens/Members";

const Stack = createStackNavigator();

export default Navigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
            <Stack.Screen name="Members" component={Members} options={{headerShown: false}} />
            <Stack.Screen name="Individual" component={Individual} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}