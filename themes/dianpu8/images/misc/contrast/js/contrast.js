/*
 * 2012-9-18
 */
var ie=(function(){var c,a=3,d=document.createElement("div"),b=d.getElementsByTagName("i");while(d.innerHTML="<!--[if gt IE "+(++a)+"]><i></i><![endif]-->",b[0]){}return a>4?a:c}());(function(a){a.fn.imgScroll=function(b){return this.each(function(){var q=a.extend({evtType:"click",visible:1,showControl:true,showNavItem:false,navItemEvtType:"click",navItemCurrent:"current",showStatus:false,direction:"x",next:".next",prev:".prev",disableClass:"disabled",speed:300,loop:false,step:1},b);var h=a(this),j=h.find("ul"),m=j.find("li"),i=m.length,d=q.visible,c=q.step,f=parseInt((i-d)/c),p=0,l=h.css("position")=="absolute"?"absolute":"relative",n=m.css("float")!=="none",g=a('<div class="scroll-nav-wrap"></div>');animDir=q.direction=="x"?"left":"top",styleDir=q.direction=="x"?"width":"height";function o(){if(!n){m.css("float","left")}j.css({position:"absolute",left:0,top:0});h.css({position:l,width:q.direction=="x"?d*m.width():m.width(),height:q.direction=="x"?m.height():d*m.height(),overflow:"hidden"});a(q.prev).addClass(q.disableClass);if(q.loop){}else{if((i-d)%c!==0){var t=c-(i-d)%c;j.append(m.slice(0,t).clone());i=j.find("li").length;f=parseInt((i-d)/c)}}j.css(styleDir,i*m.width());if(!q.showControl){a(q.next+","+q.prev).hide()}else{if(i<=d){a(q.next+","+q.next).addClass(q.disableClass)}else{a(q.prev).addClass(q.disableClass);a(q.next).removeClass(q.disableClass)}}if(q.showNavItem){for(var r=0;r<=f;r++){var s=r==0?q.navItemCurrent:"";g.append('<em class="'+s+'">'+(r+1)+"</em>")}h.after(g);g.find("em").bind(q.navItemEvtType,function(){var u=parseInt(this.innerHTML);k((u-1)*c)})}if(q.showStatus){h.after('<span class="scroll-status">'+1+"/"+(f+1)+"</span>")}}function k(r){if(j.is(":animated")){return false}if(r<0){a(q.prev).addClass(q.disableClass);return false}if(r+d>i){a(q.next).addClass(q.disableClass);return false}p=r;j.animate(q.direction=="x"?{left:-((r)*m.width())}:{top:-((p)*m.height())},q.speed,function(){if(r>0){a(q.prev).removeClass(q.disableClass)}else{a(q.prev).addClass(q.disableClass)}if(r+d<i){a(q.next).removeClass(q.disableClass)}else{a(q.next).addClass(q.disableClass)}e(r)})}function e(r){g.find("em").removeClass(q.navItemCurrent).eq(r/c).addClass(q.navItemCurrent);if(q.showStatus){a(".scroll-status").html(((r/c)+1)+"/"+(f+1))}}o();if(i>d){a(q.next).click(function(){k(p+c)});a(q.prev).click(function(){k(p-c)})}})}}(jQuery));var Contrast={TPL:{contrast:'<div id="pop-compare" data-load="false" class="pop-compare'+(pageConfig.wideVersion?"":" pop-compare-narrow")+'"><div class="pop-wrap"><p class="pop-compare-tips"></p><div class="pop-inner" data-widget="tabs"><div class="diff-hd"><ul class="tab-btns clearfix"><li class="current" data-widget="tab-item"><a href="javascript:;">\u5bf9\u6bd4\u680f</a></li><li data-widget="tab-item"><a href="javascript:;">\u6700\u8fd1\u6d4f\u89c8</a></li></ul><div class="operate"><a href="javascript:;" class="hide-me">\u9690\u85cf</a></div></div><div class="diff-bd tab-cons"><div class="tab-con" data-widget="tab-content"><div id="diff-items" class="diff-items clearfix"><dl class="item-empty"><dt>1</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>2</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>3</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>4</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl></div><div class="diff-operate"><a target="_blank" id="goto-contrast" href="#none" class="btn-compare-b">\u5bf9\u6bd4</a><a class="del-items">\u6e05\u7a7a\u5bf9\u6bd4\u680f</a></div></div><div class="tab-con" style="display:none;" data-widget="tab-content"><div class="scroll-item clearfix"><span id="sc-prev" class="scroll-btn sb-prev disabled">&lt;</span><span id="sc-next" class="scroll-btn sb-next disabled">&gt;</span><div class="scroll-con clearfix"><ul id="scroll-con-inner"><p class="scroll-loading center">\u8f7d\u5165\u4e2d...</p></ul></div></div></div></div></div></div></div>',item:'<dl class="hasItem" id="cmp_item_${arguments[2][0]}" fore="${arguments[2][1]}">	<dt>		<a target="_blank" href="${url}"><img src="${img}" width="50" height="50"></a>	</dt>	<dd>		<a target="_blank" class="diff-item-name" href="${url}">${decodeURIComponent(name)}</a>		<span class="p-price"><img src="http://price.#/gp${arguments[2][0]},1.png" onerror="this.src=\'../../skin/e/i/error-3.gif\'"  /><a class="del-comp-item" skuid="${arguments[2][0]}">\u5220\u9664</a></span>	</dd></dl>',recentItem:'<li id="rec_item_${arguments[2]}"><div class="rec_item_wrap">	<div class="dt">		<a target="_blank" href="${url}"><img src="${img}" width="50" height="50"></a>	</div>	<div class="dd">		<a target="_blank" href="${url}" class="diff-item-name">${decodeURIComponent(name)}</a>		<div class="btns clb">			<img src="http://price.#/gp${arguments[2]},1.png"  onerror="this.src=\'../../skin/e/i/error-3.gif\'" />			<a id="recent_${arguments[2]}" data-recent="true" skuid="${arguments[2]}" class="btn-compare btn-compare-s"><span>\u5bf9\u6bd4</span></a>		</div>	</div></div></li>'},init:function(a,b){this.cookieName=b||"_contrast";this.bindEvent("cmpBtn").btnStyle(null,"set");if(readCookie(this.cookieName+"_status")=="side"&&$("#side-cmp").length<1){$("#sidepanel").prepend('<span id="side-cmp"><a class="compareHolder" href="javascript:;"><b></b>\u5bf9\u6bd4\u680f</a></span>')}else{this.showPopWin(null)}this.bindEvent("showWin");return this},bindEvent:function(a){var b=$(".btn-compare"),c=$(".del-items"),d=this;if(a=="cmpBtn"){b.unbind("click").bind("click",function(){var g=$(this).attr("skuid"),e=readCookie(d.cookieName)||"",f=e.split(".").length;if(f<4){d.showPopWin(g);if($(this).attr("data-recent")=="true"){d.switchTab(0)}}else{if(!d.hasCookie(g)){d.showPopWin(null);d.setMessage("\u5bf9\u6bd4\u680f\u5df2\u6ee1\uff0c\u60a8\u53ef\u4ee5\u5220\u9664\u4e0d\u9700\u8981\u7684\u680f\u5185\u5546\u54c1\u518d\u7ee7\u7eed\u6dfb\u52a0\u54e6\uff01")}else{if($(this).attr("data-recent")=="true"){d.switchTab(0)}d.showPopWin(g)}}})}if(a=="delAll"){c.bind("click",function(){d.delContrastItem(null,true);$("#goto-contrast").attr("href","javascript:;")})}if(a=="delHover"){$(".hasItem").hover(function(){$(this).find(".del-comp-item").css("visibility","visible")},function(){$(this).find(".del-comp-item").css("visibility","hidden")});$(".hasItem .del-comp-item").bind("click",function(){var e=$(this).attr("skuid");d.delContrastItem(e)});$("#goto-contrast").click(function(){var e=readCookie(d.cookieName)||"",h=e.split(".");if(h.length<2){d.setMessage("\u81f3\u5c11\u6709\u4e24\u4ef6\u5546\u54c1\u624d\u80fd\u5bf9\u6bd4\u54e6\uff01");return false}else{var f=[];for(var g=0;g<h.length;g++){f.push(("s"+(g+1)+"="+h[g]))}$("#goto-contrast").attr("href","#/pcompare.aspx?"+f.join("&"))}})}if(a=="hide"){$(".diff-hd .hide-me").bind("click",function(){d.hidePopWin()})}if(a=="showWin"){$("#side-cmp").bind("click",function(){d.showPopWin(null,true)})}return this},switchTab:function(a){$(".diff-hd li").eq(a).trigger("click")},btnStyle:function(d,b){if(!!d){if(b=="set"){$("#comp_"+d+",#recent_"+d).addClass("btn-compare-s-active");$("#cmp_"+d).text("\u53d6\u6d88\u5bf9\u6bd4")}if(b=="del"){$("#comp_"+d+",#recent_"+d).removeClass("btn-compare-s-active");$("#cmp_"+d).text("\u52a0\u5165\u5bf9\u6bd4")}}else{var c=readCookie(this.cookieName)||"";c=c.split(".");if(c.length<5){for(var a=0;a<c.length;a++){if(b=="set"){$("#comp_"+c[a]+",#recent_"+c[a]).addClass("btn-compare-s-active");$("#cmp_"+c[a]).text("\u53d6\u6d88\u5bf9\u6bd4")}if(b=="del"){$("#comp_"+c[a]+",#recent_"+c[a]).removeClass("btn-compare-s-active");$("#cmp_"+c[a]).text("\u52a0\u5165\u5bf9\u6bd4")}}}}return this},loadExistList:function(c){var b=readCookie(this.cookieName)||"",b=b.split(".");for(var a=0;a<b.length;a++){this.setContrastItem(b[a]);if((a+1)==b.length){this.setContrastItem(b[a],c)}else{this.setContrastItem(b[a])}}},showPopWin:function(d,b){var a=$("#pop-compare"),d=d||null,c=this;if($("#pop-compare").length<1){$("body").append(this.TPL.contrast)}if($("#diff-items .hasItem").length<1){this.loadExistList(function(){if(c.hasCookie(d)){c.delContrastItem(d)}else{c.setContrastItem(d)}})}if($("#pop-compare").attr("data-load")=="false"){$("#pop-compare").show().attr("data-load","true");$("#pop-compare").Jtab({currClass:"current",compatible:true,event:"click"},function(e,f,g){if(g==1&&$(".scroll-loading").length>0){c.setRecent(function(){c.setRecentScroll()})}});if(ie!==6){$("#pop-compare").animate({bottom:0},300)}}else{if(readCookie(c.cookieName+"_status")=="side"){$("#pop-compare").show().attr("data-load","true");if(ie!==6){$("#pop-compare").show().animate({bottom:0})}createCookie(c.cookieName+"_status","show",30,"/;domain=#")}if(c.hasCookie(d)){c.delContrastItem(d)}else{c.setContrastItem(d)}}c.bindEvent("delAll").bindEvent("hide")},hidePopWin:function(){var a=this;if($("#side-cmp").length<1){$("#sidepanel").prepend('<span id="side-cmp"><a class="compareHolder" href="javascript:;"><b></b>\u5bf9\u6bd4\u680f</a></span>')}if(ie==6){$("#pop-compare").hide()}else{if($(".pop-wrap").is(":animated")){return false}$("#pop-compare").css("overflow","hidden").find(".pop-wrap").animate({left:"990px"},300,function(){$("#pop-compare").removeAttr("style").css({overflow:"visible",bottom:"-200px"}).hide().find(".pop-wrap").removeAttr("style").css("left",0)})}a.bindEvent("showWin");createCookie(a.cookieName+"_status","side",30,"/;domain=#")},setContrastItem:function(f,e){var a=$("#pop-compare"),b=readCookie(this.cookieName)||"",c=b.split(".").length,d=this;if(d.hasCookie(f)&&a.attr("data-load")=="true"){d.delContrastItem(f)}else{if(!f){return false}$.ajax({url:"#/lishiset.aspx?id="+f,dataType:"jsonp",success:function(h){var g=$("#diff-items dl").index($("#diff-items").find(".item-empty").eq(0));if($("#cmp_item_"+f).length<1||!d.hasCookie(f)){a.find(".item-empty").eq(0).replaceWith(d.TPL.item.process(h,[f,g]))}d.bindEvent("delHover").setCookie(f).btnStyle(f,"set");createCookie(d.cookieName+"_status","show",30,"/;domain=#");if(typeof e=="function"){e()}d.setContrastBtn("add");$("#pop-compare").attr("data-load","true")}})}return this},setContrastBtn:function(b){var a=readCookie(this.cookieName)||"",c=a.split(".").length;if(b=="add"){if(c>1){$("#goto-contrast").addClass("compare-active")}}if(b=="reduce"){if(c<2){$("#goto-contrast").removeClass("compare-active")}}},sortList:function(){var a=$("#diff-items"),c=[];a.find(".hasItem").each(function(){c.push($(this))});a.html("");for(var b=0;b<4;b++){if(b>c.length-1){$("#diff-items").append('<dl class="item-empty"><dt>'+(b+1)+"</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>")}else{$("#diff-items").append(c[b])}}this.bindEvent("delHover");return this},delContrastItem:function(c,a){if(a){$("#diff-items").html("");for(var b=1;b<5;b++){$("#diff-items").append('<dl class="item-empty"><dt>'+b+"</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>")}this.btnStyle(null,"del");$("#goto-contrast").removeClass("compare-active");$(".btn-compare-s").removeClass("btn-compare-s-active");$("#goto-contrast").unbind("click");createCookie(this.cookieName,"",-1,"/;domain=#")}else{$("#cmp_item_"+c).replaceWith('<dl class="item-empty"><dt>'+(parseInt($("#cmp_item_"+c).attr("fore"))+1)+"</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>");this.sortList().delCookie(c).btnStyle(c,"del");this.setContrastBtn("reduce")}return this},delCookie:function(c){if(this.hasCookie(c)&&c!==null){var b=readCookie(this.cookieName);var a=b.replace(new RegExp(c+".|."+c+"|"+c),"");createCookie(this.cookieName,a,0,"/;domain=#")}return this},setCookie:function(b){var a=readCookie(this.cookieName)||"";skuArr=a.split(".");if(!this.hasCookie(b)&&skuArr.length<4){if(!!a){skuArr.push(b);createCookie(this.cookieName,skuArr.join("."),1,"/;domain=#")}else{createCookie(this.cookieName,b,1,"/;domain=#")}}return this},hasCookie:function(a){if(!!a){return new RegExp(a).test(readCookie(this.cookieName))}},setRecentScroll:function(){var a=this;setTimeout(function(){$(".scroll-con").imgScroll({visible:4,speed:300,step:1,loop:false,direction:"x",evtType:"click",next:".sb-next",prev:".sb-prev",disableClass:"disabled"});a.bindEvent("cmpBtn")},500)},getRecent:function(c,b){var a=this;$.ajax({url:"#/lishiset.aspx?id="+c,dataType:"jsonp",success:function(d){if($("#scroll-con-inner p").length>0){$("#scroll-con-inner p").remove()}$("#scroll-con-inner").append(a.TPL.recentItem.process(d,c));if(a.hasCookie(c)){a.btnStyle(c,"set")}if(typeof b=="function"){b()}}})},setRecent:function(e){var b=readCookie("_recent"),d=!!b?b.split("."):[],c=this;if(d.length<1){$(".scroll-loading").text("\u6682\u65e0\u6d4f\u89c8\u8bb0\u5f55\u3002");return false}for(var a=0;a<d.length;a++){if((a+1)==d.length){c.getRecent(d[a],e)}else{c.getRecent(d[a])}}},setMessage:function(a){$(".pop-compare-tips").text(a).fadeIn();setTimeout(function(){$(".pop-compare-tips").fadeOut()},8000)}};
