import React, { useContext, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAlert from "../../component/custom_alert";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const generalSetting = [
    { id: '1', name: 'Language', iconLib: "FontAwesome", icon: "language" },
    { id: '2', name: 'Subscription', iconLib: "FontAwesome", icon: "credit-card" },
    { id: '3', name: 'Dark Them', iconLib: "FontAwesome", icon: "moon-o" },
    { id: '4', name: 'Delete Account', iconLib: "FontAwesome", icon: "trash" },
    { id: '5', name: 'Logout', iconLib: "FontAwesome", icon: "sign-out" },

]

const appSettings = [
    { id: '1', name: 'About App', iconLib: "FontAwesome", icon: "info-circle" },
    { id: '2', name: 'Contact Us', iconLib: "FontAwesome", icon: "phone" },
    { id: '3', name: 'Share', iconLib: "FontAwesome", icon: "share-alt" },
    { id: '4', name: 'Privacy Policy', iconLib: "FontAwesome", icon: "lock" },

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
    const getIconLib = (lib) => {
        switch (lib) {
            case "Feather":
                return Feather;
            case "EvilIcon":
                return Ionicons;
            case "FontAwesome":
                return FontAwesome;
            default:
                break;
        }
    }
    return (


        <SafeAreaView style={{ flex: 1 }}>
            {/* <CustomHeader
                title="Settings"
            /> */}
            <ScrollView>
                <View style={styles.mainContainer}>
                    <Text style={styles.headertext}>General</Text>
                    <View style={styles.settingContainer}>
                        <FlatList
                            data={generalSetting}
                            scrollEnabled={false}
                            renderItem={({ item }) => {
                                const IconLib = getIconLib(item.iconLib);
                                return (
                                    <TouchableOpacity style={styles.optionContainer}
                                        onPress={() => {
                                            if (item.name === 'Logout') setShowalert(true);
                                        }}>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20 }}>
                                            {IconLib && <IconLib name={item.icon} size={25} />}
                                            <Text style={{ fontSize: 16 }}>
                                                {item.name}
                                            </Text>
                                        </View>
                                        <Ionicons name='chevron-right' size={25} />

                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>

                    <Text style={styles.headertext}>About App</Text>
                    <View style={styles.settingContainer}>
                        <FlatList
                            data={appSettings}
                            scrollEnabled={false}
                            renderItem={({ item }) => {
                                const IconLib = getIconLib(item.iconLib);
                                return (
                                    <TouchableOpacity style={styles.optionContainer}
                                        onPress={() => {
                                            if (item.name === 'Logout') setShowalert(true);
                                        }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20 }}>
                                            {IconLib && <IconLib name={item.icon} size={25} />}
                                            <Text style={{ fontSize: 16 }}>
                                                {item.name}
                                            </Text>
                                        </View>

                                        <Ionicons name='chevron-right' size={25} />

                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>

                    <CustomAlert
                        visible={showAlert}
                        title="Logout"
                        message="Are you sure you want to logout"
                        confirmText="Logout"
                        cancelText="cancle"
                        onConfirm={handleLogout}
                        imageSource={require('../../../assets/logout.png')}
                        confirmColor="#2196F3"
                        cancelColor="#f44336"
                        onCancel={() => setShowalert(false)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView >
    )

}
const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
        flex: 1,

    },
    optionContainer: {
        padding: 20,
        borderBottomWidth: 1,
        marginBottom: 10,
        borderColor: 'lightgrey',
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headertext: {
        fontSize: 18,
        color: 'grey',
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 10

    },
    settingContainer: {
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    }
})

export default Setting;