$(function(){$("#login").click(function(){var usn=$("#username").val();var pwd=$("#password").val();var users=$.cookie("registerUsers")?$.cookie("registerUsers"):"";users=convertStrToObj(users);if(users[usn]==pwd){$.cookie("loginedUsers",usn,{expires:7,path:"/"});console.log("登录成功!");location.href="index.html"}else{alert("用户名和密码不匹配，请确认后重试！")}});$("#goRegister").click(function(){location.href="register.html"})});function convertStrToObj(str){if(!str){return{}}var users=str.split(":");var obj={};for(var i=0;i<users.length;i++){var userData=users[i].split(",");obj[userData[0]]=userData[1]}return obj}function convertObjToStr(obj){var str="";for(var usn in obj){var pwd=obj[usn];if(str){str+=":"}str+=usn+','+pwd}return str}