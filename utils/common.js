const posts = [
  {
    id:"123",
    title:"微信小程序大赛经验分享",
    add_date:"2020-6-10 7:30",
    content:"在这次比赛当中...",
    user:"hhn"
  },
  {
    id:"456",
    title:"电子商务大赛竞赛经验分享",
    add_date:"2020-5-31 8:30",
    content:"寻找到一个合适的指导老师是非常重要的",
    user:"hhn"
  },
  {
    id:"789",
    title:"微信小程序大赛组队",
    add_date:"2020-6-7 9:30",
    content:"急需一个会JAVA的队友",
    user:"hhn"
  },
  {
    id:"780",
    title:"计算机程序设计大赛经验分享",
    add_date:"2020-10-7 9:30",
    content:"通过这次比赛经历...",
    user:"hhn"
  },
  {
    id:"782",
    title:"数学建模大赛经验分享",
    add_date:"2020-8-08 9:30",
    content:"我们在这次比赛里经历了...",
    user:"hhn"
  },
  {
    id:"781",
    title:"全国高校绿色计算大赛经验分享",
    add_date:"2020-10-28 9:30",
    content:"通过这次比赛经历...",
    user:"hhn"
  },
]
function getPostList(){
  let list = [];
  for(var i = 0;i < posts.length;i++){
    let obj = {};
    obj.id = posts[i].id;
    obj.content = posts[i].content;
    obj.add_date = posts[i].add_date;
    obj.title = posts[i].title;
    obj.poster = posts[i].poster;
    list.push(obj);
  } 
  return list;
}
function getPostsDetail(postsID)
{
  let message = {
    code:'404',
    posts:{}
  };
  for( var i = 0; i < posts.length; i++){
    if( postsID == posts[i].id ){
      message.code = '200',
      message.posts = posts[i];
      break;
    }
  }
  return message;
}
//暴露接口使其他js文件可以调用本文件的函数
module.exports = {
  getPostList:getPostList,
  getPostsDetail:getPostsDetail,
  //外部调用的名字可以在冒号后进行更改
}