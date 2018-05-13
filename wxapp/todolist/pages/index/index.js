//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  // 数据 对应着
    // 默认的status是1  （全部）
    // setData才能改变status
    // setData 2 （未完成）
    // status: 1,
    // 界面状态全部被data接管起来
    addShow: true,
    lists: [],
    
    addText: ''
  },
  curLists: [],
  showStatus: function(e) {
    const status = e.currentTarget.dataset.status;
    console.log(e);
    // console.log(this);
    // 不再是dom编程，针对界面状态的编程
    this.setData({
      status: status
    })
  }, 
  setInput: function(e) {
    console.log(e.detail.value);
    this.setData({
      addText: e.detail.value
    })
  },
  addTodo: function(e) {
    const task = {
      title: this.data.addText,
      status: '0',
      date: '1分钟前'
    };
    const temp = [...this.data.lists, task];
    this.setData({
      lists: temp,
      addShow: true
    })
    // 看到界面，我们就知道要的数据
    // 看到交互，对数据操作。

    // 如何添加新的todo？
    // 页面上多一条任务
    // 显示多少条是由lists决定的
    // lists数组push工作
    // 数据驱动界面，数据变，界面自动更新
    // MVVM Model(数据模型data) View -> VM(视图模型层)
  },
  changeTodo: function(event) {
    const index = event.currentTarget.dataset.item;
    const temp = this.data.lists;
    temp.forEach((item, i) => {
      console.log(item, i);      
      if (i == index) {
        if (item.status == '0') {
          item.status = '1',
          wx.showToast({
            title: '已完成', 
            icon: 'success',
            duration: 1000
          })
        } else {
          item.status = '0',
          wx.showToast({
            title: '重做', 
            icon: 'success',
            duration: 1000
          })
        }
      }
    });
    this.setData({
      lists: temp,
    })
    // 当前点击条目的status success
    // 数据 lists 跟当前条目相关的这一条数据
    // 将status值更新为1
  },
  addTodoShow: function(e) {
    this.setData({
      addShow: false
    })
  },
  addTodoHide: function(e) {
    this.setData({
      addShow: true
    })
  }
  //事件处理函数
 
})
