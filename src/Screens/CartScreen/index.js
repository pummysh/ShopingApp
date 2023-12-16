import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import theme from '../../styles/theme';
import {NavigationKeys} from '../../navigation/constants';
import {PRODUCTTYPES} from '../../redux/configs/types';

export const CartScreen = ({navigation}) => {
  const {cart} = useSelector(state => state);
  const [totalCartValue,settotalCartValue]=useState(0);
  const dispatch = useDispatch();



  useEffect(()=>{
    const cartAmount = cart.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.cartValue),
        0,
      );
      settotalCartValue(cartAmount)
  },[cart])
  console.log(totalCartValue, 'totalCartValueGG');
  const handleCheckout = () => {
    dispatch({
      type: PRODUCTTYPES.DELETE_CART,
    });
    navigation.navigate(NavigationKeys.screen.Home);
  };

  const handleAddTocart = data => {
    dispatch({
      type: PRODUCTTYPES.ADD_TO_CART,
      payload: data,
    });
  };

  const handleRemoveFromCart = data => {
    console.log(data,"data")
    dispatch({
      type: PRODUCTTYPES.REMOVE_ITEM_FROM_CART,
      payload: data,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/backIcon.png')}
            style={{width: 40, height: 40}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            color: '#1E222B',
            marginLeft: 21,
          }}>{`Shopping Cart (${cart.length})`}</Text>
      </View>

      <View style={{flex: 1}}>
        {cart.map(productData => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: productData.thumbnail}}
                style={{width: 30, height: 30, marginRight: 26}}
                resizeMode="contain"
              />
              <View>
                <Text
                  style={{fontSize: 14, fontWeight: '500', color: '#1E222B'}}>
                  {productData.title}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#1E222B',
                  }}>{`$${productData.price}`}</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => handleRemoveFromCart(productData)}>
                <Image
                  source={require('../../assets/images/decreaseIcon.png')}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#1E222B',
                  marginHorizontal: 13,
                }}>
                {productData.cartValue}
              </Text>
              <TouchableOpacity onPress={() => handleAddTocart(productData)}>
                <Image
                  source={require('../../assets/images/increaseIcon.png')}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {
        cart.length>0 && <View
        style={{
          backgroundColor: '#F8F9FB',
          marginHorizontal: 20,
          padding: 10,
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 13,
          }}>
          <Text style={{fontSize: 14, color: '#616A7D'}}>Subtotal</Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#1E222B',
            }}>{`$${totalCartValue}`}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 13,
          }}>
          <Text style={{fontSize: 14, color: '#616A7D'}}>Delivery</Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#1E222B',
            }}>{`$2`}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 13,
          }}>
          <Text style={{fontSize: 14, color: '#616A7D'}}>Total</Text>
          <Text
            style={{fontSize: 14, fontWeight: '500', color: '#1E222B'}}>{`$${
            totalCartValue + 2
          }`}</Text>
        </View>
        <TouchableOpacity
          onPress={handleCheckout}
          style={{
            backgroundColor: '#2A4BA0',
            borderRadius: 20,
            paddingVertical: 19,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#FFF'}}>
            Proceed To checkout
          </Text>
        </TouchableOpacity>
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.primary.screenBackgroundColor,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 21,
  },
});
