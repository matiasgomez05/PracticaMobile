
import * as React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const axios = require('axios').default;

export default function App() {

  const [juego, setJuego] = React.useState("");
  const [imagen, setImagen] = React.useState("");

  function obtenerJuegoRandom(){
    let random = Math.floor(Math.random() * 500); 
    const endpoint = "https://www.freetogame.com/api/game?id="+random;
    axios.get(`${endpoint}`)
      .then( (respuesta) => {
        let juego = respuesta.data.title;
        let imagen = respuesta.data.thumbnail;

        setJuego(juego);
        setImagen(imagen);
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  return (
    <View style={styles.container}>
      <Image source={ imagen } />
      <Text style={styles.text1}>Juegos gratis al azar:</Text>
      <Button onPress={ () => obtenerJuegoRandom() } title="Descubrir"></Button>
      <Text style={styles.text2}>{ juego }</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    margin: 10,
    fontWeight: "bold",
  },
  text2: {
    margin: 10,
    fontWeight: "bold",
    color: "red",
  }
});
