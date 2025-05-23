import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import appStyles from "../../../../common/styles/app_style";

const TrufInfo = () => {
    const route = useRoute();
    const { id, name, image, location, price, feedback } = route.params;

    return (
        <ScrollView style={{ flex: 1, }}>
            <View>
                <Image source={{ uri: image }} style={styles.image} />
                <TouchableOpacity style={styles.backBtn}>
                    <Icon name="chevron-back" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <View style={styles.headingOverlay}>
                    <Text style={styles.headingText}>{name}</Text>
                </View>
                <View style={styles.content}>
                    <View style={{ marginTop: 10, }}>
                        <View style={styles.feedbackContainer}>
                            {/* <Icon name="star" color={feedback >= 2 ? 'red' : 'green'} size={25} /> */}
                            <Image source={
                                feedback > 2
                                    ? require('../../../../../assets/goodRate.png')
                                    : require('../../../../../assets/badRate.png')
                            }
                                style={{ height: 20, width: 20 }}
                            />
                            <Text style={styles.feedbackText}>{feedback}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>


    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    card: {
        flex: 1,
        backgroundColor: "white",
        marginTop: -20,
        marginHorizontal: 4,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 20,
    },
    content: {
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
        letterSpacing: 0.5,
    },
    detail: {
        fontSize: 16,
        marginBottom: 6,
        letterSpacing: 0.3,
        fontWeight: "400",
    },
    backBtn: {
        backgroundColor: 'black',
        borderRadius: 40,
        width: 40,
        alignItems: 'center',
        position: 'absolute',
        top: 40,
        left: 16
    },
    headingOverlay: {
        position: 'absolute',
        top: -15,
        width: '112%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: 'black',
        paddingHorizontal: 90,
        paddingVertical: 10,
        borderRadius: 20,
    },
    feedbackText: {
        fontSize: 22,
        color: 'black',
        ...appStyles.FONT_BOLD
    },
    feedbackContainer: {
        alignItems: 'center',
        flexDirection: 'row', columnGap: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: 60, paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 10
    }
});

export default TrufInfo;