import React, { Component } from 'react';
import {
  View,
  Text,
  Picker,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MessageCard } from '../../containers';
import { Refresh } from '../../components';

/*
  消息类型:
    1: 回复
    2: 点赞
    3: 被转发
    4: 被关注
*/

class MessageScreen extends Component {
  state = {
    options: 'JavaScriptJavaScriptJavaScript'
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            itemStyle={{ paddingLeft: 15, paddingRight: 15 }}
            selectedValue={this.state.options}
            onValueChange={(val) => this.setState({options: val})}>
            <Picker.Item label="全部" value="all" />
            <Picker.Item label="回复" value="reply" />
            <Picker.Item label="转发" value="forwarding" />
            <Picker.Item label="被关注" value="followed" />
            <Picker.Item label="被点赞" value="liked" />
          </Picker>
          <TouchableNativeFeedback>
            <View>
              <MessageCard />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View>
              <MessageCard />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View>
              <MessageCard />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View>
              <MessageCard />
            </View>
          </TouchableNativeFeedback>
        </ScrollView>
        <Refresh />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picker: {
    width: 120,
    alignSelf: 'flex-end',
    marginTop: 5,
  }
})

export default MessageScreen;