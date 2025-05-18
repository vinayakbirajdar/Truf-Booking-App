import React, { useState } from "react";
import { FlatList, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import CustomSearchBar from "../../component/serach_bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TrufCards from "../../component/truf_card";
import appStyles from "../../common/styles/app_style";

const sportOptions = [
    { id: '1', name: 'All Sports' },
    { id: '2', name: 'Football' },
    { id: '3', name: 'Circket' },
    { id: '4', name: 'Voleyball' },
    { id: '5', name: 'Hockey' },
    { id: '6', name: 'Tennis' },
    { id: '7', name: 'Kabaddi' },
];

const trufList = [
    {
        id: '1',
        name: 'VB Trufs',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aVmnK3sROW9rUU8JhHqhKFjgiUYScMSV6w&s',
        price: '500',
        location: 'Pune',
        feedback: '4.5',
        sports: ['All Sports', 'Hockey', 'Tennis']
    },
    {
        id: '2',
        name: 'Green Field',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7bHtbXiYFs2kirnkQyOqx1pDhL5ne7UetA&s',
        price: '600',
        location: 'Mumbai',
        feedback: '1.7',
        sports: ['Football', 'Circket', 'Kabaddi']
    }, {
        id: '3',
        name: 'Green Field',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/017/046/997/small/cheering-banner-football-vector.jpg',
        price: '600',
        location: 'Mumbai',
        feedback: '4.7',
        sports: ['Voleyball', 'Tennis']
    }, {
        id: '4',
        name: 'Green Field',
        image: 'https://i.pinimg.com/736x/2a/90/06/2a9006a312e04aeb7d65c4a590304650.jpg',
        price: '600',
        location: 'Mumbai',
        feedback: '2.5',
        sports: ['Football', 'Voleyball', 'Hockey', 'Kabaddi']
    }
];
const AvailableScreen = () => {
    const [selectedSports, setSelectedSports] = useState('All Sports')

    const filteredTrufs = selectedSports === 'All Sports' ? trufList : trufList.filter(truf =>
        truf.sports.includes(selectedSports)
    )
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 14, marginTop: 5 }}>
            <CustomSearchBar
                placeholder="Search Trufs by name"
                on
            />
            <ScrollView >
                <FlatList
                    data={sportOptions}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setSelectedSports(item.name)}
                            style={{
                                marginRight: 10,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: selectedSports === item.name ? 'black' : 'white',
                                borderRadius: 10
                            }}
                        >
                            <Text style={{ color: selectedSports === item.name ? 'white' : 'black', fontSize: 14, ...appStyles.FONT_REGULAR }}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={{ marginTop: 10 }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ ...appStyles.lable }}>All Trufs</Text>
                    <TouchableOpacity >
                        <Icon name='filter' size={30} />
                    </TouchableOpacity>
                </View>

                {filteredTrufs.map((truf) => (
                    <TrufCards
                        key={truf.id}
                        name={truf.name}
                        image={truf.image}
                        price={truf.price}
                        location={truf.location}
                        feedback={truf.feedback}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )

}
export default AvailableScreen;