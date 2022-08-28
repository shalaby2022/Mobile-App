import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';


export default Header = ({ navigation }) => {

    return (
        <View style={styles.views}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}>
                <Image
                    style={{ width: 35, height: 35 }}
                    source={require('../images/house.png')}
                />
            </TouchableOpacity>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff' }}>Latest news</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Google")}>
                <Image
                    style={{ width: 35, height: 35 }}
                    source={require('../images/search.png')}
                />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    views: {
        flexShrink: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "blue",
        padding: 20,
    }
})