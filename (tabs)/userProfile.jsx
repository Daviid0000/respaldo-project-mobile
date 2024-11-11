import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useContext } from "react";
import { Image, Text, View, ScrollView } from "react-native"
import { UserContext } from '../../context/userContext';
import { CardProfile } from "../../components/CardProfile";
import { useTranslation } from 'react-i18next';

const userProfile = () => {
    const { user } = useContext(UserContext);
    const {t} = useTranslation();

    return(
        <>
            <View style={{height: '100%', backgroundColor: '#10132F', alignItems: 'center'}}>
            <Stack.Screen 
                    options={{ 
                        title: t('My-Profile'), 
                        headerStyle: { 
                            backgroundColor: '#10132F' ,
                        },
                        headerTintColor: '#ddd',
                        headerLeft: () => (
                            <AntDesign name="arrowleft" size={22} color={'#ddd'} onPress={() => router.push('/')} style={{ paddingLeft: 20 }} />
                        )
                    }}
                />
                    <View style={{width: 100, height: 100, borderWidth: 1, borderColor: '#fff', borderRadius: 50, margin: 10, alignItems: 'center', justifyContent: 'center'}}>
                        {user.profileImage ? (
                            <Image source={{uri: user.profileImage}} style={{width: 100, height: 100, borderWidth: 1, borderColor: '#ddd', borderRadius: 50}} />
                        ): <Ionicons name="person" size={60} color={'#ddd'} />}
                    </View>
                    <Text style={{ color: '#fff', paddingVertical: 5, fontSize: 20, fontWeight: 'bold' }}>
                        {user.name ? `${user.name}` : `${user.username}`}
                    </Text>

                <ScrollView style={{top: 20}}>
                    <View style={{ flexDirection: 'row', gap: 20, marginVertical: 10 }}>
                        <CardProfile NameLibrariIcon={'EvilIcons'} nameIcon={'check'} sizeIcon={40} textCardProfile={t('Profile-card-1')} sizeText={22} showCounter={true} onPressEnabled={false} onPress={() => router.push('userProfile')}/>
                        <CardProfile NameLibrariIcon={'MaterialCommunityIcons'} nameIcon={'timer-sand-complete'} sizeIcon={30} textCardProfile={t('Profile-card-2')} sizeText={22} showCounter={true} onPressEnabled={false} onPress={() => router.push('userProfile')}/>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 20, marginVertical: 10 }}>
                        <CardProfile NameLibrariIcon={'FontAwesome5'} nameIcon={'medal'} sizeIcon={30} textCardProfile={t('Profile-card-3')} sizeText={23} sizePaddingText={10} showCounter={false} onPressEnabled={false} onPress={() => router.push('userProfile')}/>
                        <CardProfile NameLibrariIcon={'MaterialCommunityIcons'} nameIcon={'notebook-check'} sizeIcon={30} textCardProfile={t('Profile-card-4')} sizeText={23} sizePaddingText={10} showCounter={false} onPressEnabled={true} onPress={() => router.push('MejoresNotas')}/>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 20, marginVertical: 10 }}>
                        <CardProfile NameLibrariIcon={'MaterialIcons'} nameIcon={'timeline'} sizeIcon={40} textCardProfile={t('Profile-card-5')} sizeText={22} sizePaddingText={10} showCounter={false}  onPressEnabled={false} onPress={() => router.push('userProfile')}/>
                        <CardProfile NameLibrariIcon={'MaterialCommunityIcons'} nameIcon={'notebook-minus'} sizeIcon={30} textCardProfile={t('Profile-card-6')} sizeText={23} sizePaddingText={10} showCounter={false} onPressEnabled={true} onPress={() => router.push('PeoresNotas')}/>
                    </View>
                </ScrollView>
                
            </View>
        </>
    )
}

export default userProfile;