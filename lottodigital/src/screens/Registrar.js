import React from 'react'
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native'

import * as firebase from 'firebase'

import Fondo from '../../assets/imagenes/fondo.jpg'

/**
 * @class Clase para generar la ventana de registro de nuevo usuario
 *  Esta clase está basada en el taller de Firebase: https://github.com/KJeanpol/LoginReactFirebase
 */
export default class Registrar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nombre: '',
      apellido: '',
      cedula: '',
      contrasena: '',
      errorMessage: null
    }
  }

  insertUser () {
    firebase
      .database()
      .ref('cliente/' + this.state.displayName)
      .set({
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        cedula: this.state.cedula,
        contrasena: this.state.contrasena,
        carteradigital: 0
      })
  }

  _handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.cedula + '@gmail.com',
        this.state.contrasena
      )
      .then(userCredentials => {
        insertUser()
        return userCredentials.user.updateProfile({
          displayName: this.state.nombre
        })
      })
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  _newUserLog (pNombre, pApellido, pCedula, pContrasena) {
    alert(
      'Nombre: ' +
        pNombre +
        'Apellido: ' +
        pApellido +
        'Cedula:' +
        pCedula +
        'Contrasena: ' +
        pContrasena
    )
  }

  render () {

      /**
        * ImageBackground:Imagen de fondo en la ventana
        * TextInput: Entrada de datos.
        * TouchableOpacity: Botones
        */
    return (
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>Ingrese su nombre</Text>
          <TextInput
            style={styles.password}
            placeholder='Nombre'
            onChangeText={nombre => this.setState({ nombre })}
            value={this.state.nombre}
          />
          <Text style={styles.paragraph}>Ingrese su apellido</Text>
          <TextInput
            style={styles.password}
            placeholder='Apellido'
            onChangeText={apellido => this.setState({ apellido })}
            value={this.state.apellido}
          />
          <Text style={styles.paragraph}>Ingrese su número de cédula</Text>
          <TextInput
            style={styles.password}
            placeholder='Cédula'
            onChangeText={cedula => this.setState({ cedula })}
            value={this.state.cedula}
            keyboardType={'numeric'}
          />
          <Text style={styles.paragraph}>Ingrese su contraseña</Text>
          <TextInput
            style={styles.password}
            placeholder='Contraseña'
            onChangeText={contrasena => this.setState({ contrasena })}
            value={this.state.contrasena}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handleSignUp()}
          >
            <Text style={{ color: 'gray', fontWeight: '500' }}>
              {' '}
              Ingresar al sistema
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: 'center', marginTop: 32 }}
            onPress={() => this.props.navigation.navigate('Ingresar')}
          >
            <Text style={{ color: 'white', fontSize: 13 }}>
              ¿Ya tienes cuenta?
              <Text style={{ fontWeight: '500', color: '#5FFF0F' }}>
                {' '}
                Inicia Sesión
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}
/**
 * Estilos para darle formato a la ventana
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  paragraph: {
    marginTop: 30,
    fontSize: 18,
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
  button: {
    marginHorizontal: 30,
    marginVertical: 50,
    backgroundColor: '#9FE802',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
