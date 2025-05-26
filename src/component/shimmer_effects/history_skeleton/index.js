

import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const HistorySkeleton = () => {
    return (
        <>
            {Array.from({ length: 7 }).map((_, index) => (
                <View key={index} style={styles.card}>
                    <View style={{ flexDirection: 'row', columnGap: 5 }}>
                        <ShimmerPlaceHolder style={styles.image} autoRun />
                        <View>
                            <ShimmerPlaceHolder style={styles.line} autoRun />
                            <ShimmerPlaceHolder style={styles.lineShort} autoRun />
                            <ShimmerPlaceHolder style={styles.lineTiny} autoRun />
                        </View>
                    </View>
                </View>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
        padding: 15,
        justifyContent: 'center'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 8,
        marginBottom: 10
    },
    line: {
        height: 15,
        borderRadius: 4,
        marginBottom: 8,
        width: '100%'
    },
    lineShort: {
        height: 15,
        borderRadius: 4,
        marginBottom: 8,
        width: '60%'
    },
    lineTiny: {
        height: 15,
        borderRadius: 4,
        width: '40%'
    }
});

export default HistorySkeleton;