import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import Navigation from './src/Navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cursive': require('./assets/cursive.ttf')
  })
  return (
    fontsLoaded?
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    : <ActivityIndicator />
  );
}