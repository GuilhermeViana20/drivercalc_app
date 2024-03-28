import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

const Add = () => {
  const [valorCorrida, setValorCorrida] = useState("");
  const [distanciaPartida, setDistanciaPartida] = useState("");
  const [distanciaDestino, setDistanciaDestino] = useState("");
  const [tempoPartida, setTempoPartida] = useState("");
  const [tempoDestino, setTempoDestino] = useState("");

  const save = () => {
    // Aqui você pode enviar os campos para o endpoint usando os estados individuais
    const data = {
      valorCorrida,
      distanciaPartida,
      distanciaDestino,
      tempoPartida,
      tempoDestino,
    };
    console.log(data); // Apenas para verificar os dados antes de enviar
    // Lógica para enviar os dados para o endpoint
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 20,
        paddingTop: 16,
      }}
    >
      <View style={styles.w50}>
        <Text>Valor da Corrida</Text>
        <TextInput
          style={styles.input}
          onChangeText={setValorCorrida}
          value={valorCorrida}
        />
      </View>

      <View style={styles.w50}>
        <Text>Distância Partida (km)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDistanciaPartida}
          value={distanciaPartida}
        />
      </View>

      <View style={styles.w50}>
        <Text>Distância Destino (km)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDistanciaDestino}
          value={distanciaDestino}
        />
      </View>

      <View style={styles.w50}>
        <Text>Tempo Partida (min)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTempoPartida}
          value={tempoPartida}
        />
      </View>

      <View style={styles.w50}>
        <Text>Tempo Destino (min)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTempoDestino}
          value={tempoDestino}
        />
      </View>

      <TouchableOpacity
        onPress={save}
        style={{
          backgroundColor: "#9956F6",
          width: "100%",
          borderRadius: 16,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Salvar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    color: "#212121",
    padding: 10,
    marginTop: 10,
  },
  w50: {
    width: "46%",
    justifyContent: "left",
    margin: 5,
  },
});

export default Add;
