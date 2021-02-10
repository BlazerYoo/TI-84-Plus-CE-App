/*
 Copyright (C) 2020, Texas Instruments.  All rights reserved. 
*/
(function(){
'use strict';function e(){var c=window.innerHeight,b=window.innerWidth,d=document.getElementById("my_calculator");193.5<b&&512>b?(d.style.width=b+"px",d.style.height=2.33984375*b+"px"):193.5>b?(d.style.width="193.5px",d.style.height="452.759765625px"):512<b&&(d.style.width="512px",d.style.height="1198px");2.33984375*b>c&&453<c&&1198>c&&(c/=2.33984375,d.style.width=c+"px",d.style.height=2.33984375*c+"px")}
window.a=()=>{new window.TI84PCE({elementId:"my_calculator",ROMLocation:"../emulator/bin/No_AppsCE.h84statej",FaceplateLocation:"../emulator/images/TI84CE_touch.svg",KeyMappingFile:"",KeyHistBufferLength:"10",DisplayMode:"MATHPRINT",tabOrder:-1,AngleMode:"RAD",onInitialized:function(){e()}},6E4)};window.onload=function(){document.getElementsByTagName("body")[0].addEventListener("keydown",function(c){if(!0===c.ctrlKey&&!0===c.altKey&&"KeyV"===c.code){const b=document.getElementById("snackbar");b.className="show";b.innerHTML=window.versionString;b.onclick=()=>{b.classList.remove("show")}}});window.a()};window.onresize=function(){e()};window.versionString="1.0.1.17 beta"
}).call(this)
