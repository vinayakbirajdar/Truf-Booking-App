

import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';

const SplashScreen = () => {
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (user !== null) {
                navigation.replace('Home');
            } else {
                navigation.replace('Login');
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [user]);

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Turf Booking</Text>
            <ActivityIndicator size="large" color="#000" />
            <Text style={styles.loading}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20
    },
    loading: {
        marginTop: 10,
        fontSize: 16
    }
});

export default SplashScreen;