import React from 'react';
import {View} from 'react-native';

const Card = (props) =>{
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        backgroundColor: 'rgb(219, 220, 221)',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
    }
}

export { Card };