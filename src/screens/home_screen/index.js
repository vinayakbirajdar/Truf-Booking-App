import React, { useContext } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";

const HomeScreen = () => {
    const { logout } = useContext(AuthContext)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text style={{ color: 'black' }}>
                    Available Screen
                </Text>
                <Button
                    title="logout"
                    onPress={logout}
                />
            </View>
        </SafeAreaView>
    )

}

export default HomeScreen;