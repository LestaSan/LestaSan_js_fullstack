//index.js
//获取应用实例
import testDrive from '../../modules/test-drive'
// console.log (testDrive);
// 在page里得到app
const app = getApp()
// console.log(this.globalData.slides)

Page({
  data: {
    slides: [],
  },
  onLoad() {
    this.setData({
      slides: app.globalData.slides
      
    })
  },
  testDrive: testDrive,
  readMore(event) {
    const id = event.target.dataset.id;
    wx.navigateTo({
      url: `/pages/vehicles/show?id=${id}`
    })
  }
})
