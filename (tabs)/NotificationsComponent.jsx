// import { AntDesign } from "@expo/vector-icons"
// import { router, Stack } from "expo-router"
// import { ScrollView, Text, View } from "react-native"

// const Notifications = () => {

//     return(
//         <View style={{ height: '100%', backgroundColor: '#10132F' }}>
//             <Stack.Screen options={{
//                 title: '  Notificaciones',
//                 headerShown: true,
//                 headerBackTitleVisible: true,
//                 headerTintColor: '#fff',
//                 headerStyle: { backgroundColor: '#10132F' },
//                 headerLeft: () => (
//                     <AntDesign name='arrowleft' onPress={() => router.push('explore')} size={22} color={'#ddd'} style={{ paddingLeft: 10 }} />
//                 ),
//             }} />
//             <ScrollView>
//                     <Text style={{textAlign: 'center', color: '#ddd'}}>No hay notifiaciones</Text>
//             </ScrollView>
//         </View>
//     )
// }

// export default Notifications;

// import React, { useEffect, useState } from 'react';
// import { ScrollView, Text, View } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import { router, Stack } from 'expo-router';
// import * as Notifications from 'expo-notifications';  // Importa la librería de notificaciones
// import useFetchEvents from '../hooks/eventsFetch';

// const NotificationsComponent = () => {
//   const { events } = useFetchEvents();
//   const [notifications, setNotifications] = useState([]);

//   // Función para solicitar permisos de notificación
//   const requestPermissions = async () => {
//     const { status } = await Notifications.requestPermissionsAsync();
//     if (status !== 'granted') {
//       alert('Permiso de notificación no concedido');
//     }
//   };

//   // Función para programar notificación
//   const scheduleNotification = async (event) => {
//     const now = new Date();
//     const eventDate = new Date(event.date); // Asumimos que 'event.date' es un string de fecha

//     // Si el evento está a un día de distancia, programamos la notificación
//     const timeDiff = eventDate - now;
//     const oneDayInMs = 24 * 60 * 60 * 1000;

//     if (timeDiff <= oneDayInMs && timeDiff > 0) {  // Si el evento es en 1 día
//       // Programar una notificación para un día antes
//       await Notifications.scheduleNotificationAsync({
//         content: {
//           title: "¡Evento importante!",
//           body: `Tu evento '${event.event}' es mañana.`,
//         },
//         trigger: {
//           time: eventDate.getTime() - oneDayInMs,  // Notificar 24 horas antes
//         },
//       });
//       setNotifications(prev => [...prev, event]);
//     }
//   };

//   useEffect(() => {
//     requestPermissions();

//     // Revisar todos los eventos y programar notificaciones
//     events.forEach(event => scheduleNotification(event));
//   }, [events]); // Re-ejecutar cuando los eventos cambian

//   return (
//     <View style={{ height: '100%', backgroundColor: '#10132F' }}>
//       <Stack.Screen options={{
//         title: 'Notificaciones',
//         headerShown: true,
//         headerBackTitleVisible: true,
//         headerTintColor: '#fff',
//         headerStyle: { backgroundColor: '#10132F' },
//         headerLeft: () => (
//           <AntDesign
//             name='arrowleft'
//             onPress={() => router.push('explore')}
//             size={22}
//             color={'#ddd'}
//             style={{ paddingLeft: 10 }}
//           />
//         ),
//       }} />
//       <ScrollView style={{ padding: 10 }}>
//         {notifications.length === 0 ? (
//           <Text style={{ textAlign: 'center', color: '#ddd' }}>No hay notificaciones</Text>
//         ) : (
//           notifications.map((event, index) => (
//             <View key={index} style={{ marginBottom: 10, padding: 10, backgroundColor: '#226', borderRadius: 5 }}>
//               <Text style={{ color: '#fff', fontWeight: 'bold' }}>{event.event}</Text>
//               <Text style={{ color: '#ddd' }}>Fecha: {event.date}</Text>
//             </View>
//           ))
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default NotificationsComponent;

import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import * as Notifications from 'expo-notifications';  // Importa la librería de notificaciones
import useFetchEvents from '../../hooks/eventsFetch';
import { useTranslation } from 'react-i18next';

const NotificationsComponent = () => {
  const {t} = useTranslation();

  const { events } = useFetchEvents();
  const [notifications, setNotifications] = useState([]);
  const [permissionsGranted, setPermissionsGranted] = useState(false); // Estado para saber si los permisos han sido concedidos

  // Función para solicitar permisos de notificación
  const requestPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status === 'granted') {
      setPermissionsGranted(true);
    } else {
      alert('Permiso de notificación no concedido');
    }
  };

  // Función para programar notificación
  const scheduleNotification = async (event) => {
    const now = new Date();
    const eventDate = new Date(event.date); // Asumimos que 'event.date' es un string de fecha

    // Si el evento está a un día de distancia, programamos la notificación
    const timeDiff = eventDate - now;
    const oneDayInMs = 24 * 60 * 60 * 1000;

    if (timeDiff <= oneDayInMs && timeDiff > 0) {  // Si el evento es en 1 día
      // Programar una notificación para un día antes
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "¡Evento importante!",
          body: `Tu evento '${event.event}' es mañana.`,
        },
        trigger: {
          // Usamos el timestamp del evento menos 24 horas (en milisegundos)
          type: Notifications.TriggerType.DATE,
          date: new Date(eventDate.getTime() - oneDayInMs),  // Notificar 24 horas antes
        },
      });
      setNotifications(prev => [...prev, event]);
    }
  };

  useEffect(() => {
    if (!permissionsGranted) {
      requestPermissions();
    } else {
      // Solo programar notificaciones si los permisos son otorgados y si no se ha hecho aún
      if (events && events.length > 0) {
        events.forEach(event => scheduleNotification(event));
      }
    }
  }, [permissionsGranted, events]); // Re-ejecutar solo si cambia el estado de permisos o eventos

  return (
    <View style={{ height: '100%', backgroundColor: '#10132F' }}>
      <Stack.Screen options={{
        title: ' Notificaciones',
        headerShown: true,
        headerBackTitleVisible: true,
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#10132F' },
        headerLeft: () => (
          <AntDesign
            name='arrowleft'
            onPress={() => router.back()}
            size={22}
            color={'#ddd'}
            style={{ paddingLeft: 10 }}
          />
        ),
      }} />
      
      <ScrollView style={{ padding: 10 }}>
        {notifications.length === 0 ? (
          <Text style={{ textAlign: 'center', color: '#ddd' }}>{t('Notifications-void')}</Text>
        ) : (
          notifications.map((event, index) => (
            <View key={index} style={{ marginBottom: 10, padding: 10, backgroundColor: '#226', borderRadius: 5 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{event.event}</Text>
              <Text style={{ color: '#ddd' }}>Fecha: {event.date}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default NotificationsComponent;
