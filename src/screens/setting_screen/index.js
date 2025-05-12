import React, { useContext, useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAlert from "../../component/custom_alert";
import { useNavigation } from '@react-navigation/native';

const settingLists = [
    { id: '1', name: 'Profile' },
    { id: '2', name: 'Notifications' },
    { id: '3', name: 'Logout' }
]

const Setting = () => {
    const { logout } = useContext(AuthContext)
    const [showAlert, setShowalert] = useState(false)
    const navigation = useNavigation();

    const handleLogout = async () => {
        await logout();
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
        });
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <FlatList
                    data={settingLists}
                    renderItem={({ item }) => (
                        <View style={{ padding: 20, borderBottomWidth: 1, marginHorizontal: 10 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (item.name === 'Logout') setShowalert(true);
                                }}

                            >
                                <Text style={{ fontSize: 16 }}>
                                    {item.name}

                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <CustomAlert
                    visible={showAlert}
                    title="Logout"
                    message="Are you sure you want to logout"
                    confirmText="Logout"
                    cancelText="cancle"
                    onConfirm={handleLogout}
                    imageSource={require('../../../assets/logout.png')} // update image path
                    confirmColor="#2196F3"
                    cancelColor="#f44336"
                    onCancel={() => setShowalert(false)}

                />
            </View>
        </SafeAreaView>
    )

}

export default Setting;