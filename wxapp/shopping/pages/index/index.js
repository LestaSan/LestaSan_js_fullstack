// pages/address/address.js
import goods from '../../api/goods.js' 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    show: false,
    totalNum: 0,
    scaleCart: false,
    goods: null
  },
  onLoad (options) {
    const id = options.id || 2;
    let curGoods;
    for (let i = 0; 1 < goods.length; i++) {
      if (goods[i].id == id) {
        curGoods = goods[i];
        break;
      }
    }
    setTimeout(() => {
      this.setData({
        goods: curGoods
      })
    }, 1000)
    
  }, 
  addCount() {
    var num = ++this.data.num;
    // num++;
    this.setData({
      num
    })
  },
  addToCart() {
    const num = this.data.num;
    const total = this.data.totalNum;
    this.setData({
      show: true
    });
    setTimeout(() => {
      this.setData({
        show: false,
        scaleCart: true,
      });
      setTimeout(() => {
        this.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      }, 200)
    }, 300)
  }
})
