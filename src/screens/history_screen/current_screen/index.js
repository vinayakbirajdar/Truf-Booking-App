import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import appStyles from '../../../common/styles/app_style';
import BookingCard from '../../../component/booking_card';

const mockHistoryData = [
    { id: '1', turfName: 'Green Turf', date: '2025-05-20', time: '10:00 AM' },
    { id: '2', turfName: 'City Sports', date: '2025-05-21', time: '2:00 PM' },
    { id: '3', turfName: 'Sunset Arena', date: '2025-05-22', time: '5:00 PM' },
];

const BookingHistoryScreen = () => {
    const renderItem = ({ item }) => (
        <BookingCard
            turfName={item.turfName}
            date={item.date}
            time={item.time}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Booking</Text>
            <FlatList
                data={mockHistoryData}
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

export default BookingHistoryScreen;