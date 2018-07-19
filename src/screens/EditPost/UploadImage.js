import React, { Component, createRef } from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';

const { width: winWidth } = Dimensions.get('window');

class UploadImage extends Component {
  constructor() {
    super();
    this.state = {
      bottom: new Animated.Value(-150),
    };
  }

  pickByGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }

  pickByCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }

  pickImage = () => {
    Animated.timing(this.state.bottom, {
      toValue: 0,
      duration: 1000,
    }).start();
  }

  closePick = () => {
    Animated.timing(this.state.bottom, {
      toValue: -150,
      duration: 1000,
    }).start();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.imgList}>
          <ScrollView horizontal>
            <TouchableOpacity activeOpacity={.7} onPress={this.pickImage}>
              <View style={styles.img}>
                <Icon name="add" size={40} />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        
        <Animated.View style={[styles.pickType, {bottom: this.state.bottom}]}>
          <TouchableOpacity activeOpacity={1} onPress={this.closePick}>
            <View style={{ height: 150, }}>
              <View style={styles.pick}>
                <TouchableOpacity activeOpacity={.7} onPress={this.pickByGallery}>
                  <View style={styles.pickText}>
                    <Icon name="photo" size={80} color="#37474F" />
                    <Text>从相册中选择</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.7} onPress={this.pickByCamera}>
                  <View style={styles.pickText}>
                    <Icon name="photo-camera" size={80} color="#37474F" />
                    <Text>现场拍一张</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgList: {
    marginBottom: 10,
  },
  img: {
    width: 80,
    height: 80,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'dotted',
  },
  pickType: {
    height: 150,
    width: winWidth,
    left: -10,
    position: 'absolute',
    backgroundColor: '#ECEFF1',
  },
  pickCloseBtn: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  pick: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pickText: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default UploadImage;
