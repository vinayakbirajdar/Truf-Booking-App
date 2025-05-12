import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/home_screen";
import AvailableScreen from "../../screens/available_screen";
import HistoryScreen from "../../screens/history_screen";
import Setting from "../../screens/setting_screen";


const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Available" component={AvailableScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Setting" component={Setting} />


        </Tab.Navigator>
    )
}

export default TabNavigator;