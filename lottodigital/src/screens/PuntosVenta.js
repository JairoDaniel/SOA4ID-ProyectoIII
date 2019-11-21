import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native'

import Fondo from '../../assets/imagenes/fondo.jpg'
import Icono from '../../assets/storeUnlock.jpg'
import Icono2 from '../../assets/storeLock.jpg'

export default class PuntosVenta extends Component {
  constructor () {
    super()
    this.state = {
      dataSource: {}
    }
  }
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
                        ? () => this.props.navigation.navigate('Juegos')
                        : () => this.props.navigation.navigate('PuntosVenta')
                    }
                  >
                    <Image
                      style={styles.logo}
                      source={item.id == 0 ? Icono : { uri: item.src }}
                    />
                    <Text style={styles.paragraph}> #6 </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.logo}
                      source={item.id == 0 ? Icono2 : { uri: item.src }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <TouchableOpacity>
                    <Image
                      style={styles.logo}
                      source={item.id == 0 ? Icono2 : { uri: item.src }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.logo}
                      source={item.id == 0 ? Icono2 : { uri: item.src }}
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

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30
  },
  paragraph: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5FFF0F'
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
