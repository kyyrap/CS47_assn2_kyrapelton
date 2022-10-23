import { Image, StyleSheet, Text, Platform, View, StatusBar, ImageBackground, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from '../assets/Themes';
import { palette } from '../assets/Themes/palette';
import  Profiles  from '../assets/Profiles/index';


const Footer = ({footerIcons}) => {

    return (
        <View style = {styles.footer}>
        <View style = {styles.footerElements}>
          <Image
          source = {footerIcons.discover}
          style = {styles.footerPic}
          />
          <Text style={styles.footerTxt}>Discover</Text>
        </View>
        <View style = {styles.footerElements}>
          <Image
          source = {footerIcons.matches}
          style = {styles.footerPic}
          />
          <Text style={styles.footerTxt}>Matches</Text>
        </View>
        <View style = {styles.footerElements}>
          <Image
          source = {footerIcons.dms}
          style = {styles.footerPic}
          />
          <Text style={styles.footerTxt}> DMs </Text>
        </View>

      </View>
        
    );
};



export default Footer;

//style object
const styles = StyleSheet.create({
    footer: {
        backgroundColor: Themes.light.navigation,
        //the ~54px on Android and ~41px on iOS looks really weird on my ios display
        //it looks wayy too small, so increased the size 
        ...Platform.select({
            ios: {
              height: 60,
            },
            android: {
              backgroundColor: 65,
            },
        }),
        //height: 80,
        width: '100%',
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
      },
    
      //from shadows theme given to us! 
      shadows: {
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
      },
    
      footerElements: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
    
      footerPic: {
        height: 30,
        width: 30,
      },
    
      footerTxt: {
        fontFamily: 'Sydney', 
        color: Themes.light.textSecondary,
        fontSize: 15,
      }
      
    });
