import React, { Component } from 'react'
import util from './utils'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ListView
} from 'react-native'

export default class productDetial extends Component {
  render() {
    const productDetail = {'itemId':'i16061308465910232911','itemName':'【限时特惠】蓝月亮机洗绝配（亮白增艳）','itemSku':'80000920','memberPrice':9900,'marketPrice':13900,'stock':1000,'sellPoint':'','itemDesc':'','picUrl':{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/10000920/zt1.png','width':500,'height':500},'introImgUrlsInfo':[{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/10000920/zt1.png','width':500,'height':500}],'artImgUrls':[{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_01.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_02.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_03.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_04.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_05.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_06.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_07.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_08.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_09.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_10.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_11.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_12.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_13.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_14.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_15.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_16.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_17.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_18.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_19.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_20.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_21.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_22.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_23.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_24.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_25.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_26.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_27.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_28.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_29.jpg','width':790,'height':615},{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/80000920/ZZBlue1_30.jpg','width':790,'height':615}],'isShiiping':0,'activityList':[]}
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    const dataSource = ds.cloneWithRows(productDetail.artImgUrls||[])
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.intro}>
            <Image resizeMode='contain' style={styles.productImg} source={{ uri: productDetail.picUrl && productDetail.picUrl.picUrl }} />
            <View style={styles.productView}>
              <Text style={styles.productText}>{productDetail.itemName}</Text>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.priceText}>￥{(productDetail.memberPrice / 100).toFixed(2)}</Text>
              <Text style={styles.marketPrictText}>￥{(productDetail.marketPrice / 100).toFixed(2)}</Text>
            </View>
          </View>
          <View style={styles.detail}>
            <View style={styles.detailHeader}>
              <TouchableOpacity style={styles.detailHeaderItem}><Text style={styles.headerItemText}>商品详情</Text></TouchableOpacity>
              <TouchableOpacity style={styles.detailHeaderItem}><Text style={styles.headerItemText}>评价</Text></TouchableOpacity>
              <View style={styles.underLine}></View>
            </View>
            <View style={styles.detailContext}>
              <ListView
                enableEmptySections={true}
                dataSource={dataSource} 
                renderRow={this._renderDetailRow}/>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buyBar}>
          <View style={styles.cartIconWrap}>
            <View style={styles.cartIcon}>
              <Image source={require('../assets/imgs/cart_total@2x.png')} />
            </View>
          </View>
          <TouchableOpacity style={styles.addToCart}><Text style={styles.cartText}>加入购物车</Text></TouchableOpacity>
          <View style={styles.buyNow}><Text style={styles.cartText}>立即购买</Text></View>
        </View>
      </View>
    )
  }
  _renderDetailRow (item) {
    return (
      <Image style={{ width: util.size.width, height: util.size.width * item.height / item.width }} source={{ uri:item.picUrl }} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  intro: {
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc'
  },
  productImg: {
    height: 294,
    width: '100%'
  },
  productView: {
    padding: 12,
  },
  productText: {
    fontSize: 17,
    color: '#333'
  },
  priceView: {
    paddingTop: 12,
    paddingBottom: 20,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E0483E'
  },
  marketPrictText: {
    fontSize: 10,
    color: '#999',
    marginLeft: 8,
    textDecorationLine: 'line-through'
  },
  detail: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    backgroundColor: '#fff'
  },
  buyBar: {
    height: 50,
    borderTopColor: '#ccc',
    borderTopWidth: 0.5,
    flexDirection: 'row',
  },
  cartIconWrap: {
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 8
  },
  cartIcon: {
    width: 30,
  },
  addToCart: {
    backgroundColor: '#ff9800',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buyNow: {
    backgroundColor: '#e0483e',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartText: {
    fontSize: 17,
    color: '#fff'
  },
  detailHeader: {
    flexDirection: 'row',
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10
  },
  detailHeaderItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerItemText: {
    fontSize: 15,
    color: '#333'
  },
  underLine: {
    backgroundColor: '#0058f1',
    height: 2,
    width: 70,
    position: 'absolute',
    bottom: 0,
    left: 58
  }
})