import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import QuestionsScreen from '../screens/QuestionsScreen';
import ContentScreen from '../screens/contentScreen';
import MoreScreen from '../screens/MoreScreen';
import TalkToADoctor from '../screens/TalkToADoctor';
import {styles} from '../../global/styles';
import {Text, View} from 'react-native';
import AnswerDetails from '../screens/AnswerDetails';
import {createStackNavigator} from '@react-navigation/stack';

const talkToADoctor = 'TalkToADoctor';
const contentScreen = 'ContentScreen';
const questionScreen = 'QuestionScreen';
const moreScreen = 'MoreScreen';

const ACTIVE_TAB_COLOR = '#21b1ae';
const INACTIVE_TAB_COLOR = '#b7bcb9';

const TabNavigation = createBottomTabNavigator();
const QuestionStack = createStackNavigator();

function QuestionStackScreen({route, navigation}) {
  return (
    <QuestionStack.Navigator>
      <QuestionStack.Screen
        name="questionScreen"
        component={QuestionsScreen}
        options={{headerShown: false}}
        navigation={navigation}
        route={route}
      />
      <QuestionStack.Screen
        name="AnswerDetails"
        component={AnswerDetails}
        options={{
          headerTitle: "Doctor's Answer",
          headerTintColor: '#21b1ae',
          headerStatusBarHeight: 15,
          headerTitleAlign: 'center',
        }}
        navigation={navigation}
        route={route}
      />
    </QuestionStack.Navigator>
  );
}
const Navigator = () => {
  return (
    <NavigationContainer>
      <TabNavigation.Navigator
        screenOptions={{
          headers: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            tabBarActiveTintColor: '#21b1ae',
            position: 'absolute',
          },
        }}>
        <TabNavigation.Screen
          name={talkToADoctor}
          component={TalkToADoctor}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  width: 200,
                  position: 'absolute',
                  elevation: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={[
                    {
                      borderRadius: 50,
                      backgroundColor: '#21b1ae',
                      elevation: 1,
                      width: 80,
                      height: 80,
                      position: 'absolute',
                      justifyContent: 'center',
                      alignItems: 'center',
                      bottom: -20,
                      marginVertical: -5,
                    },
                    styles.icon,
                  ]}>
                  <Icon name="call" size={30} color="white" />
                </View>
                <Text
                  style={[
                    focused ? styles.active : styles.inActive,
                    styles.talkIconText,
                  ]}>
                  Talk to a Doctor Now
                </Text>
              </View>
            ),
          }}
        />
        <TabNavigation.Screen
          name={contentScreen}
          component={ContentScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{left: 30}}>
                <View style={styles.icon}>
                  <Icon
                    name="medkit-outline"
                    size={25}
                    color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                  />
                  <Text style={focused ? styles.active : styles.inActive}>
                    Content
                  </Text>
                </View>
              </View>
            ),
          }}
        />
        <TabNavigation.Screen
          name={questionScreen}
          component={QuestionStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{left: 20}}>
                <View style={styles.icon}>
                  <Icon
                    name="newspaper-outline"
                    size={25}
                    color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                  />
                  <Text style={focused ? styles.active : styles.inActive}>
                    Questions
                  </Text>
                </View>
              </View>
            ),
          }}
        />
        <TabNavigation.Screen
          name={moreScreen}
          component={MoreScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.icon}>
                <Icon
                  name="menu"
                  size={25}
                  color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                />
                <Text style={focused ? styles.active : styles.inActive}>
                  More
                </Text>
              </View>
            ),
          }}
        />
      </TabNavigation.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
