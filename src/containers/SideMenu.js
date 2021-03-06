import React, { Component } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Avatar, Divider } from '../components';

class SideMenu extends Component {
  
  loginOut = async () => {
    try {
      this.props.navigation.navigate('Login');
      await this.props.clearUserInfo();
    } catch (err) {
      // pass
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { openDrawer, userInfo } = this.props;

    if (userInfo === null) {
      return null;
    }

    return (
      <ScrollView style={styles.container}>
         <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.card}>
          <Avatar onPress={openDrawer} />
          <Text style={styles.name}>
            {userInfo.nickname}
          </Text>
          <View style={{ paddingRight: 12 }}>
            <Text style={styles.intro}>
              {userInfo.personal_intro}
            </Text>
          </View>
          <Text style={styles.follow}>
            {userInfo.follow_amount} 正在关注 {userInfo.fans_amount} 关注者
          </Text>
        </View>
        <Divider />
        <View>
          <TouchableOpacity activeOpacity={.7} onPress={() => navigate('PersonalSetting')}>
            <View style={styles.option}>
              <Icon name="mode-edit" size={18} color="#999" />
              <Text style={styles.menu}>
                个人设置
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} onPress={() => navigate('Favorites')}>
            <View style={styles.option}>
              <Icon name="grade" size={18} color="#999" />
              <Text style={styles.menu}>
                收藏夹
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} onPress={() => navigate('DraftBox')}>
            <View style={styles.option}>
              <Icon name="folder" size={18} color="#999" />
              <Text style={styles.menu}>
                草稿箱
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} onPress={() => navigate('SystemSetting')}>
            <View style={styles.option}>
              <Icon name="build" size={18} color="#999" />
              <Text style={styles.menu}>
                系统设置
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.7} onPress={() => navigate('Following')}>
            <View style={styles.option}>
              <Icon name="person-pin" size={18} color="#999" />
              <Text style={styles.menu}>
                关注的人
              </Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity activeOpacity={.7} onPress={() => navigate('PersonalHomepage')}>
            <View style={styles.option}>
              <Icon name="map" size={18} color="#999" />
              <Text style={styles.menu}>
                周边动态
              </Text>
            </View>
          </TouchableOpacity> */}
        </View>
        
        <Divider />

        <View>
          <TouchableOpacity activeOpacity={.7}>
            <View style={styles.themes}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="wb-sunny" size={18} color="#999" />
                <Text style={styles.menu}>
                夜间模式
                </Text>
              </View>
              
              <Switch />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={.7} onPress={this.loginOut}>
            <View style={styles.themes}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="exit-to-app" size={18} color="#999" />
                <Text style={styles.menu}>
                  退出
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
  }
});

const mapState = ({ userInfo }) => ({
  userInfo
});

const mapDispatch = ({ userInfo: { clearUserInfo } }) => ({
  clearUserInfo,
});

export default connect(
  mapState,
  mapDispatch,
)(SideMenu);