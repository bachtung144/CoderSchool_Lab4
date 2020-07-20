import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MessagesScreen from './src/Screens/MessagesScreen';
import ContactsScreen from './src/Screens/ContactsScreen';
import GroupsScreen from './src/Screens/GroupsScreen';
import TimeLineScreen from './src/Screens/TimeLineScreen';
import MoreScreen from './src/Screens/MoreScreen';

const StackMess = createStackNavigator();
const StackContact = createStackNavigator();
const StackGroup = createStackNavigator();
const StackTimeline = createStackNavigator();
const StackMore = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStackMess() {
  return (
    <StackMess.Navigator>
      <StackMess.Screen
        name="Messages"
        component={MessagesScreen}
        options={{title: 'Messages'}}
      />
    </StackMess.Navigator>
  );
}
function MyStackContact() {
  return (
    <StackContact.Navigator>
      <StackContact.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{title: 'Contacts'}}
      />
    </StackContact.Navigator>
  );
}
function MyStackGroup() {
  return (
    <StackGroup.Navigator>
      <StackGroup.Screen
        name="Groups"
        component={GroupsScreen}
        options={{title: 'Groups'}}
      />
    </StackGroup.Navigator>
  );
}
function MyStackTimeLine() {
    return (
        <StackTimeline.Navigator>
            <StackTimeline.Screen
                name="TimeLine"
                component={TimeLineScreen}
                options={{title: 'TimeLine'}}
            />
        </StackTimeline.Navigator>
    );
}
function MyStackMore() {
    return (
        <StackMore.Navigator>
            <StackMore.Screen
                name="More"
                component={MoreScreen}
                options={{title: 'More'}}
            />
        </StackMore.Navigator>
    );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            switch (route.name) {
              case 'Messages':
                return <Entypo name={'message'} size={size} color={color}/>;
              case 'Contacts':
                return (
                  <Ionicons name={'md-people-circle-outline'} size={size} color={color} />
                );
              case 'Groups':
                return (
                  <MaterialCommunityIcons name={'account-group'} size={size} color={color} />
                );
                case 'TimeLine':
                    return (
                        <Entypo name={'bookmarks'} size={size} color={color} />
                    );
                case 'More':
                    return (
                        <Foundation name={'indent-more'} size={size} color={color} />
                    );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2e95dc',
          inactiveTintColor: '#cccccc',
        }}>
        <Tab.Screen name="Messages" component={MyStackMess} />
        <Tab.Screen name="Contacts" component={MyStackContact} />
        <Tab.Screen name="Groups" component={MyStackGroup} />
        <Tab.Screen name="TimeLine" component={MyStackTimeLine} />
        <Tab.Screen name="More" component={MyStackMore} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
