import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

class Card extends React.Component {

    render() {
        // const { navigation, body, key, title, img } = this.props
        return (
            <TouchableOpacity
                key={key}
                style={styles.views}
                onPress={() => navigation.navigate("Info", { img, key, body, title })}
            >
                <Image
                    style={styles.img}
                    source={{ uri: img }}
                    img={img}
                />
                <View style={{ flexShrink: 1 }}>
                    <Text style={styles.header} titl={title}>{title}</Text>
                    <Text style={styles.data} body={body}>{`${body.slice(0, 160)}.........ReadMore`}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Card

const styles = StyleSheet.create({
    views: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 10,
        marginBottom: 10
    },
    img: {
        width: 120,
        height: 200,
        borderRadius: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
    },
    data: {
        fontSize: 16,
        marginLeft: 10,
        color: "#777"
    }
})