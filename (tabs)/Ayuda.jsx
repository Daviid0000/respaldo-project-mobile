import { useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonList } from '../../components/SocialButtons';
import { router, Stack } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const Ayuda = () => {
    const {t} = useTranslation();

    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const questions = [
        {
            question: t('Help-row-question-1'),
            answer: t('Help-row-answer-1'),
        },
        {
            question: t('Help-row-question-2'),
            answer: t('Help-row-answer-2'),
        },
        {
            question: t('Help-row-question-3'),
            answer: t('Help-row-answer-3'),
        },
        {
            question: t('Help-row-question-4'),
            answer: t('Help-row-answer-4'),
        },
        {
            question: t('Help-row-question-5'),
            answer: t('Help-row-answer-5'),
        },
        {
            question: t('Help-row-question-6'),
            answer: t('Help-row-answer-6'),
        },
        {
            question: t( 'Help-row-question-7'),
            answer: t('Help-row-answer-7'),
        },
    ];

    return (
        <>
            <Stack.Screen
                options={{
                    title: t('Help'),
                    headerShown: true,
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
                <Text
                    style={{
                        color: '#ddd',
                        textAlign: 'center',
                        fontSize: 25,
                        fontWeight: 'bold',
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                >
                    {t('Help-title')}
                </Text>
                {questions.map((item, index) => (
                    <View key={index} style={{ borderWidth: 2, borderRadius: 5, borderColor: '#ddd', margin: 10 }}>
                        <ButtonList
                            content={item.question}
                            direction={'down'}
                            action={() => toggleQuestion(index)}
                            isOpen={openQuestion === index}
                            response={item.answer}
                        />
                        {openQuestion === index && (
                            <View style={{ padding: 10, backgroundColor: '#3366ff30' }}>
                                <Text style={{ color: '#ddd', fontSize: 14 }}>{item.answer}</Text>
                            </View>
                        )}
                    </View>
                ))}
            </View>
        </>
    );
};

export default Ayuda;
