import react from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela inicial</Text>
      <Button title="Sobre"
              onPress={()=>navigation.navigate("Sobre")} />
    </View>
  );
}


function Sobre({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre</Text>
      <Button title="Voltar" onPress={()=>navigation.goBack} />
    </View>
  );
}


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={telahome} />
        <Stack.Screen name="ARTE MODERNA" component={tela1} />
        <Stack.Screen name="Vincent van Gogh" component={tela2} />
        <Stack.Screen name="A Noite Estrelada" component={tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
