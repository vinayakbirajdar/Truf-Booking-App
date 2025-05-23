import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import CustomSearchBar from "../../component/serach_bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TrufCards from "../../component/truf_card";
import appStyles from "../../common/styles/app_style";
import firestore from '@react-native-firebase/firestore';
import TrufCardSkeleton from "../../component/shimmer_effects/truf_skeleton";
import FilterModal from "../../component/filter_modal";
import { useNavigation } from "@react-navigation/native";

const sportOptions = [
    { id: '1', name: 'All Sports' },
    { id: '2', name: 'Football' },
    { id: '3', name: 'Cricket' },
    { id: '4', name: 'Voleyball' },
    { id: '5', name: 'Hockey' },
    { id: '6', name: 'Tennis' },
    { id: '7', name: 'Kabaddi' },
];
const AvailableScreen = () => {
    const [selectedSports, setSelectedSports] = useState('All Sports')
    const [trufs, setTrufs] = useState([])
    const [loader, setLoader] = useState(false)
    const [filterShow, setFilterShow] = useState(false)
    const navigation = useNavigation()

    useEffect(() => {
        setLoader(true)
        const trufLists = async () => {
            try {
                const snapshot = await firestore().collection('trufs').get();
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setTrufs(data);
                console.log("response data ", data);
                setLoader(false)
            } catch (error) {
                console.error('Error fetching trufs:', error);
                setLoader(false)
            }
        }
        trufLists()
    }, []);

    const filteredTrufs = selectedSports === "All Sports" ? trufs : trufs.filter(truf =>
        truf.sports && truf.sports.includes(selectedSports)
    );
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 14, marginTop: 5 }}>
            <CustomSearchBar
                placeholder="Search Trufs by name" />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
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
                    <TouchableOpacity onPress={() => setFilterShow(true)}>
                        <Icon name='filter' size={30} />
                    </TouchableOpacity>
                </View>
                {loader ? <TrufCardSkeleton /> : (

                    filteredTrufs.map((truf) => (
                        <TrufCards
                            key={truf.id}
                            name={truf.name}
                            image={truf.truf_image}
                            price={truf.price}
                            location={truf.location}
                            feedback={truf.feedback}
                            {...truf}
                            navigation={navigation}
                        />
                    ))
                )}
                <FilterModal visible={filterShow} onClose={() => setFilterShow(false)} />
            </ScrollView>
        </SafeAreaView>
    )

}
export default AvailableScreen;