/*
 * ContextMenu - jQuery plugin for right-click context menus
 *
 * Author: Chris Domigan
 * Contributors: Dan G. Switzer, II
 * Parts of this plugin are inspired by Joern Zaefferer's Tooltip plugin
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Version: r2
 * Date: 16 July 2007
 *
 * For documentation visit http://www.trendskitchens.co.nz/jquery/contextmenu/
 *
 */

!function(e){function n(n,l,h,c){var a=s[n];d=e("#"+a.id).find("ul:first").clone(!0),d.css(a.menuStyle).find("li").css(a.itemStyle).hover(function(){e(this).css(a.itemHoverStyle)},function(){e(this).css(a.itemStyle)}).find("img").css({verticalAlign:"middle",paddingRight:"2px"}),o.html(d),a.onShowMenu&&(o=a.onShowMenu(h,o)),e.each(a.bindings,function(n,i){e("#"+n,o).bind("click",function(e){t(),i(l,u)})});var r=0,f=0,g=window.innerWidth||document.documentElement.clientWidth,p=window.innerHeight||document.documentElement.clientHeight;h[a.eventPosX]+100>g&&(r=100),h[a.eventPosY]+a.offsetHeight>p&&(f=a.offsetHeight);var v=h[a.eventPosX]-r,m=Math.max(h[a.eventPosY]-f,0);m+a.offsetHeight>p&&o.find("ul").css({height:p,"overflow-y":"auto"}),o.css({left:v,top:m}).show(),a.shadow&&i.css({width:o.width(),height:o.height(),left:h.pageX+2-r,top:h.pageY+2-f}).show(),e(document).one("click",t)}function t(){o.hide(),i.hide()}var o,i,d,s,u,l={menuStyle:{listStyle:"none",padding:"1px",margin:"0px",backgroundColor:"#fff",border:"1px solid #999",width:"100px"},itemStyle:{margin:"0px",color:"#000",display:"block",cursor:"default",padding:"3px",border:"1px solid #fff",backgroundColor:"transparent"},itemHoverStyle:{border:"1px solid #0a246a",backgroundColor:"#b6bdd2"},eventPosX:"pageX",eventPosY:"pageY",shadow:!1,onContextMenu:null,onShowMenu:null};e.fn.contextMenu=function(t,d){o||(o=e('<div id="jqContextMenu"></div>').hide().css({position:"absolute",zIndex:"500"}).appendTo("body").bind("click",function(e){e.stopPropagation()})),i||(i=e('<div id="jqContextMenuShadow"></div>').css({backgroundColor:"#000",position:"absolute",opacity:.2,zIndex:499}).appendTo("body").hide()),d.offsetHeight||(d.offsetHeight=192),s=s||[],s.push({id:t,offsetHeight:d.offsetHeight,menuStyle:e.extend({},l.menuStyle,d.menuStyle||{}),itemStyle:e.extend({},l.itemStyle,d.itemStyle||{}),itemHoverStyle:e.extend({},l.itemHoverStyle,d.itemHoverStyle||{}),bindings:d.bindings||{},shadow:d.shadow||d.shadow===!1?d.shadow:l.shadow,onContextMenu:d.onContextMenu||l.onContextMenu,onShowMenu:d.onShowMenu||l.onShowMenu,eventPosX:d.eventPosX||l.eventPosX,eventPosY:d.eventPosY||l.eventPosY}),d.bindTarget||(d.bindTarget="contextmenu");var u=s.length-1;return e(this).bind(d.bindTarget,function(e){var t=!s[u].onContextMenu||s[u].onContextMenu(e);return t&&n(u,this,e,d),!1}),this},e.contextMenu={defaults:function(n){e.each(n,function(n,t){"object"==typeof t&&l[n]?e.extend(l[n],t):l[n]=t})}}}(jQuery),$(function(){$("div.contextMenu").hide()});