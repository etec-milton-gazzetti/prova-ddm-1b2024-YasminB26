import React from 'react';
import { Text, View, Pressable, ImageBackground, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Conteudo from "./conteudo";
import Sobre from "./sobre";
import Image from '../assets/NOITE.png'

export default function Home({ navigation }) {
  return (
    <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFF' }}>
      <Text style={styles.title}>ARTE MODERNA</Text>
      <Text style={styles.title}>"A NOITE ESTRELADA"</Text>
      <Pressable
        style={{ padding: 10, backgroundColor: '#000000', borderRadius: 5, marginTop: 10, width: '50%', alignItems: 'center' }}
        onPress={() => navigation.navigate("Conteudo")}
      >
        <Text style={{ color: 'white' }}>Conteúdo</Text>
      </Pressable>
      <Pressable
        style={{ padding: 10, backgroundColor: '#000000', borderRadius: 5, marginTop: 10, width: '50%', alignItems: 'center' }}
        onPress={() => navigation.navigate("Sobre")}
      >
        
        <Text style={{ color: 'white' }}>Vincent van Gogh</Text>
      </Pressable>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '50',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  image: {
    alignItems: 'center',
    height: '100%',
    width: '100%',

  }, 
  


});
