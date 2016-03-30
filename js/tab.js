window.onload=function(){
  //桃心
	var pinpai=getClass("pinpai");
	var con=getClass("con-cent");
	for(var i=0;i<pinpai.length;i++){
		pinpai[i].index=i;
		pinpai[i].onclick=function(){
			for(var j=0;j<con.length;j++){
				con[j].style.display="none";
				pinpai[j].style.fontWeight="normal";
				pinpai[j].style.textDecoration="none";
				pinpai[j].style.color="#9c9c9c";
			}
			con[this.index].style.display="block";
			this.style.fontWeight="bold";
			this.style.textDecoration="underline";
			this.style.color="#000";
		}
	}
	var box=getClass("bb");
	var xin=getClass("qq");
	for(var k=0;k<box.length;k++){
		box[k].index=k;
		box[k].onmouseover=function(){
			xin[this.index].style.display="block";
		}
		box[k].onmouseout=function(){
			xin[this.index].style.display="none";
		}
	}

 //banner 图轮播
     	var imgs=$(".imgs");
     	var btn=$(".btn");
      var mainbox=$(".menu-conbox")[0];
     	var num=1;
      var yanse=["#fcf8cb","#DCDCDC","#ED402F","#E60432","#DCDCDC","#FFD101"];
     	function move(){
     		if(num==6){
     			num=0;
     		}
     		for(var i=0;i<imgs.length;i++){
     			imgs[i].style.zIndex=2;
     			btn[i].style.background="#333";
     			btn[i].style.borderColor="#333";
     		}
     		imgs[num].style.zIndex=5;
     		btn[num].style.background="white";
     		btn[num].style.borderColor="#333";
        mainbox.style.background=yanse[num];
            num++;
     	}

     	var t=setInterval(move,2000);
     	for(var i=0;i<btn.length;i++){
     		btn[i].index=i;
     		btn[i].onmouseover=function(){
     			clearInterval(t);
     			for(var j=0;j<imgs.length;j++){
     				imgs[j].style.zIndex=0;
     				btn[j].style.background="#333";
     				btn[j].style.borderColor="#333";
     			}
     			imgs[this.index].style.zIndex=5;
     			this.style.background="white";
     			this.style.borderColor="#333";
          mainbox.style.background=yanse[this.index];
     		}
     		btn[i].onmouseout=function(){
     			t=setInterval(move,2000);
     			num=this.index+1;
     		}
     	}

     


      	var box=$(".sousuok")[0];
      	var tex=$("#tex");
      	tex.onfocus=function(){
      		if(tex.value=="施华洛奇华丽入驻，璀璨好礼疯狂送"){
      			tex.value="";
      		}
      	}
      	tex.onblur=function(){
      		if(tex.value){

      		}
      		else{
      			tex.value="施华洛奇华丽入驻，璀璨好礼疯狂送";
      		}
      	}   


        var box1=$(".kuangjia")[0];
        var tex1=$("#wenben");
        tex1.onfocus=function(){
          if(tex1.value=="阳澄开湖，又到一年吃蟹季"){
            tex1.value="";
          }
        }
        tex1.onblur=function(){
          if(tex1.value){

          }
          else{
            tex1.value="阳澄开湖，又到一年吃蟹季";
          }
        }   



        //楼层
        var kuang=$(".kuang")[0];
        var flagdown=true;
        var flagup=true;
        var lou=$(".f1box");
        var jump=$(".jump")[0];
        var btnn=$("li",jump);
        for(var i=0;i<btnn.length;i++){
            btnn[i].index=i;
            btnn[i].onclick=function(){
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;
                animate(obj,{scrollTop:lou[this.index].t})
            }
        }
      
      var ch=document.documentElement.clientHeight;
      window.onscroll=function(){
        var scrollT=getScrollT();
        if(scrollT>=430){
          if(flagdown){//为了保证页面往下拉时只有一个animate函数执行
            animate(kuang,{top:0},500);
            flagdown=false;
            flagup=true;
          }
          
        }
        else{
          if(flagup){
            animate(kuang,{top:-60},500);
            flagup=false;
            flagdown=true;
          }
          
        }    
       if(scrollT>=1150){
           jump.style.display="block";
            }
      else{
           jump.style.display="none";
            }
        for(var i=0;i<lou.length;i++){
          lou[i].t=lou[i].offsetTop;
          if(lou[i].t<scrollT+1){
                    for(var j=0;j<btnn.length;j++){
                        btnn[j].style.backgroundColor="white";
                    }
                     btnn[i].style.backgroundColor="red";
          }
        }

         //按需加载
        var scrollT=getScrollT();
        for(var i=0;i<lou.length;i++){
        if(lou[i].offsetTop<scrollT+ch){
        var imgs=$("img",lou[i]);
        for(var j=0;j<imgs.length;j++){
          imgs[j].src=imgs[j].getAttribute("aa");
        }
      }
    }
      } 


//按钮轮播
    function lunboL(num){
      var innerbox1=$(".f1-left-middleinner")[num];
    var btn11=$(".f1-jiantouleft")[num];
    var btn22=$(".f1-jiantouright")[num];
    function moveleft(){
      var first=getFirst(innerbox1);
      var last=getLast(innerbox1);
      animate(innerbox1,{left:-100},500,Tween.Linear,function(){
        innerbox1.appendChild(first);
        innerbox1.style.left=0;
      });
    }
    var t1=setInterval(moveleft,2000);
    function moveright(){
      var first=getFirst(innerbox1);
      var last=getLast(innerbox1);
      last.style.width=0;
      innerbox1.insertBefore(last,first);
      animate(last,{width:100},500,Tween.Linear);
    }
    btn11.onmouseover=btn22.onmouseover=function(){
      clearInterval(t1);
    }
    btn11.onmouseout=btn22.onmouseout=function(){
      t1=setInterval(moveleft,2000);
    }
    btn11.onclick=function(){
      moveleft();
    }
    btn22.onclick=function(){
      moveright();
    }
    }
    for(var i=0;i<6;i++){
      lunboL(i);
    }
 

 //banner 左侧
 var butt=$(".menu-con-left")[0];
 var but=$("li",butt);
 var caidans=$(".caidans");
 for(var i=0;i<but.length;i++){
   but[i].index=i;
  but[i].onmouseover=function(){
    for(var j=0;j<caidans.length;j++){
       caidans[j].style.display="none";
       but[j].style.background="#2D2D2D";
    }
    caidans[this.index].style.display="block";
    but[this.index].style.background="#c40000";
  }
  but[i].onmouseout=function(){
    caidans[this.index].style.display="none";
    but[this.index].style.background="#2D2D2D";
  }
 }

  var wangzdh=$(".wangzdh");
  var xiala=$(".xiala");
  for(var i=0;i<wangzdh.length;i++){
   wangzdh[i].index=i;
  wangzdh[i].onmouseover=function(){
    xiala[this.index].style.display="block";
  }
  wangzdh[i].onmouseout=function(){
    xiala[this.index].style.display="none";
  }
 }

    //右侧导航二级选项
    var rightyiji=$('.right-yiji');
    var righterji=$('.right-erji');
    for(var i=0;i<rightyiji.length;i++){
      rightyiji[i].index=i;
      hover(rightyiji[i],function(){
        rightyiji[this.index].style.backgroundColor="#c40000";
        righterji[this.index].style.display="block";
        animate(righterji[this.index],{right:35},500);
      },function(){
        rightyiji[this.index].style.backgroundColor="#000";
        righterji[this.index].style.display="none";
        animate(righterji[this.index],{right:55},500);
      })
    }



}