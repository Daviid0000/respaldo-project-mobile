import { useContext } from "react";
import { Animated, View, Text, Pressable, Image } from "react-native";
import { ButtonList } from "./SocialButtons";
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "@/context/userContext";
import ActionButtons from "@/hooks/ActionButtons";
import { router } from "expo-router";
import { useImagePicker } from '@/hooks/useImagePicker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { uploadCloudinary } from "./Upload.Cloudinary";
import { Footer } from '@/components/Footer'
import { useTranslation } from 'react-i18next';
import handleShare from '@/hooks/useShareUrl'

const MyDrawer = ({ slideAnim, mostrar }) => {
  const {t} = useTranslation();

  const { isLoggedIn, user, updateUserProfile } = useContext(UserContext);
  const { clearAsyncStorage } = ActionButtons();
  const { pickImage } = useImagePicker();

  const handleUpload = async (imageUri) => {
    const imageUrl = await uploadCloudinary(imageUri, user);
    console.log('Imagen subida con éxito:', imageUrl);
    return imageUrl
  };

  const handleLogin = () => {
    mostrar();
    router.push('Login');
  }

  const handleRegister = () => {
    mostrar();
    router.push('Register');
  }

  const handleLogout = () => {
    clearAsyncStorage();
    mostrar();
    router.navigate('/');
  }

  const handleProfile = () => {
    mostrar();
    router.navigate('/userProfile');
  }

  const handleChangeAvatar = async () => {
    const imageUri = await pickImage();
    if(imageUri) {
      const imageUrl = await handleUpload(imageUri);
      if(imageUrl) {
        console.log("usuario que subira la imagen a cloudinary: ", user.name)
        const profileImageKey = `profileImage_${user.id}`;
        console.log("imagen guardada con la clave: ", profileImageKey)
        await AsyncStorage.setItem(profileImageKey, imageUrl)
        updateUserProfile(imageUrl)

      }
    }
  }

    return(
      <Animated.View style={{
        backgroundColor: '#114', 
            width: 280, 
            height: 1150, 
            zIndex: 10, 
            position: 'absolute', 
            top: 7, 
            right: 0,
            transform: [{ translateX: slideAnim }],
            alignItems: 'flex-end',
        }}>
            <Ionicons name='close' size={40} color={'#ddd'} onPress={mostrar} style={{padding: 10}} />

            <View style={{margin: 'auto', flex: 1}}>
              {!isLoggedIn ? (
                <>
                  <View style={{justifyContent: 'flex-start', flex: 10, top: 50, gap: 10}}>
                    <View style={{borderWidth: 2, borderRadius: 5, borderColor: '#ddd',  width: 250}}>
                      <ButtonList content={'Iniciar sesión'} action={handleLogin}/>
                    </View>
                    <View style={{borderWidth: 2, borderRadius: 5, borderColor: '#ddd',  width: 250}}>
                      <ButtonList content={'Registrarse'} action={handleRegister}/>
                    </View>
                  </View>
                </>
                ):  ( <>

                        <View style={{justifyContent: 'flex-start', flex: 10, alignItems: 'center'}}>

                          <View style={{width: 100, height: 100, borderWidth: 1, borderColor: '#fff', borderRadius: 50, margin: 10, alignItems: 'center', justifyContent: 'center'}}>
                            {user.profileImage ? (
                              <Image source={{uri: user.profileImage}} style={{width: 100, height: 100, borderWidth: 1, borderColor: '#ddd', borderRadius: 50}} />
                            ): <Ionicons name="person" size={60} color={'#ddd'} />}
                          </View>
                          <Text style={{ color: '#fff', paddingVertical: 5, fontSize: 17, fontWeight: 'bold' }}>
                            {user ? `${user.name || user.username}` : `Inicia sesión`}
                          </Text>
                              <Pressable android_ripple={{ color:'rgba(0, 255, 255, 0.2)', borderless: false, radius: 150}} onPress={handleChangeAvatar}>
                                <Text style={{color: '#ddd', textAlign: 'center', margin: 5, fontSize: 15}}>{t('Drawer-change-avatar')} </Text>
                              </Pressable>
        
                            <View>
                              <Text style={{color: '#fff', paddingVertical: 5, fontSize: 17, fontWeight: 'bold'}}>{t('Drawer-title-1')}</Text>
                              <View style={{borderWidth: 2, borderRadius: 5, borderColor: '#ddd',  width: 250}}>
                                <ButtonList direction={'right'} content={t('Drawer-row-1')} action={handleProfile} />
                                <ButtonList direction={'right'} content={t('Drawer-row-2')} action={() => router.push('/MyAccount')} />
                                <ButtonList direction={'right'} content={t('Drawer-row-3')} action={() => router.push('NotificationsComponent')} />
                                <ButtonList direction={'right'} content={t('Drawer-row-4')} />
                                <ButtonList direction={'right'} content={t('Drawer-row-5')} action={() => router.push('/Idioma')} />
                              </View>
                            </View>
        
                            <View style={{marginVertical: 20}}>
                              <Text style={{color: '#fff', paddingVertical: 5, fontSize: 17, fontWeight: 'bold'}}>{t('Drawer-title-2')}</Text>
                              <View style={{borderWidth: 2, borderRadius: 5, borderColor: '#ddd',  width: 250}}>
                                <ButtonList direction={'right'} content={t('Drawer-row-6')} action={() => router.push('/Ayuda')} />
                                <ButtonList direction={'right'} content={t('Drawer-row-7')} action={handleShare} />
                                <ButtonList direction={'right'} content={t('Drawer-row-8')} action={handleLogout} />
                              </View>
                            </View>
                            <View style={{top: 100}}>
                              <Footer />
                            </View>

                        </View>
                      </>
                    )
                  }
            </View>
        </Animated.View>
    )
}

export default MyDrawer;