import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from '../components';

class SideMenu extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.msgCard}>
            <Avatar />
            <Text style={styles.name}>
              @Ayanami
            </Text>
            <Text style={styles.intro}>
            《新世纪福音战士》简称《EVA》，
             是日本GAINAX制作的原创电视动画作品，
             由庵野秀明导演，共26话，于1995年在东京电视网首次播放。
            </Text>
            <Text>13 正在关注 0 关注着</Text>
          </View>
        </View>
        <SafeAreaView>
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
        </SafeAreaView>
        <View style={styles.themes}>
          <TouchableNativeFeedback>
            <View>
              <Icon name="wb-sunny" size={20} color="#999" />
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
    position: 'relative',
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
    height: 230,
    paddingLeft: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  msgCard: {
    bottom: 0,
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
    lineHeight: 16
  },
  themes: {
    flex: 1,
  }
})

export default SideMenu;