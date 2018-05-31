// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate: '2018-5-25'
  },
  bindDateChange () {
    const type = e.currentTarget.dataset.type;
    if (type == 'startPicker') {
      this.setData({
        startDate: e.detail.value,
        endPickerStart: e.detail.value
      })
    } else {
      this.setData({
        endDate: e.detail.value,
      })
    }
  },
})