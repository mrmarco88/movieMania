/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio !*/
!function(e,n,o){function a(e,n){return typeof e===n}function t(){var e,n,o,t,s,i,l;for(var u in c)if(c.hasOwnProperty(u)){if(e=[],n=c[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(t=a(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),r.push((t?"":"no-")+l.join("-"))}}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var c=[],i={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){c.push({name:e,fn:n,options:o})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=i,Modernizr=new Modernizr;var r=[],l=n.documentElement,u="svg"===l.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=s("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n}),t(),delete i.addTest,delete i.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);

$('document').ready(function(){
    if(document.querySelectorAll  && document.querySelectorAll('body:first-of-type')  ){
        console.log("Yes we have it");
        var myid = document.querySelectorAll('h3')[0];
        console.log("elementi h3 trovati: "+myid.length);
        console.log("myid[myid.length]: "+myid[myid.length-1]);
        var innertext = (myid.innerText===undefined) ? 'textContent' : 'innerText';
        console.log("innertext: "+innertext);
        //myid[innerText] = 'Errore!';
        console.log($("h3[id^='movie']").text());
        //$("h3[id^='movie']").text($("h3[id^='movie']").text()+' Testo aggiunto');
    }else{
        //fai qualcos'altro
    }
    
    
});

$(window).on('load', function() { 

// window.alert('page is loaded');
if(Modernizr.audio.wav){
    var snd = new Audio();
        snd.src = "Funky-audio-logo.wav";
      //  snd.play();
}
   /* setTimeout(function () {
        alert('page is loaded and 1 minute has passed');   
    }, 3000);*/
});
   