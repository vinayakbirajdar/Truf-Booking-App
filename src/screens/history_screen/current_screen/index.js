import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import appStyles from '../../../common/styles/app_style';
import BookingCard from '../../../component/booking_card';
import HistorySkeleton from '../../../component/shimmer_effects/history_skeleton';
import Colors from '../../../common/color';

const mockHistoryData = [
    { id: '1', turfName: 'Green Turf', date: '2025-05-20', time: '10:00 AM - 12.00 PM', location: 'Pune' },
    { id: '2', turfName: 'City Sports', date: '2025-05-21', time: '2:00 PM', location: 'Pune' },
    { id: '3', turfName: 'Sunset Arena', date: '2025-05-22', time: '5:00 PM', location: 'Pune' },
];

const BookingHistoryScreen = () => {
    const [load, setLoad] = useState(false)
    const renderItem = ({ item }) => (
        <BookingCard
            turfName={item.turfName}
            date={item.date}
            time={item.time}
            location={item.location}
            Button_1={"Cancel"}
            Button_2={"Get Direction"}
            btn1_color={Colors.RED}
            btn2_color={Colors.Green}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Booking</Text>
            {load ? (
                <HistorySkeleton />
            ) : (
                <FlatList
                    data={mockHistoryData}
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

export default BookingHistoryScreen;