import { StyleSheet, View, Text, Pressable, } from 'react-native';
import { MyButton2 } from '@/components/Icons';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const {t} = useTranslation();

    return(
        <View style={stylesFooter.footer}>
            <View>
              <Text style={{ color: '#fff', fontSize: 15 }}>{t('Footer-title')}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', paddingTop: 15, gap: 50 }}>
              
              <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Pressable android_ripple={{ color:'rgba(0, 255, 255, 0.2)', borderless: false, radius: 110}}>
                  <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', marginBottom: 20}}>
                    {t('Footer-subtitle-1')}
                  </Text>
                </Pressable>
              <Pressable android_ripple={{ color:'rgba(0, 255, 255, 0.2)', borderless: false, radius: 110}}>
                <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', marginBottom: 10 }}>{t('Footer-subtitle-2')}
                </Text>
              </Pressable>

                <View style={{top: 50, gap: 20}}>
                  <View >
                    <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>StatsAcademy®</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                      <MyButton2 iconName={'facebook-official'} iconSize={25} color={'#ddd'} action={null}/>
                      <MyButton2 iconName={'linkedin-square'} iconSize={25} color={'#ddd'} action={null}/>
                      <MyButton2 iconName={'instagram'} iconSize={25} color={'#ddd'} action={null}/>
                      <MyButton2 iconName={'github'} iconSize={25} color={'#ddd'} action={null}/>
                    </View>
                  </View>

                    <Text style={{ color: '#fff', fontSize: 15, textAlign: 'center' }}>{t('Footer-contact')}</Text>
                  <Pressable android_ripple={{ color:'rgba(0, 255, 255, 0.2)', borderless: false, radius: 110}}>
                    <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>statsacademy@gmail.com</Text>
                  </Pressable>
                </View>

              </View>
            </View>
          </View>
    )
}

const stylesFooter = StyleSheet.create({

    footer: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        padding: 5,
      },

})