import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/home_screen";
import AvailableScreen from "../../screens/available_screen";
import HistoryScreen from "../../screens/history_screen";


const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Available" component={AvailableScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />

        </Tab.Navigator>
    )
}

export default TabNavigator;