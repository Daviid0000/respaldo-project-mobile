import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const EditEventModal = ({ visible, event, onClose, onSave }) => {
  const {t} = useTranslation();

    const [eventName, setEventName] = useState('');

    useEffect(() => {
        if (event) {
            setEventName(event.event);
        }
    }, [event]);

    const handleSave = () => {
        onSave({ ...event, event: eventName }); // Guarda los cambios
        onClose(); // Cierra el modal
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Editar Evento</Text>
                <TextInput
                    style={styles.input}
                    value={eventName}
                    onChangeText={setEventName}
                    placeholder="Nombre del evento"
                />
                <Button title="Guardar" onPress={handleSave} />
                <Button title="Cancelar" onPress={onClose} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    modalTitle: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
    },
});

export default EditEventModal;
