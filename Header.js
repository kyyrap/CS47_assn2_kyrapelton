
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from '../assets/Themes';

const Header = ({headerTxt}) => {

    return (
        <View style={styles.headerContainer}> 
            <View style={styles.topRow}> 
            <Image
                source={require('../assets/Icons/menu_light.png')}
                style={styles.topIcon}
                />
            <Text
            style={styles.topTxt}>
            {headerTxt}
            </Text>
            <Image
                source = {require('../assets/Icons/sun.png')}
                style = {styles.topIcon}
                />
            </View>
        </View>
    );
};



export default Header;


//style object
const styles = StyleSheet.create({
//header text epsom style
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
},

//text 
topTxt: {
  fontFamily: 'SydneyBold', 
  color: Themes.light.text,
  fontSize: 25,

},

//menu icon
topIcon: {
    height: 40,
    width: 40,
    
},

});
