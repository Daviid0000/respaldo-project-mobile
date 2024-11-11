import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useEventManagement = (initialEvents) => {
    const [EventList, setEventList] = useState(initialEvents);
    const [editingEvent, setEditingEvent] = useState(null);
    const [eventDescription, setEventDescription] = useState('');

    const handleDeleteEvent = async (eventId) => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await fetch(`${process.env.EXPO_PUBLIC_HOST}/calendarEvent/${eventId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'ngrok-skip-browser-warning': true
                },
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el evento');
            }

            // Actualiza la lista de eventos después de borrar uno
            setEventList((prevEvents) => prevEvents.filter(event => event.id !== eventId));
            console.log('Evento eliminado exitosamente');
        } catch (error) {
            console.error(error);
        }
    };

    const handleEditEvent = (event) => {
        setEditingEvent(event);
        setEventDescription(event.event);
    };

    const handleUpdateEvent = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await fetch(`${process.env.EXPO_PUBLIC_HOST}/calendarEvent/${editingEvent.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'ngrok-skip-browser-warning': true
                },
                body: JSON.stringify({ event: eventDescription }),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el evento');
            }

            const updatedEvent = await response.json();

            // Actualiza el estado de eventos
            setEventList((prevEvents) =>
                prevEvents.map(evt => (evt.id === updatedEvent.id ? updatedEvent : evt))
            );
            setEditingEvent(null);
            console.log('Evento actualizado exitosamente');
        } catch (error) {
            console.error(error);
        }
    };

    return {
        EventList,
        editingEvent,
        eventDescription,
        setEventDescription,
        handleDeleteEvent,
        handleEditEvent,
        handleUpdateEvent,
        setEventList,
        setEditingEvent,
    };
};

export default useEventManagement;
