// import React from 'react';
// import { FlatList, Text, View, TouchableOpacity } from 'react-native';
// import { router, Stack } from 'expo-router';
// import { AntDesign } from '@expo/vector-icons';
// import i18next, { languageResources } from '../../utils/i18next'
// import { useTranslation } from 'react-i18next';
// import languagesList from '../../languages/languagesList.json';

// const Idioma = () => {

//     const [t, i18n] = useTranslation();
   
//     const changeLng = (lng) => {
//         i18n.changeLanguage(lng);
//     };

//   return (
//     <>
//         <Stack.Screen
//             options={{
//                 headerShown: true,
//                 title: t('language'),
//                 headerBackTitleVisible: true,
//                 headerTintColor: '#fff',
//                 headerStyle: { backgroundColor: '#10132F' },
//                 headerLeft: () => (
//                     <AntDesign
//                         name="arrowleft"
//                         onPress={() => router.back()}
//                         size={22}
//                         color={'#ddd'}
//                         style={{ paddingLeft: 20 }}
//                     />
//                 ),
//             }}
//         />
//         <View style={{backgroundColor: '#10132F', height: '100%'}}>
//             <Text style={{color: '#ddd', textAlign: 'center', fontSize: 25}}>{t('change-language')}</Text>

//                 <View style={{ height: '100%'}}>
//                 <FlatList
//                     data={Object.keys(languageResources)}
//                     renderItem={({item}) => (
//                     <TouchableOpacity
//                         style={{borderWidth: 2, borderRadius: 5, borderColor: '#ddd', margin: 10, height: 45, justifyContent: 'center'}}
//                         onPress={() => changeLng(item)}>
//                         <Text style={{color:'#ddd', textAlign: 'center', fontSize: 16}}>
//                         {languagesList[item].nativeName}
//                         </Text>
//                     </TouchableOpacity>
//                     )}
//                 />
//                 </View>

//             <Text style={{color: '#ddd', fontSize: 17, textAlign: 'center'}}>{t('welcome')}</Text>

//             <TouchableOpacity style={{borderWidth: 2, borderRadius: 5, borderColor: '#ddd', margin: 10}} >
//                 <Text style={{color: '#ddd', fontSize: 17, padding: 10, textAlign: 'center', justifyContent: 'center'}}>{t('change-language')}</Text>
//             </TouchableOpacity>
//         </View>
//     </>
//   );
// };

// export default Idioma;


import React from 'react';
import { FlatList, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { router, Stack } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import i18next, {languageResources} from '../../utils/i18next';
import languagesList from '../../languages/languagesList.json'

// import i18next, { languageResources } from '../../utils/i18next';
// import languagesList from '../../languages/languagesList.json'; // Asegúrate de tener el archivo correctamente referenciado

const Idioma = () => {
//   const { t, i18n } = useTranslation();

  // Función para cambiar el idioma
//   const changeLng = lng => {
//     i18n.changeLanguage(lng);
//   };

    const {t} = useTranslation();

    const changeLng = lng => {
        i18next.changeLanguage(lng);
    };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Idioma',
          headerBackTitleVisible: true,
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#10132F' },
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              onPress={() => router.back()}
              size={22}
              color={'#ddd'}
              style={{ paddingLeft: 20 }}
            />
          ),
        }}
      />

      <View style={{ backgroundColor: '#10132F', height: '100%' }}>
        <Text style={{ color: '#ddd', textAlign: 'center', fontSize: 25 }}>
          {/* {t('change-language')} */}
          Seleccione su idioma
        </Text>

        <View style={{ height: '80%' }}>
          {/* <FlatList
            data={Object.keys(languageResources)}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderRadius: 5,
                  borderColor: '#ddd',
                  margin: 10,
                  height: 45,
                  justifyContent: 'center',
                }}
                onPress={() => changeLng(item)}
              >
                <Text style={{ color: '#ddd', textAlign: 'center', fontSize: 16 }}>
                  {languagesList[item].nativeName}
                </Text>
              </TouchableOpacity>
            )}
          /> */}
            {/* <Pressable
                style={{
                  borderWidth: 2,
                  borderRadius: 5,
                  borderColor: '#ddd',
                  margin: 10,
                  height: 45,
                  justifyContent: 'center',
                }}
                onPress={() => console.log('idioma')}
              >
                <Text style={{ color: '#ddd', textAlign: 'center', fontSize: 16 }}>
                  {languagesList[item].nativeName}
                  Cambia idioma
                </Text>
            </Pressable> */}
                <FlatList
            data={Object.keys(languageResources)}
            renderItem={({item}) => (
              <Pressable
                style={{borderWidth: 2,
                    borderRadius: 5,
                    borderColor: '#ddd',
                    margin: 10,
                    height: 45,
                    justifyContent: 'center'}}
                onPress={() => changeLng(item)}>
                <Text style={{color: '#ddd', textAlign: 'center', fontSize: 16}}>
                  {languagesList[item].nativeName}
                </Text>
              </Pressable>
            )}
          />
        </View>

        {/* <Text style={{ color: '#ddd', fontSize: 17, textAlign: 'center' }}>
          {t('welcome')}
        </Text> */}

        {/* <TouchableOpacity
          style={{
            borderWidth: 2,
            borderRadius: 5,
            borderColor: '#ddd',
            margin: 10,
            padding: 10,
          }}
          onPress={() => router.back()} // Volver a la pantalla anterior
        >
          <Text style={{ color: '#ddd', fontSize: 17, textAlign: 'center' }}>
            {t('go-back')}
          </Text>
        </TouchableOpacity> */}
      </View>
    </>
  );
};

export default Idioma;
