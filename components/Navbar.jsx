import React, { useContext } from 'react';
import { View, Image, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import { MyButton2 } from './Icons';
import { ButtonProfile } from './Icons';
import { UserContext } from '@/context/userContext';
import { ShowDrawer } from '@/hooks/showDrawer';
import MyDrawer from '@/components/MyDrawer'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const {t} = useTranslation();

  const { isLoggedIn } = useContext(UserContext);
  const { mostrar, slideAnim,  } = ShowDrawer();

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image source={require('@/img/tutorialogo.png')} style={styles.image} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable style={{marginHorizontal: 10, paddingHorizontal: 10}}>
          {isLoggedIn ? 
              (<ButtonProfile action={mostrar} />) 
            : (<MyButton2 iconName={'user-circle-o'} iconSize={35} color={'#eee'} action={mostrar}/>)
          }
        </Pressable>

        <MyDrawer mostrar={mostrar} slideAnim={slideAnim}/>
      </View>
    </View>
  );

};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  item: {
    flexDirection: 'row',
    gap: 25,
    marginVertical: 10,
  },
  image: {
    width: 40,
    height: 35,
    marginHorizontal: 10,
  },
});

export default Navbar;
