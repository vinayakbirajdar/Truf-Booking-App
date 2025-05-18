import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomSearchBar = ({ placeholder = 'Search...', data = [], onSelectItem }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (text) => {
        setSearchText(text);
        const filtered = data.filter((item) =>
            item.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const clearSearch = () => {
        setSearchText('');
        setFilteredData([]);
        Keyboard.dismiss();
    };

    return (

        <View style={styles.searchWrapper}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={searchText}
                onChangeText={handleSearch}
            />
            {searchText.length > 0 && (
                <TouchableOpacity onPress={clearSearch} style={styles.iconButton}>
                    <Icon name="close" size={25} color="red" />
                </TouchableOpacity>
            )}
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginh: 16,
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'white'

    },
    input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 8,
    },
    iconButton: {
        paddingHorizontal: 4,
    },
});

export default CustomSearchBar;