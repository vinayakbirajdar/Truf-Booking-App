import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUser = async (user) => {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
        console.error("Failed to save user", e);
    }
};

export const getUser = async () => {
    try {
        const userData = await AsyncStorage.getItem('user');
        return userData ? JSON.parse(userData) : null;
    } catch (e) {
        console.error("Failed to get user", e);
        return null;
    }
};

export const clearUser = async () => {
    try {
        await AsyncStorage.removeItem('user');
    } catch (e) {
        console.error("Failed to clear user", e);
    }
};