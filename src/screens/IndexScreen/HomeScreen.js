import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';
import { PostCard, BusinessCard } from '../../containers';
import { Refresh } from '../../components';

class HomeScreen extends Component {
  async componentDidMount() {
    try {
      await this.props.fetchList(1);
    } catch (err) {
      // pass
    }
  }

  ListFooterComponent = () => {
    const { indexPostList } = this.props;

    if (indexPostList.loading) {
      return (
        <View style={{ paddingTop: 10, paddingBottom: 10, alignSelf: 'center' }}>
          <Spinner color="#64B5F6" size={35} type="ThreeBounce" />
        </View>
      )
    }

    if (indexPostList.list.length === indexPostList.total) {
      return (
        <View style={styles.hasMoreContainer}>
          <Text style={styles.hasMoreText}>没有更多内容了~</Text>
        </View>
      )
    }

    return null;
  }

  updateList = () => {
    const { indexPostList, fetchList } = this.props;

    // 正在载入中, 或者已经获取到全部 post, 则不执行
    if (
      indexPostList.loading || 
      indexPostList.list.length === indexPostList.total
    ) {
      return;
    }

    fetchList(indexPostList.page + 1);
  }

  render() {
    const { indexPostList } = this.props;

    return (
      <View style={styles.container}>
        <FlatList          
          data={indexPostList.list}
          onEndReachedThreshold={0.5}
          onEndReached={this.updateList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PostCard data={item} />}
          ListFooterComponent={() => this.ListFooterComponent()}
          ListHeaderComponent={() => (<View style={{ marginTop: 5 }}></View>)}
          ItemSeparatorComponent={() => <View style={{ paddingTop: 5 }}></View>}
        />
        
        <Refresh />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  hasMoreContainer:{
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  hasMoreText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  }
});

const mapState = ({ indexPostList }) => ({
  indexPostList,
});

const mapDispatch = ({ indexPostList: { fetchList } }) => ({
  fetchList,
});

export default connect(
  mapState,
  mapDispatch,
)(HomeScreen);
