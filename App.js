import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";

const App = () => {
  const materiaData = [
    { key: "Base De Datos" ,colorEncontrada:"#fffafa" },
    { key: "Administración de base de datos",colorEncontrada:"#fffafa"},
    { key: "Cisco 1" ,colorEncontrada:"#fffafa"},
    { key: "Cisco 2" ,colorEncontrada:"#fffafa"},
    { key: "Arquitectura de Computadoras" ,colorEncontrada:"#fffafa"},
    { key: "SOW" ,colorEncontrada:"#fffafa"},
    { key: "Maquinas Virtuales" ,colorEncontrada:"#fffafa"},
    { key: "Visores" ,colorEncontrada:"#fffafa"},
    { key: "Errores Capa 8" ,colorEncontrada:"#fffafa"},
    { key: "ética" ,colorEncontrada:"#fffafa"},
  ];
  const Materia = ({ nombre, colorEncontrada }) => {
    return (
      <TouchableOpacity onPress={() => setColorEncontrada(nombre)} style={{ backgroundColor: colorEncontrada }}>
        <View style={styles.item}>
          <Text style={styles.Textoitem}>{nombre}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const [bmateria, setBmateria]= useState("");
  const[colorEncontrada, setColorEncontrada]= useState("");
  const[y,setY]=useState("");
  const [x, setX]= useState("");
  const Resultado = () =>{
    setColorEncontrada("#6495ed");
    const actMateriaData = materiaData.map((item) =>{
        if (item.key == bmateria) {
          console.log("encontrado")
          return {...item, colorEncontrada};
    
        }else{return item;}
    
    });
    setMateriaData(actMateriaData)
  }
    const[materiaData2, setMateriaData] = useState(materiaData)
  return (
    <View style={styles.container}>
      <Text style={styles.TextoTitulo}>Plan de estudios de ISC</Text>
  
      
      <FlatList style={styles.BordeLista}
      
        data={materiaData2}
        renderItem={({ item }) => <Materia nombre={item.key} colorEncontrada={item.colorEncontrada} />}
      />
      
      <Text style={styles.Textosubtitulo}>Porfavor, escribe la materia que deseas buscar.</Text>
      
          <TextInput
          style={styles.textInput}
          onChangeText={setBmateria}
          placeholder={""}
          value={bmateria}
        />
        <View style={styles.boton}>
        <Button 
        title="Bucar Materia" 
        onPress={Resultado}
        color="purple"
      />
      </View>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  BordeLista:{
    borderWidth:3,
    borderStyle:"dashed",
    borderColor:"#2f4f4f",
    marginVertical:5,
    marginHorizontal:15,
    borderTopWidth:0,
    borderBottomWidth:0

  },
  TextoTitulo:{
    fontSize: 35,
    textAlign:"center",
    color:"purple"

  },
  Textosubtitulo:{
    fontSize:15,
    textAlign:"center",
    color:"#2f4f4f"
  },  
  Textoitem:{
    fontSize: 22,
    textAlign:"center",
    color:"magenta"

  },
  item: {
    backgroundColor: '#2f4f4f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderBottomEndRadius:20
  },
  itemEncontrado: {
    backgroundColor: '#6495ed',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderBottomEndRadius:20
  },
  textInput: {
    textAlign: "center",
    height:35,
    marginVertical:8,
    marginHorizontal:25,
    borderWidth:1
  },
  boton:{
    marginHorizontal:80
  },
});
export default App;