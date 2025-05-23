import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BookingCard from '../../../component/booking_card';
import appStyles from '../../../common/styles/app_style';

const mockPastBookings = [
    { id: '1', turfName: 'River Side Turf', date: '2025-04-10', time: '8:00 AM' },
    { id: '2', turfName: 'Downtown Sports Arena', date: '2025-04-08', time: '6:00 PM' },
    { id: '3', turfName: 'Elite Grounds', date: '2025-04-05', time: '3:30 PM' },
];

const PastBookingScreen = () => {
    const renderItem = ({ item }) => (
        <BookingCard
            turfName={item.turfName}
            date={item.date}
            time={item.time}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Past Booking</Text>
            <FlatList
                data={mockPastBookings}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 14,
    },
    title: {
        ...appStyles.lable,
        marginVertical: 5
    },
    listContent: {
        paddingBottom: 10,
    },
});

export default PastBookingScreen;