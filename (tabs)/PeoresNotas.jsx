import { router, Stack } from "expo-router"
import { ScrollView, Text, View } from "react-native"
import { CardProfile } from "../../components/CardProfile";
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from 'react-i18next';

const MejoresNotas = () => {
    const {t} = useTranslation();

    return(

        <View style={{ backgroundColor: '#10132F', alignItems: 'center', height: '100%' }}>
            <Stack.Screen 
                options={{ 
                    title: t('My-worst-notes'), 
                    headerStyle: { 
                        backgroundColor: '#10132F' ,
                    },
                    headerTintColor: '#ddd',
                    headerLeft: () => (
                        <AntDesign name="arrowleft" size={22} color={'#ddd'} onPress={() => router.push('/userProfile')} style={{ paddingLeft: 20 }} />
                    )
                }}
            />
                <View style={{ width: '90%', height: '10%', padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                    <Text style={{ color: '#aaa', textAlign: 'center', fontSize: 25 }}>{t('Peores-notas-question')}</Text>
                </View>
                <View style={{ width: '90%', height: '10%', padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                    <Text style={{ color: '#aaa', textAlign: 'center', fontSize: 25 }}>{t('Peores-notas-answer')}</Text>
                </View>

            <ScrollView>
                <View style={{ flexDirection: 'row', gap: 20, marginVertical: 10 }}>
                    <CardProfile NameLibrariIcon={'MaterialCommunityIcons'} nameIcon={'notebook-minus'} sizeIcon={30} textCardProfile={t('Peores-notas-card')} sizeText={30} sizePaddingText={10} showCounter={true}/>
                    <CardProfile NameLibrariIcon={'MaterialCommunityIcons'} nameIcon={'notebook-minus'} sizeIcon={30} textCardProfile={t('Peores-notas-card')} sizeText={30} sizePaddingText={10} showCounter={true}/>
                </View>
                
                <View style={{ flexDirection: 'row', gap: 20, marginVertical: 10 }}>
                    <CardProfile NameLibrariIcon={'MaterialCommunityIcons'} nameIcon={'notebook-minus'} sizeIcon={30} textCardProfile={t('Peores-notas-card')} sizeText={30} sizePaddingText={10} showCounter={true}/>
                    <CardProfile NameLibrariIcon={'MaterialCommunityIcons'} nameIcon={'notebook-minus'} sizeIcon={30} textCardProfile={t('Peores-notas-card')} sizeText={30} sizePaddingText={10} showCounter={true}/>
                </View>

                <View style={{ flexDirection: 'row', gap: 20, marginVertical: 10 }}>
                    <CardProfile NameLibrariIcon={'MaterialCommunityIcons'} nameIcon={'notebook-minus'} sizeIcon={30} textCardProfile={t('Peores-notas-card')} sizeText={30} sizePaddingText={10} showCounter={true}/>
                    <CardProfile NameLibrariIcon={'MaterialCommunityIcons'} nameIcon={'notebook-minus'} sizeIcon={30} textCardProfile={t('Peores-notas-card')} sizeText={30} sizePaddingText={10} showCounter={true}/>
                </View>

                <View style={{ flexDirection: 'row', gap: 20, marginVertical: 10 }}>
                    <CardProfile NameLibrariIcon={'MaterialCommunityIcons'} nameIcon={'notebook-minus'} sizeIcon={30} textCardProfile={t('Peores-notas-card')} sizeText={30} sizePaddingText={10} showCounter={true}/>
                    <CardProfile NameLibrariIcon={'MaterialCommunityIcons'} nameIcon={'notebook-minus'} sizeIcon={30} textCardProfile={t('Peores-notas-card')} sizeText={30} sizePaddingText={10} showCounter={true}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default MejoresNotas;