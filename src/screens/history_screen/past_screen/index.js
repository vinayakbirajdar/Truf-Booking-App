import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BookingCard from '../../../component/booking_card';
import appStyles from '../../../common/styles/app_style';
import Colors from '../../../common/color';
import HistorySkeleton from '../../../component/shimmer_effects/history_skeleton';

const mockPastBookings = [
    { id: '1', turfName: 'Green Turf', date: '2025-05-20', time: '10:00 AM - 12.00 PM', location: 'Pune' },
    { id: '2', turfName: 'City Sports', date: '2025-05-21', time: '2:00 PM', location: 'Pune' },
    { id: '3', turfName: 'Sunset Arena', date: '2025-05-22', time: '5:00 PM', location: 'Pune' },
];

const PastBookingScreen = () => {
    const [load, setLoad] = useState(false)

    const renderItem = ({ item }) => (
        <BookingCard
            turfName={item.turfName}
            date={item.date}
            time={item.time}
            location={item.location}
            Button_1={"Book Again"}
            Button_2={"Call"}
            btn1_color={Colors.BLACK}
            btn2_color={Colors.Green}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Past Booking</Text>
            {load ? (
                <HistorySkeleton />
            ) : (
                <FlatList
                    data={mockPastBookings}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContent}
                />
            )}
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