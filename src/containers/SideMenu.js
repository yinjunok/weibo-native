import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Divider } from '../components';

class SideMenu extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Avatar />
          <Text style={styles.name}>
            @Ayanami
          </Text>
          <View style={{ paddingRight: 12 }}>
            <Text style={styles.intro}>
            《新世纪福音战士》简称《EVA》，
              是日本GAINAX制作的原创电视动画作品，
              由庵野秀明导演，共26话，于1995年在东京电视网首次播放。
            </Text>
          </View>
          <Text style={styles.follow}>13 正在关注 0 关注着</Text>
        </View>
        <Divider />
        <View>
          <TouchableNativeFeedback>
            <View style={styles.option}>
              <Icon name="mode-edit" size={18} color="#999" />
              <Text style={styles.menu}>
                个人设置
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.option}>
              <Icon name="grade" size={18} color="#999" />
              <Text style={styles.menu}>
                收藏夹
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.option}>
              <Icon name="map" size={18} color="#999" />
              <Text style={styles.menu}>
                周边动态
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.option}>
              <Icon name="folder" size={18} color="#999" />
              <Text style={styles.menu}>
                草稿箱
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.option}>
              <Icon name="build" size={18} color="#999" />
              <Text style={styles.menu}>
                系统设置
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        
        <Divider />

        <View style={styles.themes}>
          <TouchableNativeFeedback>
            <View>
              <Icon name="wb-sunny" size={30} color="#999" />
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    )
  } 
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingLeft: 20,
  },
  menu: {
    paddingLeft: 20,
    fontSize: 16,
  },
  card: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  follow: {
    marginTop: 10,
  },
  name: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    color: '#000',
  },
  intro: {
    fontSize: 12,
    color: '#999',
    lineHeight: 16,
  },
  themes: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 5,
  }
})

export default SideMenu;