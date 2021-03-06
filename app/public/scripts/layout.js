const title = document.querySelector('.maintitle');
const searchMenu = document.querySelector('.searchMenu');
const drawMenu = document.querySelector('.drawMenu');
const createMenu = document.querySelector('.createMenu');
const userMenu = document.querySelector('.userMenu');
const loginStat = document.querySelector('.loginStat');
const userAppend = document.querySelector('.userAppend');
const toProfile = document.querySelector('.toProfile');
const toInvite = document.querySelector('.toInvite');
const toLogout = document.querySelector('.toLogout');
const loginEvent = document.querySelector('.loginEvent');

let logindata = {
  islogined : false,
  username : null,
  id : null,
  img : null,
};

let query = {};
fetch('/login/query',{
  method:'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(query)
}).then(function(res){
  return res.text();
}).then(function(data){
  const parsedData = JSON.parse(data);
  //parsedData is object
  if(parsedData.login){
    loginStat.innerHTML = `${parsedData.data.username}`
    logindata.islogined = true;
    logindata.username = parsedData.data.username;
    logindata.id = parsedData.data.id;
    logindata.img = parsedData.data.img;
  }else{
    loginStat.innerHTML = 'Login';
    logindata.islogined = false;
    logindata.username = null;
    logindata.id = null;
    logindata.img = null;
  }
  loginEvent.click();
});


title.addEventListener('click',function(){
  location.href = '/';
});
searchMenu.addEventListener('click',function(){
  location.href = '/search'
});
drawMenu.addEventListener('click',function(){
  location.href = '/draw'
});
createMenu.addEventListener('click',function(){
  location.href = '/create'
});
loginStat.addEventListener('click',function(){
  if(!logindata.islogined){
    location.href = '/login'
  }
  else{
    userAppend.classList.toggle('hide');
  }
});
toProfile.addEventListener('click',function(){
  location.href = `/profile/${logindata.id}`;
});
toInvite.addEventListener('click',function(){
  location.href = '/invitation'
});
toLogout.addEventListener('click',function(){
  location.href = '/login/logout';
});
