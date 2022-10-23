//react native library components 
import AppLoading from 'expo-app-loading';
import { Image, StyleSheet, Text, Platform, View, StatusBar, ImageBackground, Dimensions} from 'react-native';
//from starter code 
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { palette } from './assets/Themes/palette';
import  Profiles  from './assets/Profiles/index';
import themes from './assets/Themes/themes';

//custom components 
import  Header  from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

//to do 
//make compatible w ios + andriod 
//look to fix height/width scale issue  
// export to github

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//constants 
const headerTxt = {
  title: 'ensom',
};
const mtlData = {
  image: Profiles.mtl.image,
  name: Profiles.mtl.name,
  age: Profiles.mtl.age,
  caption: Profiles.mtl.caption,
};
const voiceMemo = {
  player: require('./assets/Icons/player_light.png'),
  waveform: require('./assets/Icons/audio_waveform_light.png'),
};
const footerIcons= {
  discover: require('./assets/Icons/discover_light.png'),
  matches: require('./assets/Icons/heart_light.png'),
  dms:require('./assets/Icons/messages_light.png'),
};

//app interface main function 
export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);

  return (
    <View style={styles.backgroundContainer}>
      
      <Header 
      headerTxt = {headerTxt.title}
      />

      <Main 
      mtlData = {mtlData}
      voiceMemo = {voiceMemo}
      />

      <Footer 
      footerIcons = {footerIcons}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  //styles for main content 
  backgroundContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: Themes.light.bg,
    
  },
  
});
