import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import TabNavigator from "../bottom_nav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/login_screen";
import Signup from "../../screens/signup_screen";
import SplashScreen from "../../screens/splash_screen";
import TrufInfo from "../../screens/sub_screens/booking_screens/truf_info";

const MainRoute = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="SignUp" component={Signup} />
                <Stack.Screen name="TrufInfo" component={TrufInfo} />
            </Stack.Navigator>
        </NavigationContainer>



    );
}

export default MainRoute