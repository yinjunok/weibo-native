import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import { Avatar } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';

class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar size={45} />
          <View style={styles.author}>
            <Text style={styles.name}>Ayamami</Text>
            <Text style={styles.time}>昨天 18:20</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            随着应用日渐庞大，你可以通过类型检查捕获大量错误。
            对于某些应用来说，你还可以使用 Flow 或 TypeScript 
            这样的 JavsScript 扩展来对整个应用程序进行类型检查。
            然而即使你不用它们，React 也有一些内置的类型检查功能。
            要检查组件的属性，你需要配置特殊的 propTypes 属性
          </Text>
        </View>
        <View style={styles.operating}>
          <View style={styles.icon}>
            {/* <Icon name="heart-o" /> */}
            <Icon size={18} name="heart" />
          </View>
          <View style={styles.icon}>
            {/* <Icon size={20} name="star" /> */}
            <Icon size={18} name="star-o" />
          </View>
          <View style={styles.icon}>
            <Icon size={18} name="comment-o" />
            <Text style={styles.iconText}>999</Text>
          </View>
          <View style={styles.icon}>
            <Icon size={18} name="share" />
            <Text style={styles.iconText}>999</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  time: {
    fontSize: 12,
  },
  author: {
    marginLeft: 10,
  },
  content: {
    marginTop: 12,
    marginBottom: 12,
  },
  contentText: {
    fontSize: 14,
    lineHeight: 21,
  },
  operating: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 3,
  },
  icon: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  iconText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 5,
  }
});

export default PostCard;