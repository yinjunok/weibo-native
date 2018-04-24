import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from '../components';

/*
  消息类型:
    1: 回复
    2: 点赞
    3: 被转发
    4: 被关注
*/

const ReplyContent = () => (
  <View>
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="reply" size={14} style={{ marginRight: 5 }} />
        <Text>回复了你: </Text>
      </View>
      <View style={{ marginBottom: 5 }}>
        <Text style={styles.content}>
          PropTypes 包含一整套验证器，可用于确保你接收的数据是有效的。
          在这个示例中，我们使用了 PropTypes.string。
          当你给属性传递了无效值时，JavsScript 控制台将会打印警告。
          出于性能原因，propTypes 只在开发模式下进行检查。
        </Text>
      </View>
    </View>
    <View style={styles.origin}>
      <Text style={styles.content}>
        随着应用日渐庞大，你可以通过类型检查捕获大量错误。
        对于某些应用来说，你还可以使用 Flow 或 TypeScript 
        这样的 JavsScript 扩展来对整个应用程序进行类型检查。
        然而即使你不用它们，React 也有一些内置的类型检查功能。
        要检查组件的属性，你需要配置特殊的 propTypes 属性
      </Text>
    </View>
  </View>
);
// forward
const ForwardContent = () => (
  <View>
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="forward" size={14} style={{ marginRight: 5 }} />
        <Text>转发了你的微博: </Text>
      </View>
      <View style={{ marginBottom: 5 }}>
        <Text style={styles.content}>
          PropTypes 包含一整套验证器，可用于确保你接收的数据是有效的。
          在这个示例中，我们使用了 PropTypes.string。
          当你给属性传递了无效值时，JavsScript 控制台将会打印警告。
          出于性能原因，propTypes 只在开发模式下进行检查。
        </Text>
      </View>
    </View>
    <View style={styles.origin}>
      <Text style={styles.content}>
        随着应用日渐庞大，你可以通过类型检查捕获大量错误。
        对于某些应用来说，你还可以使用 Flow 或 TypeScript 
        这样的 JavsScript 扩展来对整个应用程序进行类型检查。
        然而即使你不用它们，React 也有一些内置的类型检查功能。
        要检查组件的属性，你需要配置特殊的 propTypes 属性
      </Text>
    </View>
  </View>
);

const LikeContent = () => (
  <View>
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="favorite" size={14} color="#f00" style={{ marginRight: 5 }} />
        <Text>点赞了你的微博: </Text>
      </View>
    </View>
    <View style={styles.origin}>
      <Text style={styles.content}>
        随着应用日渐庞大，你可以通过类型检查捕获大量错误。
        对于某些应用来说，你还可以使用 Flow 或 TypeScript 
        这样的 JavsScript 扩展来对整个应用程序进行类型检查。
        然而即使你不用它们，React 也有一些内置的类型检查功能。
        要检查组件的属性，你需要配置特殊的 propTypes 属性
      </Text>
    </View>
  </View>
);

const MessageCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar size={45} />
        <View style={styles.headerText}>
          <Text style={styles.name}>Ayanami</Text>
          <Text style={styles.time}>昨天 6:20</Text>
        </View>
      </View>
      <LikeContent />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  headerText: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    marginBottom: 2,
  },
  time: {
    fontSize: 12,
    color: '#666',
  },
  origin: {
    backgroundColor: '#F5F5F5',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  content: {
    lineHeight: 20,
  }
})

export default MessageCard;
