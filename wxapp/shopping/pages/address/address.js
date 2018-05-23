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
    temp: {},
  },
  getName (e) {
    // console.log(e);
    var name = e.detail.value;
    var test = this.data.test;
    // console.log(test);
    test.name = name;
    // console.log(this.data.test.name);
    var temp = this.data.temp;
  }

})