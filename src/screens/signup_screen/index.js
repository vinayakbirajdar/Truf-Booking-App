import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { auth } from "../../utils/firebase/firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
    const { control, handleSubmit, formState: { errors } } = useForm()
    const navigation = useNavigation()

    const onSubmit = async (data) => {
        const { email, password } = data
        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            console.log("User registered:", user);
            ToastAndroid.show("Account created successgfully please login!!", ToastAndroid.LONG)
            navigation.navigate("Login")
        } catch (error) {
            console.error("Sign-up failed:", error.message);
            Alert.alert("Sign-up Error", error.message);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.signupContainer}>
                <Text style={styles.title}>Welcome to Truf-Booking</Text>
                <Text style={styles.sub_title}>Please enter your datails to sign up.</Text>

                <Controller
                    control={control}
                    name="email"
                    rules={{ required: "Email is required" }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            placeholder="Enter Email"
                            value={value}
                            onChangeText={onChange}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            style={styles.input}
                        />
                    )}
                />
                {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            placeholder="Enter Password"
                            value={value}
                            onChangeText={onChange}
                            autoCapitalize="none"
                            style={styles.input}
                        />
                    )}
                />
                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <Text style={{ color: 'grey' }}>Do you have an account yet </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Login in?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupContainer: {
        // backgroundColor: 'white',
        padding: 20,
        width: '96%',
        borderRadius: 10,
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 15,
        borderColor: 'grey',
        width: '95%',
        marginVertical: 10,
        paddingHorizontal: 15
    },
    submitBtn: {
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '95%',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    btnText: {
        color: 'white'
    },
    title: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10

    },
    sub_title: {
        fontSize: 18,
        color: 'grey',
        marginBottom: 10

    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 20
    },
    optionView: {
        borderWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 6,
        borderRadius: 10,
        borderColor: 'lightgrey'
    }

})
export default Signup 