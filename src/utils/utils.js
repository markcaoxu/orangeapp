export default{
  setChooses:function(val){
    // 存缓存
    localStorage.setItem('choose_key',JSON.stringify(val))
  },
  getChooses:function(){
    // 取缓存
    return JSON.parse(localStorage.getItem('choose_key')||'[]')
  }
}