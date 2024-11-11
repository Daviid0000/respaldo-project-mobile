import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';
import Carousel from 'react-native-reanimated-carousel';
import { ButtonStart } from '@/components/SocialButtons'
import Navbar from '@/components/Navbar'
import { router, Stack } from 'expo-router';
import  MyStagger  from '@/components/StaggerButtons'
import { useFonts, Kufam_400Regular } from '@expo-google-fonts/kufam';
import { UserContext } from '@/context/userContext';
import * as SplashScreen from 'expo-splash-screen';
import {Video} from 'expo-av';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

const tutorBanner = require('@/img/los elegiiiidooss/tutorbanner.png');
const tutoriaLogo = require('@/img/tutorialogo.png');
const loading = require('../../assets/images/loading4.mp4');
const anotadorSinFondo = require('@/img/los elegiiiidooss/anotadorSinFondo.png');
const calendarioSinFondo = require('@/img/los elegiiiidooss/calendarioSinFondo.png');
const studentprofile = require('@/img/los elegiiiidooss/studentprofile.png');

SplashScreen.preventAutoHideAsync()
.then((result) => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
.catch(console.warn);

export default function HomeScreen() {
  const {t} = useTranslation();
  const [isAppReady, setIsAppReady] = useState(false);
  const { isLoggedIn } = useContext(UserContext);
  let [fontsLoaded] = useFonts({
    Kufam_400Regular,
  });

  const data = [
    { id: 1, image: require('@/img/background2.jpg'), text: t('Carrousel-message-3'), },
    { id: 2, image: require('@/img/background1.jpg'), text: t('Carrousel-message-1') },
    { id: 3, image: require('@/img/img2.jpg'), text: t('Carrousel-message-2'), },
    
  ];
  
  useEffect(() => {
    const prepareApp = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);
        SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, []);
 
  if (!isAppReady || !fontsLoaded) {
    return (
      <View style={{ backgroundColor: '#10132F', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{headerShown: false}} />
        
          <Video source={loading} style={{width:250, height: 250}} rate={1.0} // Velocidad de reproducción
            volume={1.0} // Nivel de volumen
            isMuted={true} // Muteado
            resizeMode="cover" // Cómo se redimensiona el video
            shouldPlay={true} // Debería reproducirse automáticamente
            isLooping={false} // No repetir el video (opcional)
            useNativeControls={false} 
          />
      </View>
    );

  }
  
  
  
  
  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <View style={{backgroundColor: '#10132F'}}>
        <ScrollView>
          <View style={{zIndex: 1}}>
            <Navbar />
          </View>
          <Text style={{ fontSize: 50, textAlign: 'left', paddingLeft: 10, color: '#fff', fontFamily: 'Kufam_400Regular'  }}>Stats Academy</Text>
          <Text style={{ fontSize: 30, textAlign: 'left', paddingLeft: 10, color: '#fff' }}>{t('Title-Landing')}</Text>
          <Text style={{ fontSize: 22, textAlign: 'left', paddingLeft: 10, color: '#fff' }}>
            {t('Subtitle-Landing')}
          </Text>
          <ButtonStart />
          <View>
            <Carousel
              width={width}
              height={300}
              autoPlay={true}
              data={data}
              scrollAnimationDuration={3000}
              loop
              renderItem={({ item }) => (
                <View style={{ margin: 10, top: 40, backgroundColor: '#36f', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                  {/* <Image source={item.image} style={{ width: '100%', height: 200 }} /> */}
                  <Text
        style={{
          color: '#fff',
          fontSize: 24,
          textAlign: 'center',
          fontFamily: 'Kufam_400Regular',  // Asegúrate de que la fuente esté cargada
          fontWeight: 'bold',
          paddingHorizontal: 20,
          paddingTop: 100,
          top: -50
        }}
      >
        {item.text}
      </Text>
                </View>
              )}
            />
            
          </View>

          <View style={{ backgroundColor: '#04617c' }}>
            <View style={{ backgroundColor: '#5bc8ca', padding: 10, margin: 10, justifyContent: 'space-between',  borderRadius: 5, flexDirection: 'row', gap: 20}}>
              <View style={{flexDirection: 'column', right: 30}}>
                <Text style={{ color: '#fff', fontSize: 30, width: 250, textAlign: 'center' }}>{t('Presentation-Gauss')}</Text>
                <Button onPress={() => {isLoggedIn ? router.push('/Chat') : router.push('/Login')}} title={t('Button-start-gauss')} color={'#058b94'} buttonStyle={{margin: 'auto', marginVertical: 10, borderRadius: 5 }} />
              
              </View>
              <View style={{ flexDirection: 'column' }}>
                  <Image source={tutorBanner} style={{ width:160, height:180, position: 'absolute', top: -135, left: -80, zIndex: 10}} />
                  <Image source={tutoriaLogo} style={{ width:80, height:60, zIndex: 10, top: 60, left: -50 }} />
              </View>
            </View>
          </View>
              <View style={{ backgroundColor: '#0b246c', width: '100%', height: 320}}>
                <Text style={{ textAlign: 'center', color: '#ddd', fontSize: 25, top: 25 }}>{t('Presentation-tools')}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10, alignItems: 'center', top: 50}}>
                  <View style={{borderWidth: 1, borderColor: '#3366ff80', borderRadius: 2, backgroundColor: '#3366ff50', padding: 5}}>
                  <Image source={studentprofile} style={{ width:90, height:130, marginVertical: 10 }}/>
                    <View style={{backgroundColor: '#3366ff80', height: 40, justifyContent: 'center', paddingHorizontal: 10, position: 'absolute', top: 120}}>
                      <Text style={{ textAlign: 'center', fontSize: 17, color: '#ddd', width: 80}}>{t('Tool-1')}</Text>
                    </View>
                  </View>
                  <View style={{borderWidth: 1, borderColor: '#3366ff80', borderRadius: 2, backgroundColor: '#3366ff50', padding: 5}}>
                  <Image source={anotadorSinFondo} style={{ width:90, height:130, marginVertical: 10 }}/>
                    <View style={{backgroundColor: '#3366ff80', height: 40, justifyContent: 'center', paddingHorizontal: 10, position: 'absolute', top: 120 }} > 
                      <Text style={{ textAlign: 'center', fontSize: 17, color: '#ddd', width: 80}}>{t('Tool-2')}</Text>
                    </View>
                  </View>
                  <View style={{borderWidth: 1, borderColor: '#3366ff80', borderRadius: 2, backgroundColor: '#3366ff50', padding: 5}}>
                    <Image source={calendarioSinFondo} style={{ width:90, height:150 }}/>
                    <View style={{backgroundColor: '#3366ff80', height: 40, justifyContent: 'center', paddingHorizontal: 10, position: 'absolute', top: 120}} >
                      <Text style={{ textAlign: 'center', fontSize: 17, color: '#ddd', width: 80}}>{t('Tool-3')}</Text></View>  
                  </View>
                </View>
              </View>
        </ScrollView>
            <MyStagger />
      </View>
    </>
  );
}
