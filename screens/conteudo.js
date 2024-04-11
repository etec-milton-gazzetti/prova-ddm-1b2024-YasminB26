import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Pressable } from 'react-native';


export default function Conteudo({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>"A Noite Estrelada" (1889) </Text>
      <Image source={require('../assets/foto.jpg')} style={styles.image}/>
      <Text style={styles.text}>
      é uma das obras mais reconhecíveis e icônicas de Vincent van Gogh. Pintada em 1889 durante o período em que o artista estava internado no asilo Saint-Paul-de-Mausole, em Saint-Rémy-de-Provence, França, a obra mostra uma visão noturna da paisagem ao redor do asilo.

Van Gogh pintou "A Noite Estrelada" durante um período de grande tumulto emocional e instabilidade mental. A obra reflete não apenas a paisagem externa, mas também a paisagem interior do artista, capturando sua agitação emocional e sua busca por tranquilidade e beleza na natureza.

A pintura apresenta um céu turbulento e vibrante, com ondas de estrelas em espiral, uma lua crescente brilhante e nuvens em movimento. Abaixo, há uma pequena vila com casas e uma igreja, iluminadas por uma luz amarela que parece emanar do céu. A paisagem é distorcida e estilizada, refletindo a interpretação única de van Gogh da realidade.

O uso expressivo de cores, pinceladas vibrantes e textura marcante é característico do estilo distintivo de van Gogh. Ele usou cores intensas e contrastantes para transmitir emoções e estados de espírito, criando uma atmosfera carregada de energia e emoção.

"A Noite Estrelada" é uma das obras mais celebradas de van Gogh e é frequentemente interpretada como uma expressão de sua visão pessoal do mundo e de sua luta interior. Ela captura a beleza transcendente da natureza, ao mesmo tempo em que revela a profundidade da angústia e da solidão humana. A obra continua a fascinar e inspirar espectadores em todo o mundo, sendo considerada uma das obras-primas mais importantes da história da arte.




      </Text>

      <Pressable style={{ padding: 10, backgroundColor: '#000000', borderRadius: 5, marginTop: 10 }} onPress={() => navigation.navigate("Home")}><Text style={{ color: 'white' }}>Voltar</Text></Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },

});
