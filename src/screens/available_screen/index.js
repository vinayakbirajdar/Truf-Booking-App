import React, { useState } from "react";
import { FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import CustomSearchBar from "../../component/serach_bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const sportOptions = [
    { id: '1', name: 'All Sports' },
    { id: '2', name: 'Football' },
    { id: '3', name: 'Circket' },
    { id: '4', name: 'Voleyball' },
    { id: '5', name: 'Football' },
]
const AvailableScreen = () => {
    const [selectedSportId, setSelectedSportId] = useState(null);
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 14, marginTop: 5 }}>
            <CustomSearchBar
                placeholder="Search Trufs by name"
            />
            <View >
                <FlatList
                    data={sportOptions}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setSelectedSportId(item.id)}
                            style={{
                                marginRight: 10,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: selectedSportId === item.id ? 'black' : 'white',
                                borderRadius: 10
                            }}
                        >
                            <Text style={{ color: selectedSportId === item.id ? 'white' : 'black', fontSize: 14 }}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={{ marginTop: 10 }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>All Trufs</Text>
                    <TouchableOpacity >
                        <Icon name='filter' size={30} />
                    </TouchableOpacity>

                </View>

            </View>


        </SafeAreaView>
    )

}
export default AvailableScreen;