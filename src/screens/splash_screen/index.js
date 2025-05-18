

import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import Video from 'react-native-video';

const SplashScreen = () => {
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (user) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }]
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }]
                });
            }
        }, 2500);
        return () => clearTimeout(timer);
    }, [user]);

    return (
        <View style={styles.container}>

            <Video
                source={require('../../../assets/logo_gif/logo_animated.mp4')}
                style={{ height: 450, width: 450, backgroundColor: 'white' }}
                resizeMode="contain"
                repeat
                muted
                controls={false}
                paused={false} />
            <Text style={styles.loading}>Welcome To Turf Booking</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20
    },
    loading: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default SplashScreen;