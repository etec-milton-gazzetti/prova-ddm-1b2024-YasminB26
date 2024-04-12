import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Pressable } from 'react-native';


export default function Conteudo({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vincent van Gogh</Text>
      <Image source={require('../assets/vicente.png')} style={styles.image}/>
      <Text style={styles.text}>
      Vincent Willem van Gogh nasceu em Groot-Zundert, nos Países Baixos, em 30 de março de 1853. Ele foi o primogênito de Theodorus van Gogh, um ministro religioso, e Anna Cornelia Carbentus. Criado em uma família de classe média, Van Gogh teve uma infância relativamente estável.

Embora tenha trabalhado em várias profissões, incluindo comerciante de arte e professor, Van Gogh só começou a pintar aos 27 anos. Rapidamente, ele se dedicou inteiramente à arte, sua verdadeira paixão.

Em 1886, Van Gogh se mudou para Paris, onde conheceu e foi influenciado pelos impressionistas e pós-impressionistas, como Paul Gauguin, Claude Monet e Henri de Toulouse-Lautrec.

Sua saúde mental sempre foi frágil, e ele lutou contra a depressão e a ansiedade ao longo de sua vida. Em 1888, Van Gogh se estabeleceu em Arles, no sul da França, onde pintou algumas de suas obras mais famosas, como "Noite Estrelada" e "Quarto em Arles".

Após um conflito com Gauguin, Van Gogh cortou parte de sua orelha e foi internado em um hospital psiquiátrico. Durante esse período, ele continuou pintando, produzindo algumas de suas obras mais icônicas.

Van Gogh faleceu em 29 de julho de 1890, aos 37 anos, em Auvers-sur-Oise, França, devido a complicações de um ferimento de bala autoinfligido. Apesar de sua vida curta e tumultuada, ele deixou um legado duradouro na história da arte, com seu estilo expressivo e emocionalmente intenso.
      </Text>

      <Text style={styles.text}>  </Text>
      <Text style={styles.text}>  </Text>

      <Text style={styles.text}> 
      "A Noite Estrelada" é uma das obras mais icônicas de Vincent van Gogh. Pintada em 1889, durante seu período de internação na instituição psiquiátrica de Saint-Rémy-de-Provence, no sul da França, a obra retrata o céu noturno sobre a cidade e suas formas distorcidas e vibrantes.

Van Gogh criou esta obra enquanto estava em um estado emocional conturbado, o que pode ser refletido na intensidade das cores e nas pinceladas expressivas que caracterizam a pintura. As estrelas parecem girar e dançar no céu, enquanto a cidade abaixo está adormecida em tranquilidade.

Uma característica marcante da obra é o uso ousado e único da cor, com tons vibrantes de azul e amarelo, que criam um contraste dramático e uma sensação de movimento e energia. Van Gogh também incorporou elementos simbólicos, como a presença da lua crescente e ciprestes que parecem se inclinar em direção ao céu.

"A Noite Estrelada" é uma representação poderosa da visão pessoal de Van Gogh sobre a natureza e a vida, refletindo sua busca por beleza e significado em meio à turbulência emocional. É uma obra-prima que continua a fascinar e inspirar admiradores da arte em todo o mundo, sendo exibida em museus renomados e considerada uma das pinturas mais reconhecíveis da história da arte.
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
