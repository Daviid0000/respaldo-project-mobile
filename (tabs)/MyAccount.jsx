import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { View, Pressable, Image, Text } from "react-native";
import { Stack, router } from 'expo-router';
import { useTranslation } from 'react-i18next';

const MyAccount = () => {
    const { user } = useContext(UserContext);
    const {t} = useTranslation();

    return(
        <>
            <View style={{ backgroundColor: '#10132F', height: '100%', alignItems: 'center' }}>
            <Stack.Screen options={{
                title: t('My-Account'),
                headerShown: true,
                headerBackTitleVisible: true,
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#10132F' },
                headerLeft: () => (
                    <AntDesign name='arrowleft' onPress={() => router.back()} size={22} color={'#ddd'} style={{ paddingLeft: 20 }} />
                ),
            }} />
                <View style={{width: 100, height: 100, borderWidth: 1, borderColor: '#fff', borderRadius: 50, margin: 10, alignItems: 'center', justifyContent: 'center'}}>
                {user.profileImage ? (
                    <Image source={{uri: user.profileImage}} style={{width: 100, height: 100, borderWidth: 1, borderColor: '#ddd', borderRadius: 50}} />
                ): <Ionicons name="person" size={60} color={'#ddd'} />}
                </View>
                
                <Text style={{ color: '#ddd', fontWeight: 'bold', left: -120, fontSize: 17}}>{t('My-Account-username')}</Text>
                <View style={{ borderWidth: 1, borderRadius:5, padding: 10, margin: 5, borderColor: '#ddd', width: '90%', height: '7%', justifyContent: 'center' }}>
                    <Text style={{color: '#ddd', fontSize: 17, left: 10}}>{user.name ? user.name : user.username}</Text>
                </View>
                <Text style={{ color: '#ddd', fontWeight: 'bold', left: -125, fontSize: 17}}>{t('My-Account-email')}</Text>
                <View style={{ borderWidth: 1, borderRadius:5, padding: 10, margin: 5, borderColor: '#ddd', width: '90%', height: '7%', justifyContent: 'center' }}>
                    <Text style={{color: '#ddd', fontSize: 17, left: 10}}>{user.email}</Text>
                </View>
                <Text style={{ color: '#ddd', fontWeight: 'bold', left: -105, fontSize: 17}}>{t('My-Account-password')}</Text>
                <View style={{ borderWidth: 1, borderRadius:5, padding: 10, margin: 5, borderColor: '#ddd', width: '90%', height: '7%', justifyContent: 'center' }}>
                    <Text style={{color: '#ddd', fontSize: 17, left: 10}}>*********</Text>
                </View>
                <Pressable style={{ borderWidth: 2, borderRadius: 5, padding: 10, justifyContent: 'center', alignItems: 'center', borderColor: '#ddd', width: '90%', top: 20, backgroundColor: '#ffffff25' }} android_ripple={{ color:'rgba(0, 255, 255, 0.2)', borderless: false, radius: 160}}>
                    <Text style={{ color: '#f00', fontWeight: 'bold', fontSize: 17 }}>
                    {t('My-Account-delete')}
                    </Text>
                </Pressable>
            </View>
        </>
    )
}

export default MyAccount;