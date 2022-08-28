import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Linking } from 'react-native';


export default Footer = ({ navigation }) => {

    return (
        <View style={styles.views}>
            <TouchableOpacity
                onPress={() => navigation.navigate("About")}>
                <Image
                    style={{ width: 35, height: 35 }}
                    source={require('../images/information-button.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Linking.openURL("whatsapp://send?text=Hello Shalaby&phone=+2001289903629")}>
                <Image
                    style={{ width: 35, height: 35 }}
                    source={require('../images/whatsapp.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}>
                <Image
                    style={{ width: 35, height: 35 }}
                    source={require('../images/house.png')}
                />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    views: {
        flexShrink: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "blue",
        padding: 12
    }
})