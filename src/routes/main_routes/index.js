import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigator from "../bottom_nav";

const MainRoute = () => {
    return (

        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}

export default MainRoute