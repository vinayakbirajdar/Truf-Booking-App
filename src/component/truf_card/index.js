import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import appStyles from "../../common/styles/app_style";
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from "@react-navigation/native";

const TrufCards = ({ name, image, location, price, feedback }) => {
    const [favourite, setFavourite] = useState(false)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ ...appStyles.heading }}>{name}</Text>
                <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                    {favourite ? (
                        <Octicons name="heart" size={25} />
                    ) : (
                        <Octicons name="heart-fill" size={25} color={'red'} />
                    )}
                </TouchableOpacity>
            </View>

            <Image
                source={{ uri: image }}
                style={{ height: 160, width: 160, borderRadius: 10, width: '100%', marginVertical: 10 }}
            />
            <View style={styles.TrufInfo}>
                <View>
                    <Text style={{ ...appStyles.FONT_MEDIUM, fontSize: 16, fontWeight: 'bold' }}>📍{location}</Text>
                </View>
                <View>
                    <Text style={[styles.feedback, { backgroundColor: feedback <= 2 ? "#F44336" : "#4CAF50", marginBottom: 5 }]}>{feedback}</Text>
                </View>
            </View>
            <Text style={{ ...appStyles.FONT_REGULAR, fontSize: 14 }}>Price starting from ₹ {price}/hr</Text>

            <TouchableOpacity style={{ ...appStyles.submitBtn }} >
                <Text style={{ ...appStyles.submitText }}>Book</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    TrufInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    feedback: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    }
})

export default TrufCards;