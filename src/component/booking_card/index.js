import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const BookingCard = ({ turfName, date, time }) => {
    return (
        <View style={styles.card}>
            <View>
                <Image
                    source={{
                        uri: 'https://www.shutterstock.com/image-photo/green-grass-background-texture-lawn-260nw-2008633838.jpg',
                    }}
                    style={{ height: 40, width: 40 }}


                />
            </View>
            <Text style={styles.turfName}>{turfName}</Text>
            <Text style={styles.detailText}>Date: {date}</Text>
            <Text style={styles.detailText}>Time: {time}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f8f8f8',
        padding: 16,
        borderRadius: 10,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    turfName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6,
    },
    detailText: {
        fontSize: 14,
        color: '#555',
    },
});

export default BookingCard;
