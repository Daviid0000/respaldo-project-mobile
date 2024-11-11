  import { Tabs } from 'expo-router';
  import React from 'react';
  import { TabBarIcon } from '@/components/navigation/TabBarIcon';

  export default function TabLayout() {

    return (
        
          <Tabs
          screenOptions={{
            tabBarStyle:{ backgroundColor:'#36f', borderTopColor: 'transparent', display: 'none'},
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#666',
          }}
            >
              
            <Tabs.Screen
              name="index"
              options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
              }}
            />
            {/* <Tabs.Screen
              name="explore"
              options={{
                title: 'explore',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
                ),
              }}
            />  */}
            {/* <Tabs.Screen
              name="Setting"
              options={{
                title: 'Setting',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
                ),
              }}
            />  */}
          </Tabs>
          
    );
  }
