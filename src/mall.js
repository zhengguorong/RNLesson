import React, { Component } from 'react'
import util from './utils'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  ListView,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'

export default class mall extends Component {
  render() {
    const banners = [{'displayPic':{'picUrl':'https://pubfile.bluemoon.com.cn/group1/M00/08/B4/wKgwBllcywGAWi3JAAIvgIqFJCI864.jpg','width':960,'height':480},'webUrl':'','webTitle':'','webDesc':''}, {'displayPic':{'picUrl':'https://pubfile.bluemoon.com.cn/group1/M00/08/B4/wKgwBllcywGAWi3JAAIvgIqFJCI864.jpg','width':960,'height':480},'webUrl':'','webTitle':'','webDesc':''}]
    const products = [{'id':'17032914453369415481','itemId':'i16061308465910232911','imageVo':{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/recommend/i16032221342668284781/jxjp-lb-syt.jpg','width':750,'height':350},'mark':'限时特惠','recommendCode':'T1703004','showMark':1,'title':'蓝月亮机洗绝配（亮白增艳）'},{'id':'17032914471008820841','itemId':'i16061308503259527471','imageVo':{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/recommend/i16061308503259527471/jxjp-jj-syt(1).jpg','width':750,'height':350},'mark':'限时特惠','recommendCode':'T1703005','showMark':1,'title':'蓝月亮机洗绝配（深层洁净）'},{'id':'17032911011053863171','itemId':'i17011614213168596421','imageVo':{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/recommend/i17011614213168596421/jxjp-lb2-syt.jpg','width':750,'height':350},'mark':'第二盒0元','recommendCode':'T1703001','showMark':1,'title':'机洗至尊洗衣液（亮白）礼盒套装'},{'id':'17032914104871529571','itemId':'i17011614251609132281','imageVo':{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/recommend/i17011614251609132281/jxjp-jj2-syt.jpg','width':750,'height':350},'mark':'第二盒0元','recommendCode':'T1703002','showMark':1,'title':'机洗至尊洗衣液（洁净）礼盒套装'},{'id':'17032914140981638271','itemId':'i17011614270202972461','imageVo':{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/recommend/i17011614270202972461/jxjp-lbjj-syt.jpg','width':750,'height':350},'mark':'第二盒0元','recommendCode':'T1703003','showMark':1,'title':'机洗至尊洗衣液（亮白+洁净）礼盒套装'},{'id':'17042516404286260891','itemId':'i16081720370533729571','imageVo':{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/recommend/80000252/sxjp-syt.jpg','width':750,'height':350},'mark':'','recommendCode':'T0000003','showMark':0,'title':'蓝月亮手洗绝配套装'},{'id':'17042516425207481611','itemId':'i16081814074018573511','imageVo':{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/recommend/80000625/sxbc-syt.jpg','width':750,'height':350},'mark':'','recommendCode':'T0000002','showMark':0,'title':'蓝月亮手洗补充套装'},{'id':'16021816492043829331','itemId':'i16021816362655932421','imageVo':{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/recommend/80000238/80000238(2).jpg','width':750,'height':350},'mark':'','recommendCode':'T0000023','showMark':0,'title':'蓝月亮宝宝洗衣套装'},{'id':'16021816510900498021','itemId':'i16021816425895869361','imageVo':{'picUrl':'https://mallapi.bluemoon.com.cn//upload/images/mall_product/recommend/80000241/80000241(2).jpg','width':750,'height':350},'mark':'','recommendCode':'T0000021','showMark':0,'title':'蓝月亮厨卫绝配'}]
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    const dataSource = ds.cloneWithRows(products)
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.cartBtn}>
          <Image style={styles.cartImage} source={require('../assets/imgs/cart_large@3x.png')} />
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
          <Swiper height={160}>
            {banners.map((item, index) => {
              return (
                <Image
                  key={index}
                  style={styles.container}
                  source={{ uri: item.displayPic.picUrl }}
                />)
            })}
          </Swiper>
          <ListView
            style={styles.productList}
            enableEmptySections={true}
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
          />
        </ScrollView>
      </View>
    )
  }

  _renderRow(rowData) {
    return (
      <TouchableOpacity>
        {rowData.showMark ? <View style={styles.mark}><Text style={styles.markText}>{rowData.mark}</Text></View> : null}
        <Image resizeMode='contain' style={[styles.product, { width: util.size.width, height: util.size.width * rowData.imageVo.height / rowData.imageVo.width }]} source={{ uri: rowData.imageVo.picUrl }} />
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
  },
  productList: {
    marginTop: 4
  },
  product: {
    marginTop: 1
  },
  mark: {
    position: 'absolute',
    zIndex: 1,
    width: 64,
    height: 20,
    borderBottomRightRadius: 10,
    backgroundColor: '#d23638',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0
  },
  markText: {
    color: '#fff',
    fontSize: 12
  },
  cartBtn: {
    position: 'absolute',
    right: 15,
    top: 30,
    zIndex: 1
  },
  cartImage: {
    width: 24,
    height: 24
  }
})