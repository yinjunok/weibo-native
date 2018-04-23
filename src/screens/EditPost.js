import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider } from '../components';

class EditPost extends Component {
  static navigationOptions = {
    title: '发表微博'
  }

  componentDidMount() {
    // console.log('navigator', navigator.geolocation.getCurrentPosition());
    // navigator.geolocation.getCurrentPosition((...rest) => console.log(rest));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoFocus
          multiline
          maxLength={150}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="分享你的快乐吧~"
        />
        <TouchableOpacity activeOpacity={.5}>
          <View style={styles.send}>
            <Icon name="paper-plane-o" size={20} />
          </View>
        </TouchableOpacity>
        <Divider />

        <View style={styles.imgList}>
          <ScrollView horizontal>
            <TouchableOpacity activeOpacity={.7}>
              <View style={styles.img}>
                <Icon name="plus" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}>
              <View style={styles.img}>
                <Icon name="plus" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}>
              <View style={styles.img}>
                <Icon name="plus" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}>
              <View style={styles.img}>
                <Icon name="plus" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}>
              <View style={styles.img}>
                <Icon name="plus" size={40} />
              </View>
            </TouchableOpacity>
          </ScrollView>
      
          <TouchableOpacity activeOpacity={.7}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Icon name="map" size={20} />
              <Text>定位规划中.....</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    justifyContent: 'flex-start',
    height: 150,
    textAlignVertical: 'top',
  },
  send: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15
  },
  imgList: {
    marginBottom: 10,
  },
  img: {
    width: 80,
    height: 80,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'dotted',
  }
})

export default EditPost;
