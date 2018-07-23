import React, { Component, createRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { post } from 'axios';
import { ExtendModal } from '../../components';

const { width: winWidth } = Dimensions.get('window');

class UploadImage extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      modalVisible: false,
      imgSize: {
        width: 100,
      }
    };
  }

  pickByGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.uploadImage(image);
     // console.log(image);
      this.setState({
        images: this.state.images.concat(image),
      });
    });
    this.closePick();
  }

  pickByCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.uploadImage(image);
     // console.log(image);
    });
    this.closePick();
  }

  pickImage = () => {
    this.setState({
      modalVisible: true,
    });
  }

  closePick = () => {
    this.setState({
      modalVisible: false,
    });
  }

  onLayout = (e) => {
    const { width } = e.nativeEvent.layout;
    
    this.setState({
      imgSize: {
        width: width / 3,
      }
    });
  }

  uploadImage = async (image) => {
    const photo = new FormData();

    photo.append('photo', {
      uri: image.path,
      name: 'a.jpg',
      filename: 'a.jpg',
      type: image.mime,
    });

    try {
      const { data } = await post(
        '/api/v1/auth/images?type=photo',
        photo,
        {
          headers: {
            'Content-Type':'multipart/form-data',
          }
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { bottom, images, imgSize, modalVisible } = this.state;

    return (
      <View style={{ flex: 1 }} onLayout={this.onLayout}>
        <View style={styles.imgList}>
          {
            images.map((image, i) => (
              <Image
                key={image.path}
                style={{
                  width: imgSize.width,
                  height: imgSize.width,
                }}
                source={{uri: image.path}}
              />
            ))
          }
          {
            images.length < 9 && 
              <TouchableOpacity activeOpacity={.7} onPress={this.pickImage}>
                <View style={[styles.addImg, { width: imgSize.width, height: imgSize.width }]}>
                  <Icon name="add" size={imgSize.width / 2} />
                </View>
              </TouchableOpacity>
          }
        </View>
        
        <ExtendModal
          position='bottom'
          visible={modalVisible}
        >
          <View style={styles.pickType}>
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
        </ExtendModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgList: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  addImg: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'dotted',
    alignSelf: 'flex-start',
  },
  pickType: {
    height: 150,
    width: winWidth,
    backgroundColor: '#ECEFF1',
    zIndex: 10,
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
