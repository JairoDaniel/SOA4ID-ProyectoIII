import React from 'react'
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  FlatList
} from 'react-native'

import Fondo from '../../assets/imagenes/fondo.jpg'

export default class Historial extends React.Component {
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
                    source={require('../../assets/lottery.png')}
                  />{' '}
                  19/11/2019-19:00 -> Nacional: ₡500 al 98
                </Text>
                <Text style={styles.paragraph}>
                  <Image
                    style={styles.logo}
                    source={require('../../assets/lottery.png')}
                  />{' '}
                  20/11/2019-13:00 -> Panameña: ₡500 al 68
                </Text>
                <Text style={styles.paragraph}>
                  <Image
                    style={styles.logo}
                    source={require('../../assets/lottery.png')}
                  />{' '}
                  19/11/2019-19:00 -> Nacional: ₡500 al 98
                </Text>
                <Text style={styles.paragraph}>
                  <Image
                    style={styles.logo}
                    source={require('../../assets/lottery.png')}
                  />{' '}
                  20/11/2019-13:00 -> Panameña: ₡500 al 68
                </Text>
                <Text style={styles.paragraph}>
                  <Image
                    style={styles.logo}
                    source={require('../../assets/lottery.png')}
                  />{' '}
                  19/11/2019-19:00 -> Nacional: ₡500 al 98
                </Text>
                <Text style={styles.paragraph}>
                  <Image
                    style={styles.logo}
                    source={require('../../assets/lottery.png')}
                  />{' '}
                  20/11/2019-13:00 -> Panameña: ₡500 al 68
                </Text>
              </View>
            )}
            // Setting the number of column
            numColumns={2}
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
    flex: 1
  },
  paragraph: {
    marginLeft: 30,
    marginVertical: 40,
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
    height: 35,
    width: 35,
    marginRight: 50
  }
})
