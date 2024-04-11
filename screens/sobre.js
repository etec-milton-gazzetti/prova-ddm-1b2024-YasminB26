import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Pressable } from 'react-native';


export default function Conteudo({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vincent van Gogh</Text>
      <Image source={require('../assets/vicente.png')} style={styles.image}/>
      <Text style={styles.text}>
      A Revolução Russa de 1917 foi um evento decisivo que levou à derrubada do regime czarista na Rússia e à ascensão dos bolcheviques ao poder. Inicialmente, a Revolução de Fevereiro resultou na abdicação do czar Nicolau II e na instauração de um governo provisório, mas sua incapacidade de satisfazer as demandas populares levou à Revolução de Outubro, liderada por Vladimir Lênin e os bolcheviques. Isso estabeleceu o primeiro governo socialista do mundo. No entanto, a revolução foi seguida por uma guerra civil brutal entre os bolcheviques e os opositores, resultando em grande destruição e perda de vidas. A Revolução Russa teve um impacto duradouro, moldando a política mundial e inspirando movimentos revolucionários em todo o mundo.
      Após a Revolução de Outubro, os bolcheviques enfrentaram enormes desafios para consolidar seu poder e implementar suas políticas revolucionárias. Uma das primeiras medidas foi a assinatura do Tratado de Brest-Litovsk em março de 1918, que encerrou a participação da Rússia na Primeira Guerra Mundial, mas resultou na perda de grandes porções de território para as Potências Centrais.

Internamente, os bolcheviques enfrentaram resistência tanto dos brancos, que representavam uma coalizão de opositores, quanto de outros grupos, como os anarquistas e os nacionalistas não russos. A guerra civil resultante foi marcada por brutalidade e atrocidades de ambos os lados, causando grande sofrimento para a população civil.

Para lidar com a oposição interna, os bolcheviques estabeleceram uma série de medidas draconianas, incluindo a criação da Cheka, a polícia política secreta, e a instituição do terror vermelho para suprimir qualquer resistência. Isso resultou em uma repressão generalizada contra dissidentes políticos, intelectuais, religiosos e outros oponentes do regime.
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
