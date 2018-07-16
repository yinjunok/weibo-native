import React, { Component } from 'react';
import {
  View,
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
    console.log('aaa');
    try {
      await this.props.fetchList(1);
    } catch (err) {
      // pass
    }
  }

  updateList = () => {
    
  }

  render() {
    const { indexPostList } = this.props;
    return (
      <View style={styles.container}>
        {/* {
          indexPostList.loading
            && <View style={{ paddingTop: 50, alignSelf: 'center' }}>
                <Spinner color="#64B5F6" size={50} type="ThreeBounce" />
               </View>
        } */}
        <FlatList
          refreshing={indexPostList.loading}
          keyExtractor={(item) => item.id.toString()}
          data={this.props.indexPostList.list}
          renderItem={({ item }) => <PostCard data={item} />}
          ListHeaderComponent={() => <View style={{ marginTop: 5 }}></View>}
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
