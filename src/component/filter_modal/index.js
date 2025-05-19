

// import React, { useState } from 'react';
// import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import appStyles from '../../common/styles/app_style';

// const FilterModal = ({ visible, onClose, onApply }) => {
//     const [selectedSport, setSelectedSport] = useState('All Sports');
//     const [selectedPrice, setSelectedPrice] = useState('Any');
//     const [selectedRating, setSelectedRating] = useState('Any');

//     const handleApply = () => {
//         onApply({
//             sport: selectedSport,
//             price: selectedPrice,
//             rating: selectedRating
//         });
//         onClose();
//     };

//     return (
//         <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
//             <View style={styles.overlay}>
//                 <View style={styles.modalContainer}>
//                     <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
//                         <Text style={{ ...appStyles.lable, marginBottom: 10 }}>Filter Options</Text>

//                         <TouchableOpacity onPress={onClose}>
//                             <Icon name="close" size={25} />
//                         </TouchableOpacity>
//                     </View>

//                     <Text style={styles.label}>Sport</Text>
//                     <RNPickerSelect
//                         value={selectedSport}
//                         onValueChange={setSelectedSport}
//                         items={[
//                             { label: 'All Sports', value: 'All Sports' },
//                             { label: 'Football', value: 'Football' },
//                             { label: 'Cricket', value: 'Cricket' },
//                             { label: 'Tennis', value: 'Tennis' },
//                             { label: 'Hockey', value: 'Hockey' },
//                         ]}
//                         style={pickerSelectStyles}
//                     />

//                     <Text style={styles.label}>Price</Text>
//                     <RNPickerSelect
//                         value={selectedPrice}
//                         onValueChange={setSelectedPrice}
//                         items={[
//                             { label: 'Any', value: 'Any' },
//                             { label: 'Below ₹500', value: 'below500' },
//                             { label: '₹500 - ₹700', value: '500to700' },
//                             { label: 'Above ₹700', value: 'above700' },
//                         ]}
//                         style={pickerSelectStyles}
//                     />

//                     <Text style={styles.label}>Rating</Text>
//                     <RNPickerSelect
//                         value={selectedRating}
//                         onValueChange={setSelectedRating}
//                         items={[
//                             { label: 'Any', value: 'Any' },
//                             { label: 'Above 3.0', value: 'above3' },
//                             { label: 'Above 4.0', value: 'above4' },
//                             { label: 'Above 4.5', value: 'above4.5' },
//                         ]}
//                         style={pickerSelectStyles}
//                     />

//                     <TouchableOpacity style={{ ...appStyles.submitBtn }} onPress={handleApply}>
//                         <Text style={{ ...appStyles.submitText }}>Apply Filters</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </Modal>
//     );
// };

// const styles = StyleSheet.create({
//     overlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0,0,0,0.5)',
//         justifyContent: 'flex-end',
//     },
//     modalContainer: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 20,
//     },
//     label: {
//         marginVertical: 10,
//         fontWeight: '600',
//         ...appStyles.FONT_REGULAR
//     },
//     applyButton: {
//         marginTop: 15,
//         backgroundColor: '#2196F3',
//         padding: 10,
//         borderRadius: 5,
//     },
//     applyText: {
//         color: '#fff',
//         textAlign: 'center',
//         fontWeight: '600',
//     },
// });

// const pickerSelectStyles = StyleSheet.create({
//     inputIOS: {
//         height: 40,
//         fontSize: 14,
//         padding: 10,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 4,
//         marginBottom: 10,
//         backgroundColor: '#f0f0f0',
//     },
//     inputAndroid: {
//         height: 60,
//         fontSize: 14,
//         ...appStyles.FONT_SEMIBOLD,
//         padding: 10,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         marginBottom: 10,
//         backgroundColor: '#f0f0f0',
//     },
// });

// export default FilterModal;

import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import appStyles from '../../common/styles/app_style';

const FilterModal = ({ visible, onClose, onApply }) => {
    const [selectedSport, setSelectedSport] = useState('All Sports');
    const [selectedPrice, setSelectedPrice] = useState('Any');
    const [selectedRating, setSelectedRating] = useState('Any');

    const handleApply = () => {
        onApply({
            sport: selectedSport,
            price: selectedPrice,
            rating: selectedRating
        });
        onClose();
    };

    return (
        <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 0.5, borderColor: 'lightgrey'
                    }}>
                        <Text style={{ ...appStyles.lable, marginBottom: 10 }}>Filter Options</Text>

                        <TouchableOpacity onPress={onClose}>
                            <Icon name="close" size={25} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.label}>Sport</Text>
                    <View style={styles.radioGroup}>
                        {['All Sports', 'Football', 'Cricket', 'Tennis', 'Hockey'].map((sport) => (
                            <TouchableOpacity
                                key={sport}
                                style={styles.radioRow}
                                onPress={() => setSelectedSport(sport)}
                            >
                                <View style={styles.radioCircle}>
                                    {selectedSport === sport && <View style={styles.selectedRb} />}
                                </View>
                                <Text style={styles.radioLabel}>{sport}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={styles.label}>Price</Text>
                    <View style={styles.radioGroup}>
                        {[
                            { label: 'Any', value: 'Any' },
                            { label: 'Below ₹500', value: 'below500' },
                            { label: '₹500 - ₹700', value: '500to700' },
                            { label: 'Above ₹700', value: 'above700' },
                        ].map(({ label, value }) => (
                            <TouchableOpacity
                                key={value}
                                style={styles.radioRow}
                                onPress={() => setSelectedPrice(value)}
                            >
                                <View style={styles.radioCircle}>
                                    {selectedPrice === value && <View style={styles.selectedRb} />}
                                </View>
                                <Text style={styles.radioLabel}>{label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={styles.label}>Rating</Text>
                    <View style={styles.radioGroup}>
                        {[
                            { label: 'Any', value: 'Any' },
                            { label: 'Above 3.0', value: 'above3' },
                            { label: 'Above 4.0', value: 'above4' },
                            { label: 'Above 4.5', value: 'above4.5' },
                        ].map(({ label, value }) => (
                            <TouchableOpacity
                                key={value}
                                style={styles.radioRow}
                                onPress={() => setSelectedRating(value)}
                            >
                                <View style={styles.radioCircle}>
                                    {selectedRating === value && <View style={styles.selectedRb} />}
                                </View>
                                <Text style={styles.radioLabel}>{label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity style={{ ...appStyles.submitBtn }} onPress={handleApply}>
                        <Text style={{ ...appStyles.submitText }}>Apply Filters</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,

    },
    label: {
        marginVertical: 10,
        fontWeight: '600',
        ...appStyles.FONT_REGULAR
    },
    applyButton: {
        marginTop: 15,
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
    },
    applyText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },
    radioGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '48%',
        marginBottom: 10
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#555',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#555'
    },
    radioLabel: {
        fontSize: 14,
        ...appStyles.FONT_REGULAR
    }
});

export default FilterModal;