import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CustomAlert = ({ visible, title, message, onClose, imageSource }) => {
    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {imageSource && (
                        <Image source={imageSource} style={styles.image} resizeMode="contain" />
                    )}
                    {title && <Text style={styles.title}>{title}</Text>}
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttons}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={onClose}>
                                <Text style={{ color: 'blue', fontSize: 20 }}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 20,
        alignItems: 'center'
    },
    image: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    message: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 1,
        paddingVertical: 10,
        borderColor: 'grey'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
});

export default CustomAlert;
