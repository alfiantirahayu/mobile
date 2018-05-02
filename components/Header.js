import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = (props) => 
{
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ props.headerText }</Text>
            <Icon name='sc-telegram' type='evilicon'color='#517fa4' />
        </View>
  );
};


const styles = 
{
    viewStyle: 
    {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 10,
        position: 'center'
    },
    textStyle: 
    {
        fontSize: 25
    }
};
export default Header;