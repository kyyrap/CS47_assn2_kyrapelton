import { Image, StyleSheet, Text, Platform, View, StatusBar, ImageBackground, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from '../assets/Themes';
import { palette } from '../assets/Themes/palette';
import  Profiles  from '../assets/Profiles/index';




const Main = ({mtlData, voiceMemo}) => {

    return(
        <View style={[styles.profileContainer, styles.shadows]}> 

            <ImageBackground source={mtlData.image} 
                imageStyle = {styles.profImageStyle}
                style={styles.profileImage}>
                <Text style={styles.nameTxt}>{mtlData.name}
                </Text>
                <Text style={styles.captionTxt}>{mtlData.caption}
                </Text>
            </ImageBackground>

            <View style= {styles.whiteContainer}>
                <Text style={styles.hottestTakeTxt}>My Hottest Take</Text>
                <View style = {styles.audio}>
                    <Image
                        source = {voiceMemo.player}
                        style = {styles.playerStyle}
                        />
                    <Image
                        source = {voiceMemo.waveform}
                        style = {styles.waveformStyle}
                        />
                </View>
            </View>
      </View>
    );
    
};

export default Main;

//style object
const styles = StyleSheet.create({

    profileContainer: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 25,
    },

    profImageStyle: {
        borderRadius: 5,
    },

    shadows: {
        shadowColor:Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },

    profileImage: {
        display: 'flex',
        justifyContent: 'space-between',
        //aspect ratio: 1:1.1
        height: 330,
        width: 300,
        marginBottom: 25,

    },

    nameTxt: {
        fontFamily: 'Sydney', 
        color: Themes.light.textSecondary,
        fontSize: 30,
        marginLeft: 10,
        marginTop: 5,
    
    },

    captionTxt: {
        fontFamily: 'Sydney', 
        color: Themes.light.textSecondary,
        fontSize: 15,
        margin: 10,
    
    },

    whiteContainer: {
        display: 'flex',
        backgroundColor: palette.white,
        justifyContent: 'space-evenly',
        borderRadius: 25,
        height: 110,
        width: 300,
        padding:15,

    },

    hottestTakeTxt: {
        fontFamily: 'Sydney', 
        color: Themes.light.text,
        fontSize: 20,
        marginBottom: 10,
        
    },

    playerStyle: {
        height: 45,
        width: 45,
    },

    waveformStyle: {
        height: 30,
        width: 200,
    },


    audio: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

});