/**
 * @author Jairo Ortega Calderón
 * @version 1.0
 * @date 21-11-2019
 */
import * as React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList
} from 'react-native'

import Fondo from '../../assets/imagenes/fondo.jpg'

/**
 * @class Clase para generar la ventana del perfil de usuario
 */
export default class Perfil extends React.Component {
  constructor () {
    super()
    this.state = {
      dataSource: {},
      nombre: 'Juan',
      apellido: 'Pérez',
      cedula: '33333333',
      contrasena: 'Abcde23.23',
      carteraVirtual: '4500'
    }
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
      * FlatList: Crea un elemento "Matriz" para poner las opciones del usuario
      * TouchableOpacity: Botón
      */
    return (
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.MainContainer}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  marginTop: 100,
                  marginBottom: 15
                }}
              >
                <Text style={styles.paragraph}>
                  <Image
                    style={styles.logo}
                    source={require('../../assets/perfil.png')}
                  />{' '}
                  Nombre: {this.state.nombre}
                </Text>
                <Text style={styles.paragraph}>
                  <Image
                    style={styles.logo}
                    source={require('../../assets/perfil.png')}
                  />{' '}
                  Apellido: {this.state.apellido}
                </Text>
                <Text style={styles.paragraph}>
                  <Image
                    style={styles.logo}
                    source={require('../../assets/id.png')}
                  />{' '}
                  Cédula: {this.state.cedula}
                </Text>
                <Text style={styles.paragraph}>
                  <Image
                    style={styles.logo}
                    source={require('../../assets/password.jpg')}
                  />{' '}
                  Contraseña: {this.state.contrasena}
                </Text>
                <Text style={styles.paragraph}>
                  <Image
                    style={styles.logo}
                    source={require('../../assets/money.jpg')}
                  />{' '}
                  Cartera virtual: ₡{this.state.carteraVirtual}
                </Text>
              </View>
            )}
            numColumns={6}
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
  paragraph: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5FFF0F'
  },
  password: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
    backgroundColor: '#ecf0f1'
  },
  imageBack: {
    width: '100%',
    height: '100%'
  },
  logo: {
    height: 30,
    width: 30,
    marginRight: 50
  }
})
