import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../../styles/theme';
import lang from '../../assets/languages';
import {allProductsApi} from './constant';
import {ProductCard} from '../../components/ProductCard';
import { useSelector } from 'react-redux';
import { NavigationKeys } from '../../navigation/constants';

export const Home = ({navigation}) => {
  const {cart}=useSelector(state=>state)
  console.log(cart,"cart$$")
  const [allProducts, setAllProducts] = useState(null);
  const cardElement = cart?.length || 0;

  const getProductData = async () => {
    try {
      const response = await fetch(allProductsApi);
      const data = await response.json();
      console.log(data);
      setAllProducts(data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.nameText}>{lang.heyRahul}</Text>
          <TouchableOpacity style={styles.cartcontainer}  onPress={()=>navigation.navigate(NavigationKeys.screen.CartScreen)}>
            <Image
              source={require('../../assets/images/cart.png')}
              style={styles.cartImage}
            />
            {cardElement > 0 &&<View style={styles.cartNumberContainer}>
              <Text style={styles.cartNumberText}>{cardElement}</Text>
            </View>}
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <Image
            source={require('../../assets/images/SearchIcon.png')}
            style={styles.cartImage}
          />
          <TextInput
            placeholder="Search Products or store"
            style={styles.textInput}
            placeholderTextColor={'#8891A5'}
          />
        </View>
        <View style={styles.detailCardContainer}>
          <View>
            <Text style={styles.deliveryText}>DELIVERY TO</Text>
            <View style={styles.insideDetailCard}>
              <Text style={styles.insideDeliveryText}>
                Green Way 3000, Sylhet
              </Text>
              <Image
                source={require('../../assets/images/arrowIcon.png')}
                style={styles.arrowImage}
              />
            </View>
          </View>
          <View>
            <Text style={styles.deliveryText}>WITHIN</Text>
            <View style={styles.insideDetailCard}>
              <Text style={styles.insideDeliveryText}>1 HOUR</Text>
              <Image
                source={require('../../assets/images/arrowIcon.png')}
                style={styles.arrowImage}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 27}}>
        <Text style={styles.recommendedText}>Recommended</Text>
        <View style={styles.productContainer}>
          {allProducts &&
            allProducts.map(productDetail => (
              <ProductCard
                productDetail={productDetail}
                key={productDetail.id}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.primary.screenBackgroundColor,
    flex: 1,
  },
  topContainer: {
    backgroundColor: theme.palette.primary.primaryBlue,
    paddingTop: 52,
    paddingBottom: 12,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#F8F9FB',
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
    right: -10,
    borderWidth: 2,
    borderColor: '#2A4BA0',
  },
  cartNumberText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#153075',
    paddingHorizontal: 28,
    borderRadius: 28,
    paddingVertical: 4,
    marginTop: 35,
    marginBottom: 29,
  },
  textInput: {
    width: '90%',
    paddingVertical: 14,
    marginLeft: 12,
    color: '#F8F9FB',
    fontSize: 14,
    fontWeight: '500',
  },
  arrowImage: {
    width: 7,
    height: 4,
  },
  insideDetailCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#91a2cd',
  },
  insideDeliveryText: {
    color: '#F8F9FB',
    fontSize: 14,
    fontWeight: '500',
    marginRight: 10,
  },
  detailCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 12,
  },
  recommendedText: {
    fontSize: 30,
    color: '#1E222B',
    marginHorizontal:12
  },
});
