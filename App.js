import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Biblioteca Virtual</Text>

      <CardLivro
        nomeLivro="Dom Casmurro"
        autor="Machado de Assis"
        capa="https://m.media-amazon.com/images/I/61Z2bMhGicL._SY425_.jpg"
      />
      <CardLivro
        nomeLivro="O Primo Basílio"
        autor="José de Alencar"
        capa="https://m.media-amazon.com/images/I/41wvWlQcmRL._SY445_SX342_.jpg"
      />
      <CardLivro
        nomeLivro="Memórias Póstumas de Brás Cubas"
        autor="Machado de Assis"
        capa="https://m.media-amazon.com/images/I/91GAAzBixYL._SY385_.jpg"
      />
    </ScrollView>
  );
}

function CardLivro({ nomeLivro, autor, capa }) {
  return (
    <View style={styles.cardLivro}>
      <Image
        source={{ uri: capa }}
        style={styles.imagemCapa}
      />
      <Text style={styles.nomeLivro}>{nomeLivro}</Text>
      <Text style={styles.autorLivro}>{autor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a1b9a', // Cor de fundo roxa
    padding: 20,
  },
  titulo: {
    fontFamily: 'Arial',
    fontSize: 32,
    textAlign: 'center',
    color: '#ffffff', // Cor do título em branco
    marginBottom: 20,
  },
  cardLivro: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    padding: 10,
  },
  imagemCapa: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  nomeLivro: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d40',
    textAlign: 'center',
    marginTop: 10,
  },
  autorLivro: {
    fontSize: 18,
    color: '#004d40',
    textAlign: 'center',
  },
});