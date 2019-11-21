import createStackNavigator from 'react-navigation-stack'
import {
  createAppContainer, 
  createSwitchNavigator 
} from 'react-navigation'

import * as firebase from 'firebase'

import Constants from './src/config/Constants.js'
import RegistrarScreen from './src/screens/Registrar.js'
import IngresarScreen from './src/screens/Ingresar.js'
import HomeScreen from './src/screens/Home.js'
import LoadingScreen from './src/screens/Loading.js'
import PerfilScreen from './src/screens/Perfil.js'
import HistorialScreen from './src/screens/Historial.js'
import PuntosVentaScreen from './src/screens/PuntosVenta.js'
import JuegosScreen from './src/screens/Juegos.js'
import InicialScreen from './src/screens/Inicial.js'

firebase.initializeApp(Constants.FirebaseConfig)

const appStack = createStackNavigator({
  Home: {
    navigationOptions: {
      title: 'Lotto Digital',
      headerStyle: {
        backgroundColor: '#0f1012'
      },
      headerTintColor: '#5FFF0F'
    },
    screen: HomeScreen
  },
  PuntosVenta: {
    navigationOptions: {
      title: 'Puntos de venta',
      headerStyle: {
        backgroundColor: '#0f1012'
      },
      headerTintColor: '#5FFF0F'
    },
    screen: PuntosVentaScreen
  },
  Historial: {
    navigationOptions: {
      title: 'Historial de juegos',
      headerStyle: {
        backgroundColor: '#0f1012'
      },
      headerTintColor: '#5FFF0F'
    },
    screen: HistorialScreen
  },
  Perfil: {
    navigationOptions: {
      title: 'Perfil',
      headerStyle: {
        backgroundColor: '#0f1012'
      },
      headerTintColor: '#5FFF0F'
    },
    screen: PerfilScreen
  },
  Juegos: {
    navigationOptions: {
      title: 'Juegos',
      headerStyle: {
        backgroundColor: '#0f1012'
      },
      headerTintColor: '#5FFF0F'
    },
    screen: JuegosScreen
  }
})

const authStack = createStackNavigator({
  Incial: {
    navigationOptions: {
      title: 'Lotto Digital',
      headerStyle: {
        backgroundColor: '#0f1012'
      },
      headerTintColor: '#5FFF0F'
    },
    screen: InicialScreen
  },
  Registrar: {
    navigationOptions: {
      title: 'Registrar nuevo usuario',
      headerStyle: {
        backgroundColor: '#0f1012'
      },
      headerTintColor: '#5FFF0F'
    },
    screen: RegistrarScreen
  },
  Ingresar: {
    navigationOptions: {
      title: 'Ingresar al sistema',
      headerStyle: {
        backgroundColor: '#0f1012'
      },
      headerTintColor: '#5FFF0F'
    },
    screen: IngresarScreen
  }
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: appStack,
      Auth: authStack
    },
    {
      initialRouteName: 'Loading'
    }
  )
)
