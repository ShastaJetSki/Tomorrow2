import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AIChatScreen from '../screens/AIChatScreen';
import StoriesListScreen from '../screens/StoriesListScreen';
import StoryDetailScreen from '../screens/StoryDetailScreen';
import CreateStoryScreen from '../screens/CreateStoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import CalendarScreen from '../screens/CalendarScreen';
import MapScreen from '../screens/MapScreen';
import EdgeFunctionsScreen from '../screens/EdgeFunctionsScreen';
import RLSInfoScreen from '../screens/RLSInfoScreen';
import FeatureListScreen from '../screens/FeatureListScreen';
import EdgeFunctionDetailScreen from '../screens/EdgeFunctionDetailScreen';
import SupabaseSetupScreen from '../screens/SupabaseSetupScreen';
import HelpScreen from '../screens/HelpScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component=SplashScreen />
      <Stack.Screen name="SignIn" component=SignInScreen />
      <Stack.Screen name="ForgotPassword" component=ForgotPasswordScreen />
      <Stack.Screen name="Home" component=HomeScreen />
      <Stack.Screen name="Profile" component=ProfileScreen />
      <Stack.Screen name="AIChat" component=AIChatScreen />
      <Stack.Screen name="StoriesList" component=StoriesListScreen />
      <Stack.Screen name="StoryDetail" component=StoryDetailScreen />
      <Stack.Screen name="CreateStory" component=CreateStoryScreen />
      <Stack.Screen name="Settings" component=SettingsScreen />
      <Stack.Screen name="Notifications" component=NotificationsScreen />
      <Stack.Screen name="Messages" component=MessagesScreen />
      <Stack.Screen name="Calendar" component=CalendarScreen />
      <Stack.Screen name="Map" component=MapScreen />
      <Stack.Screen name="EdgeFunctions" component=EdgeFunctionsScreen />
      <Stack.Screen name="RLSInfo" component=RLSInfoScreen />
      <Stack.Screen name="FeatureList" component=FeatureListScreen />
      <Stack.Screen name="EdgeFunctionDetail" component=EdgeFunctionDetailScreen />
      <Stack.Screen name="SupabaseSetup" component=SupabaseSetupScreen />
      <Stack.Screen name="Help" component=HelpScreen />
    </Stack.Navigator>
  );
}