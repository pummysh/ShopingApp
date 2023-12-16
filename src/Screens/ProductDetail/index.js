import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCTTYPES } from '../../redux/configs/types';
import { NavigationKeys } from '../../navigation/constants';

export const ProductDetail = ({route}) => {
  const {cart}=useSelector(state=>state);
  const productDetail = route.params.productDetail;
  const dispatch = useDispatch();

  const [currentSlide, setCurrentSlide] = useState(0);
  const navigation=useNavigation()

  useEffect(() => {
    setTimeout(() => {
      console.log('ksjdnk');
      if (productDetail.images.length === currentSlide + 1) {
        setCurrentSlide(0);
        console.log('0');
      } else {
        setCurrentSlide(currentSlide + 1);
        console.log(currentSlide + 1);
      }
    }, 5000);
  }, [currentSlide]);

  const handleAddTocart = () => {
    dispatch({
      type: PRODUCTTYPES.ADD_TO_CART,
      payload: productDetail,
    });
  };


  return (
    <View style={styles.container}>
      {/* backIcon.png */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image
          source={require('../../assets/images/backIcon.png')}
          style={{width: 40, height: 40}}
          resizeMode="contain"
        />
        </TouchableOpacity>
        <View style={styles.cartcontainer}>
          <Image
            source={require('../../assets/images/blackCart.png')}
            style={styles.cartImage}
          />
         {cart.length>0 && <View style={styles.cartNumberContainer}>
            <Text style={styles.cartNumberText}>{
              cart.length
            }</Text>
          </View>}
        </View>
      </View>

      <Text
        style={{
          fontSize: 50,
          fontWeight: '800',
          color: '#1E222B',
          marginHorizontal: 20,
          marginBottom: 12,
        }}>
        {productDetail.title}
      </Text>
      <View style={styles.imagesContainer}>
        <Image
          source={{uri: productDetail.images[currentSlide]}}
          style={styles.images}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          marginTop: 26,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: '#2A4BA0',
            marginHorizontal: 20,
          }}>{`$${productDetail.price}`}</Text>
        <View
          style={{
            backgroundColor: '#2A4BA0',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            alignContent: 'center',
            paddingVertical: 4,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: '#FAFBFD',
            }}>{`$${productDetail.discountPercentage}% OFF`}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          marginTop: 26,
          marginHorizontal:20
        }}>
        <TouchableOpacity
          onPress={handleAddTocart}
          style={{
            borderColor: '#2A4BA0',
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            alignContent: 'center',
            paddingVertical: 4,
            marginRight: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: '#2A4BA0',
              marginHorizontal: 20,
            }}>{`Add To Cart`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate(NavigationKeys.screen.CartScreen)}
          style={{
            backgroundColor: '#2A4BA0',
            borderRadius: 20,
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderColor: '#2A4BA0',
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            alignContent: 'center',
            paddingVertical: 4,
            marginRight: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: '#FAFBFD',
            }}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.primary.screenBackgroundColor,
    flex: 1,
  },
  imagesContainer: {},
  images: {
    width: 375,
    height: 207,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 21,
  },
  cartcontainer: {},
  cartImage: {
    height: 18,
    width: 16,
  },
  cartNumberContainer: {
    width: 24,
    height: 24,
    backgroundColor: '#F9B023',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    top: -20,
    // right: -10,
    // borderWidth: 2,
    // borderColor: '##2A4BA0',
  },
  cartNumberText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
