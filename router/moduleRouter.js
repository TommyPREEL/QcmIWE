import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Module } from '../views/module';

const Tab = createBottomTabNavigator();

export function ModuleRouter() {

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{animationEnabled:true, swipeEnabled:true}}>
                <Tab.Screen name="Module1" options={{
                title:'Module 1', 
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="comment-question-outline" size={25} color="blue"/>)}}
                    component={Module} initialParams={{ num: 1 }}/>
                <Tab.Screen name="Module2" options={{
                title:'Module 2', 
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="comment-question-outline" size={25} color="blue"/>)}}
                    component={Module} initialParams={{ num: 2 }}/>
                <Tab.Screen name="Module3" options={{
                title:'Module 3', 
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="comment-question-outline" size={25} color="blue"/>)}}
                    component={Module} initialParams={{ num: 3 }}/>
                <Tab.Screen name="Module4" options={{
                title:'Module 4', 
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="comment-question-outline" size={25} color="blue"/>)}}
                    component={Module} initialParams={{ num: 4 }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}