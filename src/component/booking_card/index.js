import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import appStyles from '../../common/styles/app_style';
import Colors from '../../common/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

const BookingCard = ({ turfName, date, time, location, Button_1, Button_2, btn1_color, btn2_color }) => {
    const [option, setOption] = useState(false)
    const feedback = 2
    return (
        <TouchableOpacity style={styles.card} onPress={() => setOption(!option)}>
            <View style={{ flexDirection: 'row', columnGap: 5, }}>
                <View style={{}}>
                    <Image
                        source={{
                            uri: 'https://t3.ftcdn.net/jpg/07/53/30/86/360_F_753308613_YEcOvUtGdhyDdyOV5wI30Te0vOZQPGly.jpg',
                        }}
                        style={{
                            height: 100, width: 100, borderRadius: 30, borderWidth: 1,
                            borderColor: Colors.GRAY
                        }}
                    />
                </View>
                <View style={{ flex: 1, padding: 10, flex: 1, }}>
                    <Text style={{ ...appStyles.lable }}>{turfName || "--"}</Text>
                    <View style={styles.Bookinginfo}>
                        <Icon name="timer-sand-full" size={15} />
                        <Text style={styles.bookingInfoText}>[ {time || "--"} ]</Text>
                    </View>
                    <View style={styles.Bookinginfo}>
                        <Icon name="calendar-text" size={15} />
                        <Text style={styles.bookingInfoText}>{date || "--"}</Text>

                    </View>
                    <View style={styles.Bookinginfo}>
                        <Icon2 name="location-pin" size={15} />
                        <Text style={styles.bookingInfoText}>{location || "--"}</Text>
                    </View>
                </View>
                <View style={styles.feedback}>
                    <Image
                        source={require('../../../assets/goodRate.png')}
                        style={{ height: 20, width: 20 }}
                    />
                    <Text style={{ ...appStyles.FONT_SEMIBOLD, fontSize: 18 }}>{feedback} ({4})</Text>
                </View>
            </View>
            {
                option ? (
                    <View style={styles.optionContainer}>
                        <TouchableOpacity style={{ ...appStyles.submitBtn, width: "40%", backgroundColor: btn1_color }}>
                            <Text style={{ ...appStyles.submitText, }}>{Button_1}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...appStyles.submitBtn, width: "40%", backgroundColor: btn2_color }}>
                            <Text style={{ ...appStyles.submitText, }}>{Button_2}</Text>
                        </TouchableOpacity>
                    </View>

                ) : (
                    null
                )
            }

        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    turfName: {
    },
    detailText: {
        fontSize: 14,
        color: '#555',
    },
    Bookinginfo: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
        marginTop: 5
    },
    bookingInfoText: {
        ...appStyles.FONT_REGULAR,
        fontSize: 14
    },
    feedback: {
        flexDirection: 'row',
        columnGap: 5,
        alignItems: 'center',
        position: 'absolute',
        right: 5,
        bottom: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.GRAY,
        paddingVertical: 5
    },
    optionContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        borderTopWidth: 0.5
    }
});

export default BookingCard;
