

import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const TrufCardSkeleton = () => {
    return (
        <>
            {Array.from({ length: 7 }).map((_, index) => (
                <View key={index} style={styles.card}>
                    <ShimmerPlaceHolder style={styles.image} autoRun />
                    <View style={styles.textContainer}>
                        <ShimmerPlaceHolder style={styles.line} autoRun />
                        <ShimmerPlaceHolder style={styles.lineShort} autoRun />
                        <ShimmerPlaceHolder style={styles.lineTiny} autoRun />
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
        padding: 20,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 10
    },
    textContainer: {
        paddingHorizontal: 5
    },
    line: {
        height: 15,
        borderRadius: 4,
        marginBottom: 8,
        width: '80%'
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

export default TrufCardSkeleton;