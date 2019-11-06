// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const { campaignId } = event

  const { data: campaigns } = await db.collection('campaign').doc(campaignId).update({
    data: {
      joinedNumber: _.inc(1)
    }
  });
  
  return {
    event,
    context
  }
}