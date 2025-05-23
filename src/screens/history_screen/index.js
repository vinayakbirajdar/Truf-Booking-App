import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import CurrentScreen from "./current_screen";
import PastScreen from "./past_screen";
import { SafeAreaView } from "react-native-safe-area-context";

const renderScene = SceneMap({
    current: CurrentScreen,
    past: PastScreen,
});

const HistoryScreen = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'current', title: 'Current Bookings' },
        { key: 'past', title: 'Past Bookings' },
    ]);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: 'black' }}
                        style={{ backgroundColor: 'white', height: 50 }}
                        activeColor="black"
                        inactiveColor="gray"
                    />
                )}
            />
        </SafeAreaView>

    );
};

export default HistoryScreen;