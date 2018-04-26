import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Divider } from '../components';

class BusinessCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1, height: 100, }}
          source={{ uri: 'http://pic4.nipic.com/20090812/2990649_223718021_2.jpg' }}
        />

        <View style={styles.info}>
          <View>
          <View style={styles.avatar}>
            <Avatar size={70} />
          </View>
            <Text style={{ textAlign: 'center' }}>
              Ayanami
            </Text>
          </View>
          <View style={styles.operating}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.button}>
                <Text style={{ color: '#fff' }}>私信</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.button}>
                <Text style={{ color: '#fff' }}>正在关注</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Divider />

        <View style={styles.intro}>
          <Text style={styles.introText}>
            大多数组件在创建时就可以使用各种参数来进行定制。
            用于定制的这些参数就称为props（属性）。
          </Text>
        </View>
        
        <View style={styles.data}>
          <View style={{ marginRight: 15 }}>
            <Text>粉丝: 100</Text>
          </View>
          <View>
            <Text>关注: 100</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 5,
    elevation: 1
  },
  avatar: {
    marginTop: -35,
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 70,
  },
  operating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    backgroundColor: '#29B6F6',
    borderRadius: 20,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  intro: {
    marginLeft:15,
    marginRight: 15,
    flexWrap: 'wrap'
  },
  introText: {
    lineHeight: 18,
  },
  data: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  }
})

export default BusinessCard;
