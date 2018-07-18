import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { Avatar } from '../../components';

class PostCard extends Component {
  render() {
    const { data } = this.props;
    const { navigation: { navigate } } = this.props;

    if (!data) return null; 
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={.7} onPress={() => navigate('PersonalHomepage')}>
          <View style={styles.header}>
            <Avatar size={45} />
            <View style={styles.author}>
              <Text style={styles.name}>{data.author.nickname}</Text>
              <Text style={styles.time}>{moment(data.created_at).fromNow()}</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={.7} onPress={() => navigate('PostDetails')}>
          <View style={styles.content}>
            <Text style={styles.contentText}>
              {data.content}
            </Text>
          </View>

          {
            data.reference
              &&  <View style={styles.referenceWrap}>
                    <Text>
                      @{data.reference.author.nickname}: 
                    </Text>
                    <Text>
                      {data.reference.content}
                    </Text>
                  </View>
          }
          
        </TouchableOpacity>

        <View style={styles.operating}>
          {/* 收藏 */}
          <TouchableOpacity style={styles.operatingWrap} activeOpacity={.7}>
            <View style={styles.operatingInner}>
              {
                data.collection === 0
                  ? <Icon size={20} name="star-o" />
                  : <Icon size={18} color="#FFD700" name="star" />
              }
            </View>
          </TouchableOpacity>

          {/* 点赞 */}
          <TouchableOpacity style={styles.operatingWrap} activeOpacity={.7}>
            <View style={styles.operatingInner}>
              {
                data.like === 0
                  ? <Icon size={18} name="heart-o" /> 
                  : <Icon size={18} color="#f00" name="heart" />
              }
            </View>
          </TouchableOpacity>

          {/* 评论 */}
          <TouchableOpacity  style={styles.operatingWrap} activeOpacity={.7} onPress={() => navigate('PostDetails')}>
            <View style={styles.operatingInner}>
              <Icon size={18} name="comment-o" />
              <Text style={styles.iconText}>
                {
                  data.reply_amount > 999 
                  ? '999+' 
                  : data.reply_amount
                }
              </Text>
            </View>
          </TouchableOpacity>

          {/* 转发 */}
          <TouchableOpacity style={styles.operatingWrap} activeOpacity={.7} onPress={() => navigate('EditPost')}>
            <View style={[styles.operatingInner, styles.iconNoBorder]}>
              <Icon size={18} name="share" />
              <Text style={styles.iconText}>
                {
                  data.reference_amount > 999 
                  ? '999+' 
                  : data.reference_amount
                }
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default withNavigation(PostCard);