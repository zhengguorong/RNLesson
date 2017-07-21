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
import * as api from './service/api'
import { connect } from 'react-redux'
import * as actions from './action'

class mall extends Component {
  render() {
    const { banners, products } = this.props
    console.log(banners)
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
  componentDidMount() {
    this.props.getBannerList()
    this.props.getRecommendItem()
  }

  _renderRow(rowData) {
    // 获取导航对象
    const { navigation } = this.props
    return (
      <TouchableOpacity onPress={()=>{navigation.navigate('productDetail')}}>
        {rowData.showMark ? <View style={styles.mark}><Text style={styles.markText}>{rowData.mark}</Text></View> : null}
        <Image resizeMode='contain' style={[styles.product, { width: util.size.width, height: util.size.width * rowData.imageVo.height / rowData.imageVo.width }]} source={{ uri: rowData.imageVo.picUrl }} />
      </TouchableOpacity>
    )
  }
}

export default connect(state => ({
  banners: state.mallReducer.banners,
  products: state.mallReducer.products
}), dispatch => ({
  getBannerList () {
    return dispatch(actions.getBannerList())
  },
  getRecommendItem () {
    return dispatch(actions.getRecommendItem())
  }
}))(mall)

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