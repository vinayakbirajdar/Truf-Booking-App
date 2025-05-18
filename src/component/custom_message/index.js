import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CustomMessage = ({ visible, title, message, onConfirm, onCancel, confirmText = 'OK', cancelText = 'Cancel', confirmColor = '#4CAF50', cancelColor = '#F44336', imageSource }) => {
    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
            onRequestClose={onCancel}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {imageSource && (
                        <Image source={imageSource} style={styles.image} resizeMode="contain" />
                    )}
                    {title && <Text style={styles.title}>{title}</Text>}
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttons}>
                        {onCancel && (
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={onCancel}>
                                    <Text style={{ color: confirmColor, fontSize: 18 }}>{cancelText}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        <View style={styles.divider} />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={onConfirm}>
                                <Text style={{ color: cancelColor, fontSize: 18 }}>{confirmText}</Text>
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
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 1,
        paddingVertical: 5,
        borderColor: 'grey'
    },
    confirmButton: {
        backgroundColor: '#4CAF50'
    },
    cancelButton: {
        backgroundColor: '#F44336'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    divider: {
        width: 1,
        backgroundColor: 'grey'
    },
});

export default CustomMessage;
