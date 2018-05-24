// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: { 
      name: '',
      tel: '',
      addr: '',
    },
    // temp: {},
  },
  getName (e) {
    // console.log(e);
    var Nam = e.detail.value;
    var test = this.data.test;
    // console.log(test);
    test.name = Nam;
    // console.log(this.data.test.name);
    // var temp = this.data.temp;
    // Object.assign(temp, test);
    // console.log(temp);
    wx.setStorage({
      key: 'temp',
      data: test,
    });
  },
  getTel (e) {
    var Tel = e.detail.value;
    var test = this.data.test;
    test.tel = Tel;
    wx.setStorage({
      key: 'temp',
      data: test,
    });
  },
  getAddr (e) {
    var Addr = e.detail.value;
    var test = this.data.test;
    test.addr = Addr;
    wx.setStorage({
      key: 'temp',
      data: test,
    });
  },
  save () {
    wx.navigateTo({
      url: '../list/addr-list'
    })
  }
  

})