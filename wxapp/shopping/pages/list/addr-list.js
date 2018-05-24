// pages/list/addr-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name: '',
      tele: '',
      address: ''
    
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'temp',
      // key: 'ADDR',
      success: function(res) {
        console.log(res);
        console.log(res.data.name);
        that.setData({
          name:res.data.name,
          tele:res.data.tel,
          address:res.data.addr,
          // tele:res.TEL,
          // address:res.ADDR,
        });
      },
    });
  }
})