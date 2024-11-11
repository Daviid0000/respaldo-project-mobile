import React, { useEffect, useState } from "react";
import { Modal, Text, View, StyleSheet, TextInput } from "react-native";
import { Button } from "@rneui/base";
import { StylesLogin } from '../components/Styles'
import { useTranslation } from 'react-i18next';

export const ComponentModal = ({visible, setVisible}) => {
  const {t} = useTranslation();

    return(
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
           setVisible(!visible);
          }}>
            <View style={StylesLogin.centeredView}>
              <View style={StylesLogin.modalView}>
                <Text style={StylesLogin.modalText}>Error de Login</Text>
                <Text style={StylesLogin.modalText}>Usuario o contraseña incorrecta</Text>
                <Button
                  title="Cerrar"
                  onPress={() => setVisible(!visible)}>
                </Button>
                
              </View>
            </View>
        </Modal>
    )
}

export const ComponentModalTask = ({visible, setVisible, addTask }) => {
  const {t} = useTranslation();

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [autor, setAutor] = useState('');
  const [fecha, setFecha] = useState('');

  const handleCreateTask = () => {
    const newTask = { username: titulo, description: descripcion, author: autor, date: fecha };
    addTask(newTask);
    setVisible(false);
    setTitulo('');
    setDescripcion('');
    setAutor('');
    setFecha('');
};
  return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
         setVisible(!visible);
        }}>
          <View style={StylesLogin.centeredView}>
            <View style={StylesLogin.modalView}>
              <Text style={styles.subtitle}>Cree su tarea</Text>
                <TextInput 
                  style={styles.input} 
                  onChangeText={texto => setTitulo(texto)} 
                  placeholder='Título' 
                  value={titulo}
                />

                <TextInput 
                  style={styles.input} 
                  onChangeText={texto => setDescripcion(texto)} 
                  placeholder='Descripción'
                  value={descripcion} 
                />
                <TextInput 
                  style={styles.input} 
                  onChangeText={texto => setAutor(texto)} 
                  placeholder='Autor' 
                  value={autor}
                />
                <TextInput 
                  style={styles.input} 
                  onChangeText={texto => setFecha(texto)} 
                  placeholder='Fecha' 
                  value={fecha}
                />
              <Button
                buttonStyle={styles.button}
                title="Crear"
                onPress={handleCreateTask}>
              </Button>
              
            </View>
          </View>
      </Modal>
  )
}

export const ModalEditTask = ({visible, setVisible, task, updateTask}) => {
  const {t} = useTranslation();

  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (task) {
      setUsername(task.username);
      setDescription(task.description);
      setAuthor(task.author);
      setDate(task.date);
    }
  }, [task]);

  const handleSave = () => {
    const updatedTask = {username, description, author, date};
    updateTask(updatedTask);
    setVisible(false);
  };

  return(
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
         setVisible(!visible);
        }}>
          <View style={StylesLogin.centeredView}>
            <View style={StylesLogin.modalView}>
              <Text style={styles.subtitle}>Edite su tarea</Text>
                <TextInput 
                  style={styles.input} 
                  onChangeText={setUsername} 
                  placeholder='Título' 
                  value={username}
                />

                <TextInput 
                  style={styles.input} 
                  onChangeText={setDescription} 
                  placeholder='Descripción'
                  value={description} 
                />
                <TextInput 
                  style={styles.input} 
                  onChangeText={setAuthor} 
                  placeholder='Autor' 
                  value={author}
                />
                <TextInput 
                  style={styles.input} 
                  onChangeText={setDate} 
                  placeholder='Fecha' 
                  value={date}
                />
              <Button
                buttonStyle={styles.button}
                title="Guardar"
                onPress={handleSave}
                >
              </Button>
              
            </View>
          </View>
      </Modal>
    </>
  )
}

export const ViewTaskModal = ({visible, setVisible, task, openEditModal, completeTask}) => {
  const {t} = useTranslation();

  return(
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
         setVisible(!visible);
        }}>
          <View style={StylesLogin.centeredView}>
            <View style={StylesLogin.modalView}>
              {
                task ? (
                  <>
                    <View style={{justifyContent:'flex-start'}}>
                      <Text style={styles.task}>Tarea: {task.username}</Text>
                      <Text style={styles.task}>Descripción: {task.description}</Text>
                      <Text style={styles.task}>Autor: {task.author}</Text>
                      <Text style={styles.task}>Fecha: {task.date}</Text>
                    </View>

                    <Button 
                      buttonStyle={styles.button}
                      title='Editar'
                      onPress={() => {
                        openEditModal(task);
                        setVisible(false);
                      }}
                    />
                    <Button 
                      buttonStyle={styles.button}
                      title='Hecho'
                      onPress={() => {
                        completeTask(task);
                      }}
                    />
                    
                  </>
                )
                : (
                  <View>
                    <Text style={styles.subtitle}>La tarea seleccionada no existe</Text>
                    <Button 
                      title='Cerrar' 
                      onPress={() => setVisible(false)}
                    />
                  </View>
                )
              }
            </View>
          </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  title:{
      fontSize: 20,
      textAlign: 'center'
  },
  subtitle: {
      fontSize:16,
      borderBottomWidth:2,
      borderColor: '#2231'
  },
  input: {
      borderBottomWidth: 2,
      borderColor: '#2231',
      marginHorizontal:15,
      paddingVertical: 10,
      fontSize: 20
  },
  button:{
    borderRadius: 20,
    width:100,
    marginTop:10
  },
  task: {
    marginVertical: 5,
    fontSize:16,
    borderBottomWidth:2,
    borderColor: '#2231'
  }
})