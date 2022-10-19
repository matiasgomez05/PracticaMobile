
import * as React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const axios = require('axios').default;

export default function App() {

  const [juego, setJuego] = React.useState("");
  const [imagen, setImagen] = React.useState("");

  function obtenerJuegoRandom(){
    let juegoRandom = Math.floor(Math.random() * 367); 
    const endpoint = "https://www.freetogame.com/api/game?id="+juegoRandom;

    axios.get(`${endpoint}`)
    .then( (respuesta) => {
        let juego = respuesta.data.title;
        let imagen = { uri: respuesta.data.thumbnail }

        setJuego(juego);
        setImagen(imagen);
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  return (
    <View style={styles.container}>
      <Image source={ imagen } onChange={ (e) => setImagen(e.target.value) } style={styles.imagen}/>
      <Text style={styles.text1}>Juegos gratis al azar:</Text>
      <Button onPress={ () => obtenerJuegoRandom() } title="Descubrir"></Button>
      <Text style={styles.text2}>{ juego }</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000000',
    height: "100%",
    width: "100%"
  },
  text1: {
    margin: 5,
    fontWeight: "bold",
    color: "white"
  },
  text2: {
    margin: 10,
    fontWeight: "bold",
    color: "yellow",
  },
  imagen: {
    resizeMode: "cover",
    height: 206,
    width: 365,
    margin: 5,
    borderWidth: 3,
    borderColor: "yellow",
  }
});
