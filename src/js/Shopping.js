window.onload=function(){var wwrap=document.getElementsByClassName("wwrap")[0];var smallImgBox=wwrap.getElementsByClassName("imgBox")[0];var smallImg=smallImgBox.getElementsByTagName("img")[0];var bigImgBox=wwrap.getElementsByClassName("imgBox")[1];var bigImg=bigImgBox.getElementsByTagName("img")[0];var shadow=document.getElementById("shadow")smallImgBox.onmouseover=function(){shadow.style.display="block";bigImgBox.style.display="block"};smallImgBox.onmouseout=function(){shadow.style.display="none";bigImgBox.style.display="none"}smallImgBox.onmousemove=function(ev){var ev=ev||window.event;var x=ev.clientX-smallImgBox.offsetLeft-wwrap.offsetLeft;var y=ev.clientY-smallImgBox.offsetTop-wwrap.offsetTop;var l=x-shadow.offsetWidth/2;var t=y-shadow.offsetHeight/2;if(l<=0){l=0}else if(l>=smallImgBox.offsetWidth-shadow.offsetWidth){l=smallImgBox.offsetWidth-shadow.offsetWidth}if(t<=0){t=0}else if(t>=smallImgBox.offsetHeight-shadow.offsetHeight){t=smallImgBox.offsetHeight-shadow.offsetHeight}shadow.style.left=l+"px";shadow.style.top=t+"px";var radioX=x/(smallImgBox.offsetWidth-shadow.offsetWidth)>=1?1:x/(smallImgBox.offsetWidth-shadow.offsetWidth);var radioY=y/(smallImgBox.offsetHeight-shadow.offsetHeight)>=1?1:y/(smallImgBox.offsetHeight-shadow.offsetHeight);bigImg.style.left=-radioX*(bigImg.width-bigImgBox.offsetWidth)+"px";bigImg.style.top=-radioY*(bigImg.height-bigImgBox.offsetHeight)+"px"}};