import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import { colors } from './src/global/colors'
import MainNavigator from './src/navigation/MainNavigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import AuthStack from './src/navigation/AuthStack'
import MyProfile from './src/screens/MyProfile'
import ImageSelector from './src/screens/ImageSelector'

export default function App() {


  const [fontLoaded] = useFonts(fonts)

  if(!fontLoaded){
    return null
  } 

  return (
    <>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
      <StatusBar style="light" backgroundColor={colors.green3} />
    </>
  )
}

const styles = StyleSheet.create({})
