import React from "react";
import { Text, View, SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text style={{ color: 'black' }}>
          Hello World!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;