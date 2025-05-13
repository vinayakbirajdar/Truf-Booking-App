// components/CustomHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const CustomHeader = ({
    title,
    leftIcon,
    rightIcon,
    onLeftPress,
    onRightPress,
    backgroundColor = '#fff',
    textColor = '#000'
}) => {
    return (
        <SafeAreaView edges={['top']} style={{ backgroundColor }}>
            <View style={[styles.container, { backgroundColor }]}>
                <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
                    {leftIcon && <EvilIcons name={leftIcon} size={50} color={textColor} />}
                </TouchableOpacity>

                <Text style={[styles.title, { color: textColor }]}>{title}</Text>

                <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
                    {rightIcon && <EvilIcons name={rightIcon} size={40} color={textColor} />}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer: {
        alignItems: 'center',
        width: 40,

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
});