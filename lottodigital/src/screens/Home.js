/**
 * @author Jairo Ortega Calderón
 * @version 1.0
 * @date 21-11-2019
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native'

import * as firebase from 'firebase'

import Fondo from '../../assets/imagenes/fondo.jpg'
import Icono1 from '../../assets/historial.png'
import Icono2 from '../../assets/lottery.png'
import Icono3 from '../../assets/perfil.png'
import Icono4 from '../../assets/exit.png'

/**
 * @class Clase para generar la ventana de los puntos de venta
 */
export default class PuntosVenta extends Component {
  constructor () {
    super()
    this.state = {
      dataSource: {}
    }
  }
  
  /**
   * Método salir de Firebase
   */
  signOutUser = () => {
    firebase.auth().signOut()
  }
  //Método para montar externos
  componentDidMount () {
    var that = this
    let items = Array.apply(null, Array(1)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) }
    })
    that.setState({
      // Setting the data source
      dataSource: items
    })
  }
  render () {
    /**
      * ImageBackground:Imagen de fondo en la ventana
      * FlatList: Crea un elemento "Matriz" para insertar los puntos de venta bloqueados y desbloqueados 
      */
    return (
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.MainContainer}>
          <FlatList
            paddingTop={150}
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={
                      item.id == 0
                        ? () => this.props.navigation.navigate('Historial')
                        : () => this.props.navigation.navigate('Home')
                    }
                  >
                    <Image
                      style={styles.logo}
                      source={item.id == 0 ? Icono1 : { uri: item.src }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={
                      item.id == 0
                        ? () => this.props.navigation.navigate('PuntosVenta')
                        : () => this.props.navigation.navigate('Home')
                    }
                  >
                    <Image
                      style={styles.logo}
                      source={item.id == 0 ? Icono2 : { uri: item.src }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={
                      item.id == 0
                        ? () => this.props.navigation.navigate('Perfil')
                        : () => this.props.navigation.navigate('Home')
                    }
                  >
                    <Image
                      style={styles.logo}
                      source={item.id == 0 ? Icono3 : { uri: item.src }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.signOutUser}>
                    <Image
                      style={styles.logo}
                      source={item.id == 0 ? Icono4 : { uri: item.src }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            numColumns={2}
            numRows={2}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ImageBackground>
    )
  }
}
/**
 * Estilos para darle formato a la ventana
 */
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30
  },
  imageBack: {
    width: '100%',
    height: '100%'
  },
  logo: {
    height: 100,
    width: 100,
    marginHorizontal: 50,
    marginVertical: 15
  }
})
