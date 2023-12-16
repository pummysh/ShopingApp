import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {PRODUCTTYPES} from '../redux/configs/types';
import { useNavigation } from '@react-navigation/native';
import { NavigationKeys } from '../navigation/constants';

export const ProductCard = ({productDetail}) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddTocart = () => {
    dispatch({
      type: PRODUCTTYPES.ADD_TO_CART,
      payload: productDetail,
    });
  };

  const handleNavigation=()=>{
    navigation.navigate(NavigationKeys.screen.ProductDetail,{
      productDetail:productDetail
    })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <TouchableOpacity onPress={() => setLiked(prev => !prev)}>
        {liked ? (
          <Image
            source={require('../assets/images/fillHeart.png')}
            style={styles.heartImage}
          />
        ) : (
          <Image
            source={require('../assets/images/heart.png')}
            style={styles.heartImage}
          />
        )}
      </TouchableOpacity>
      <View style={styles.thumbnailContainer}>
        {productDetail?.thumbnail ? (
          <Image
            source={{uri: productDetail.thumbnail}}
            style={styles.thumbnail}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('../assets/images/galleryIcon.png')}
            style={styles.thumbnail}
            resizeMode="contain"
          />
        )}
      </View>
      <View style={styles.amountContainer}>
        <View style={{width: '70%'}}>
          <Text style={styles.priceText}>{`$${productDetail.price}`}</Text>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.titleText}>
            {productDetail.title}
          </Text>
        </View>
        <TouchableOpacity onPress={handleAddTocart}>
          <Image
            source={require('../assets/images/plucIcon.png')}
            style={styles.plusIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: '#F8F9FB',
    padding: 17,
    width: 160,
    marginBottom: 22,
    marginLeft: 4,
  },
  thumbnail: {
    width: 68,
    height: 68,
    borderRadius: 4,
  },
  heartImage: {
    width: 15,
    height: 13,
  },
  plusIcon: {
    width: 24,
    height: 24,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 46,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E222B',
  },
  titleText: {
    fontSize: 12,
    color: '#616A7D',
  },
});
