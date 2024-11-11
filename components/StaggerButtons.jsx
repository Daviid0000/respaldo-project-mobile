import React from "react";
import { Box, useDisclose, IconButton, Stagger, HStack, Icon, Center, NativeBaseProvider } from "native-base";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import { useTranslation } from 'react-i18next';

const Example = () => {
  const {t} = useTranslation();
  
  const {
    isOpen,
    onToggle
  } = useDisclose();
  return <Center style={{position: 'absolute', left: 290, top: -320}}>
      <Box alignItems="center" minH="220">
        <Stagger visible={isOpen} initial={{
          opacity: 0,
          scale: 0,
          translateY: 34
        }} animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            mass: 0.8,
            stagger: {
              offset: 30,
              reverse: true
          }
        }
      }} exit={{
        translateY: 34,
        scale: 0.5,
        opacity: 0,
        transition: {
          duration: 100,
          stagger: {
            offset: 30,
            reverse: true
          }
        }
      }}>
          <IconButton mb="4" variant="solid" bg="#55a" colorScheme="indigo" borderRadius="full" icon={<Icon onPress={() => router.push('/NotificationsComponent')} as={Ionicons} size="6" name="notifications" _dark={{
            color: "warmGray.50"
          }} color="warmGray.50" />} />
          <IconButton mb="4" variant="solid" bg="#55a" colorScheme="indigo" borderRadius="full" icon={<Icon  as={MaterialIcons} _dark={{
            color: "warmGray.50"
          }} size="6" name="invert-colors" color="warmGray.50" />} />
          <IconButton mb="4" variant="solid" bg="#55a" colorScheme="indigo" borderRadius="full" icon={<Icon as={Ionicons} _dark={{
            color: "warmGray.50"
          }} size="6" name="settings-outline" color="warmGray.50" />} />
          <IconButton mb="4" variant="solid" bg="#55a" colorScheme="indigo" borderRadius="full" icon={<Icon onPress={() => router.push('/')} as={MaterialIcons} size="6" name="home" _dark={{
            color: "warmGray.50"
          }} color="warmGray.50" />} />
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="#349" icon={<Icon as={MaterialCommunityIcons} size="6" name="dots-horizontal" color="warmGray.50" _dark={{
          color: "#11d"
      }} />} />
      </HStack>
    </Center>;
};

const MyStagger = () => {
      const { isLoggedIn } = useContext(UserContext);
        return (
          <>
          {
            isLoggedIn ? <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider> : null
          }
          </>
        )
    };
    
    export default MyStagger