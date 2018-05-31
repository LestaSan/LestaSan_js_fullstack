// pages/index/vehicles/show.js
import testDrive from '../../modules/test-drive'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    entity: null
  },
  testDrive,
  preview(event) {
    const slidesName = event.target.dataset.slides
    const index = event.ttarget.dataset.index
    const slides = this.data.entity.meta[slidesName]
    const images = []
    slides.mao((item) => {
      images.push(item.image)
    })

    wx.previewImage({
      urls: images,
      current: images[index]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
   const id = options.id
   const entity = app.globalData.vehicles.filter((item) => {
     return item.id == id
    })

  this.setData({
    entity: entity[0]
    })

  wx.setNavigationBarTitle({
    title: this.data.entity.header
    })
  }
})