Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl:"",
    shared_give_integral:0,
    register_give_integral:0,
    title:"",
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
    this.requestServiceData()
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

    return {
      title: this.data.title,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  /*
   *获取数据
   */
  requestServiceData:function(){
    var that = this;
    wx.request({
      url: 'http://www.jiuyunda.net:90/api/v1/shareIntegral/share_info', 
      data: {
        customer_id: '1',
        userinfo_id: '2'
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var url = "http://www.jiuyunda.net:90" + res.data.share_app_pic
        var shared_give_integral = res.data.shared_give_integral;
        var register_give_integral = res.data.register_give_integral;
        var title = res.data.title;
        that.setData({
          imageUrl:url,
          register_give_integral: register_give_integral,
          shared_give_integral: shared_give_integral,
          title:title
        })
      }, fail: function () {
        wx.showToast({
          title: '请求失败',
        })
      },
      complete: function () {
      }
    })
  }
})