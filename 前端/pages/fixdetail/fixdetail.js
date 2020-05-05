// pages/fixdetal/fixdetal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'19979611109',
    QQ:'1322625047',
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    
  },

  copy:function(e) {
    console.log(e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success:function(res) {
        wx.getClipboardData({
          complete: (res) => {
            wx.showToast({
              title: '复制成功',
              icon:'success',
              duration:1500
            })
          },
        })
      }
    })
  },

  comfirm1:function() {
    wx.showModal({
      cancelColor: 'cancelColor',
      content:'是否确认接单',
      success(res) {
        if(res.confirm) {
          console.log('用户点击确认'),
          wx.showToast({
            title:'接单成功',
            icon:'success',
            duration:1500
          }),
          wx.reLaunch({
            url: '/pages/home/home?fixer_state=1',
          })
        }
        else if(res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  toastbtn1:function() {
    wx.showToast({
      title:'接单成功',
      icon:'success',
      duration:1500
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})