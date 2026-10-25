// Build version: 108667 (2026-10-25T14:05:08.667Z)
(()=>{var Bn=Object.create;var jt=Object.defineProperty;var Vn=Object.getOwnPropertyDescriptor;var Gn=Object.getOwnPropertyNames;var jn=Object.getPrototypeOf,Un=Object.prototype.hasOwnProperty;var zn=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var Kn=(o,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of Gn(t))!Un.call(o,l)&&l!==a&&jt(o,l,{get:()=>t[l],enumerable:!(r=Vn(t,l))||r.enumerable});return o};var Yn=(o,t,a)=>(a=o!=null?Bn(jn(o)):{},Kn(t||!o||!o.__esModule?jt(a,"default",{value:o,enumerable:!0}):a,o));var Yt=zn(it=>{(function(){"use strict";var o=function(){this.init()};o.prototype={init:function(){var e=this||t;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator=typeof window!="undefined"&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var n=this||t;if(e=parseFloat(e),n.ctx||b(),typeof e!="undefined"&&e>=0&&e<=1){if(n._volume=e,n._muted)return n;n.usingWebAudio&&n.masterGain.gain.setValueAtTime(e,t.ctx.currentTime);for(var i=0;i<n._howls.length;i++)if(!n._howls[i]._webAudio)for(var c=n._howls[i]._getSoundIds(),p=0;p<c.length;p++){var y=n._howls[i]._soundById(c[p]);y&&y._node&&(y._node.volume=y._volume*e)}return n}return n._volume},mute:function(e){var n=this||t;n.ctx||b(),n._muted=e,n.usingWebAudio&&n.masterGain.gain.setValueAtTime(e?0:n._volume,t.ctx.currentTime);for(var i=0;i<n._howls.length;i++)if(!n._howls[i]._webAudio)for(var c=n._howls[i]._getSoundIds(),p=0;p<c.length;p++){var y=n._howls[i]._soundById(c[p]);y&&y._node&&(y._node.muted=e?!0:y._muted)}return n},stop:function(){for(var e=this||t,n=0;n<e._howls.length;n++)e._howls[n].stop();return e},unload:function(){for(var e=this||t,n=e._howls.length-1;n>=0;n--)e._howls[n].unload();return e.usingWebAudio&&e.ctx&&typeof e.ctx.close!="undefined"&&(e.ctx.close(),e.ctx=null,b()),e},codecs:function(e){return(this||t)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||t;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio)if(typeof Audio!="undefined")try{var n=new Audio;typeof n.oncanplaythrough=="undefined"&&(e._canPlayEvent="canplay")}catch{e.noAudio=!0}else e.noAudio=!0;try{var n=new Audio;n.muted&&(e.noAudio=!0)}catch{}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||t,n=null;try{n=typeof Audio!="undefined"?new Audio:null}catch{return e}if(!n||typeof n.canPlayType!="function")return e;var i=n.canPlayType("audio/mpeg;").replace(/^no$/,""),c=e._navigator?e._navigator.userAgent:"",p=c.match(/OPR\/(\d+)/g),y=p&&parseInt(p[0].split("/")[1],10)<33,g=c.indexOf("Safari")!==-1&&c.indexOf("Chrome")===-1,A=c.match(/Version\/(.*?) /),q=g&&A&&parseInt(A[1],10)<15;return e._codecs={mp3:!!(!y&&(i||n.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!i,opus:!!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(n.canPlayType('audio/wav; codecs="1"')||n.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!n.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!n.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(n.canPlayType("audio/x-m4a;")||n.canPlayType("audio/m4a;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(n.canPlayType("audio/x-m4b;")||n.canPlayType("audio/m4b;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(n.canPlayType("audio/x-mp4;")||n.canPlayType("audio/mp4;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!q&&n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!q&&n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(n.canPlayType("audio/x-flac;")||n.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||t;if(!(e._audioUnlocked||!e.ctx)){e._audioUnlocked=!1,e.autoUnlock=!1,!e._mobileUnloaded&&e.ctx.sampleRate!==44100&&(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var n=function(i){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var c=new Audio;c._unlocked=!0,e._releaseHtml5Audio(c)}catch{e.noAudio=!0;break}for(var p=0;p<e._howls.length;p++)if(!e._howls[p]._webAudio)for(var y=e._howls[p]._getSoundIds(),g=0;g<y.length;g++){var A=e._howls[p]._soundById(y[g]);A&&A._node&&!A._node._unlocked&&(A._node._unlocked=!0,A._node.load())}e._autoResume();var q=e.ctx.createBufferSource();q.buffer=e._scratchBuffer,q.connect(e.ctx.destination),typeof q.start=="undefined"?q.noteOn(0):q.start(0),typeof e.ctx.resume=="function"&&e.ctx.resume(),q.onended=function(){q.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",n,!0),document.removeEventListener("touchend",n,!0),document.removeEventListener("click",n,!0),document.removeEventListener("keydown",n,!0);for(var N=0;N<e._howls.length;N++)e._howls[N]._emit("unlock")}};return document.addEventListener("touchstart",n,!0),document.addEventListener("touchend",n,!0),document.addEventListener("click",n,!0),document.addEventListener("keydown",n,!0),e}},_obtainHtml5Audio:function(){var e=this||t;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var n=new Audio().play();return n&&typeof Promise!="undefined"&&(n instanceof Promise||typeof n.then=="function")&&n.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var n=this||t;return e._unlocked&&n._html5AudioPool.push(e),n},_autoSuspend:function(){var e=this;if(!(!e.autoSuspend||!e.ctx||typeof e.ctx.suspend=="undefined"||!t.usingWebAudio)){for(var n=0;n<e._howls.length;n++)if(e._howls[n]._webAudio){for(var i=0;i<e._howls[n]._sounds.length;i++)if(!e._howls[n]._sounds[i]._paused)return e}return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var c=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(c,c)}},3e4),e}},_autoResume:function(){var e=this;if(!(!e.ctx||typeof e.ctx.resume=="undefined"||!t.usingWebAudio))return e.state==="running"&&e.ctx.state!=="interrupted"&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):e.state==="suspended"||e.state==="running"&&e.ctx.state==="interrupted"?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):e.state==="suspending"&&(e._resumeAfterSuspend=!0),e}};var t=new o,a=function(e){var n=this;if(!e.src||e.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}n.init(e)};a.prototype={init:function(e){var n=this;return t.ctx||b(),n._autoplay=e.autoplay||!1,n._format=typeof e.format!="string"?e.format:[e.format],n._html5=e.html5||!1,n._muted=e.mute||!1,n._loop=e.loop||!1,n._pool=e.pool||5,n._preload=typeof e.preload=="boolean"||e.preload==="metadata"?e.preload:!0,n._rate=e.rate||1,n._sprite=e.sprite||{},n._src=typeof e.src!="string"?e.src:[e.src],n._volume=e.volume!==void 0?e.volume:1,n._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:e.xhr&&e.xhr.withCredentials?e.xhr.withCredentials:!1},n._duration=0,n._state="unloaded",n._sounds=[],n._endTimers={},n._queue=[],n._playLock=!1,n._onend=e.onend?[{fn:e.onend}]:[],n._onfade=e.onfade?[{fn:e.onfade}]:[],n._onload=e.onload?[{fn:e.onload}]:[],n._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],n._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],n._onpause=e.onpause?[{fn:e.onpause}]:[],n._onplay=e.onplay?[{fn:e.onplay}]:[],n._onstop=e.onstop?[{fn:e.onstop}]:[],n._onmute=e.onmute?[{fn:e.onmute}]:[],n._onvolume=e.onvolume?[{fn:e.onvolume}]:[],n._onrate=e.onrate?[{fn:e.onrate}]:[],n._onseek=e.onseek?[{fn:e.onseek}]:[],n._onunlock=e.onunlock?[{fn:e.onunlock}]:[],n._onresume=[],n._webAudio=t.usingWebAudio&&!n._html5,typeof t.ctx!="undefined"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(n),n._autoplay&&n._queue.push({event:"play",action:function(){n.play()}}),n._preload&&n._preload!=="none"&&n.load(),n},load:function(){var e=this,n=null;if(t.noAudio){e._emit("loaderror",null,"No audio support.");return}typeof e._src=="string"&&(e._src=[e._src]);for(var i=0;i<e._src.length;i++){var c,p;if(e._format&&e._format[i])c=e._format[i];else{if(p=e._src[i],typeof p!="string"){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}c=/^data:audio\/([^;,]+);/i.exec(p),c||(c=/\.([^.]+)$/.exec(p.split("?",1)[0])),c&&(c=c[1].toLowerCase())}if(c||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),c&&t.codecs(c)){n=e._src[i];break}}if(!n){e._emit("loaderror",null,"No codec support for selected audio sources.");return}return e._src=n,e._state="loading",window.location.protocol==="https:"&&n.slice(0,5)==="http:"&&(e._html5=!0,e._webAudio=!1),new r(e),e._webAudio&&f(e),e},play:function(e,n){var i=this,c=null;if(typeof e=="number")c=e,e=null;else{if(typeof e=="string"&&i._state==="loaded"&&!i._sprite[e])return null;if(typeof e=="undefined"&&(e="__default",!i._playLock)){for(var p=0,y=0;y<i._sounds.length;y++)i._sounds[y]._paused&&!i._sounds[y]._ended&&(p++,c=i._sounds[y]._id);p===1?e=null:c=null}}var g=c?i._soundById(c):i._inactiveSound();if(!g)return null;if(c&&!e&&(e=g._sprite||"__default"),i._state!=="loaded"){g._sprite=e,g._ended=!1;var A=g._id;return i._queue.push({event:"play",action:function(){i.play(A)}}),A}if(c&&!g._paused)return n||i._loadQueue("play"),g._id;i._webAudio&&t._autoResume();var q=Math.max(0,g._seek>0?g._seek:i._sprite[e][0]/1e3),N=Math.max(0,(i._sprite[e][0]+i._sprite[e][1])/1e3-q),M=N*1e3/Math.abs(g._rate),R=i._sprite[e][0]/1e3,G=(i._sprite[e][0]+i._sprite[e][1])/1e3;g._sprite=e,g._ended=!1;var U=function(){g._paused=!1,g._seek=q,g._start=R,g._stop=G,g._loop=!!(g._loop||i._sprite[e][2])};if(q>=G){i._ended(g);return}var D=g._node;if(i._webAudio){var j=function(){i._playLock=!1,U(),i._refreshBuffer(g);var C=g._muted||i._muted?0:g._volume;D.gain.setValueAtTime(C,t.ctx.currentTime),g._playStart=t.ctx.currentTime,typeof D.bufferSource.start=="undefined"?g._loop?D.bufferSource.noteGrainOn(0,q,86400):D.bufferSource.noteGrainOn(0,q,N):g._loop?D.bufferSource.start(0,q,86400):D.bufferSource.start(0,q,N),M!==1/0&&(i._endTimers[g._id]=setTimeout(i._ended.bind(i,g),M)),n||setTimeout(function(){i._emit("play",g._id),i._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?j():(i._playLock=!0,i.once("resume",j),i._clearTimer(g._id))}else{var Y=function(){D.currentTime=q,D.muted=g._muted||i._muted||t._muted||D.muted,D.volume=g._volume*t.volume(),D.playbackRate=g._rate;try{var C=D.play();if(C&&typeof Promise!="undefined"&&(C instanceof Promise||typeof C.then=="function")?(i._playLock=!0,U(),C.then(function(){i._playLock=!1,D._unlocked=!0,n?i._loadQueue():i._emit("play",g._id)}).catch(function(){i._playLock=!1,i._emit("playerror",g._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),g._ended=!0,g._paused=!0})):n||(i._playLock=!1,U(),i._emit("play",g._id)),D.playbackRate=g._rate,D.paused){i._emit("playerror",g._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}e!=="__default"||g._loop?i._endTimers[g._id]=setTimeout(i._ended.bind(i,g),M):(i._endTimers[g._id]=function(){i._ended(g),D.removeEventListener("ended",i._endTimers[g._id],!1)},D.addEventListener("ended",i._endTimers[g._id],!1))}catch(_){i._emit("playerror",g._id,_)}};D.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(D.src=i._src,D.load());var te=window&&window.ejecta||!D.readyState&&t._navigator.isCocoonJS;if(D.readyState>=3||te)Y();else{i._playLock=!0,i._state="loading";var O=function(){i._state="loaded",Y(),D.removeEventListener(t._canPlayEvent,O,!1)};D.addEventListener(t._canPlayEvent,O,!1),i._clearTimer(g._id)}}return g._id},pause:function(e){var n=this;if(n._state!=="loaded"||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var i=n._getSoundIds(e),c=0;c<i.length;c++){n._clearTimer(i[c]);var p=n._soundById(i[c]);if(p&&!p._paused&&(p._seek=n.seek(i[c]),p._rateSeek=0,p._paused=!0,n._stopFade(i[c]),p._node))if(n._webAudio){if(!p._node.bufferSource)continue;typeof p._node.bufferSource.stop=="undefined"?p._node.bufferSource.noteOff(0):p._node.bufferSource.stop(0),n._cleanBuffer(p._node)}else(!isNaN(p._node.duration)||p._node.duration===1/0)&&p._node.pause();arguments[1]||n._emit("pause",p?p._id:null)}return n},stop:function(e,n){var i=this;if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"stop",action:function(){i.stop(e)}}),i;for(var c=i._getSoundIds(e),p=0;p<c.length;p++){i._clearTimer(c[p]);var y=i._soundById(c[p]);y&&(y._seek=y._start||0,y._rateSeek=0,y._paused=!0,y._ended=!0,i._stopFade(c[p]),y._node&&(i._webAudio?y._node.bufferSource&&(typeof y._node.bufferSource.stop=="undefined"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),i._cleanBuffer(y._node)):(!isNaN(y._node.duration)||y._node.duration===1/0)&&(y._node.currentTime=y._start||0,y._node.pause(),y._node.duration===1/0&&i._clearSound(y._node))),n||i._emit("stop",y._id))}return i},mute:function(e,n){var i=this;if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"mute",action:function(){i.mute(e,n)}}),i;if(typeof n=="undefined")if(typeof e=="boolean")i._muted=e;else return i._muted;for(var c=i._getSoundIds(n),p=0;p<c.length;p++){var y=i._soundById(c[p]);y&&(y._muted=e,y._interval&&i._stopFade(y._id),i._webAudio&&y._node?y._node.gain.setValueAtTime(e?0:y._volume,t.ctx.currentTime):y._node&&(y._node.muted=t._muted?!0:e),i._emit("mute",y._id))}return i},volume:function(){var e=this,n=arguments,i,c;if(n.length===0)return e._volume;if(n.length===1||n.length===2&&typeof n[1]=="undefined"){var p=e._getSoundIds(),y=p.indexOf(n[0]);y>=0?c=parseInt(n[0],10):i=parseFloat(n[0])}else n.length>=2&&(i=parseFloat(n[0]),c=parseInt(n[1],10));var g;if(typeof i!="undefined"&&i>=0&&i<=1){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"volume",action:function(){e.volume.apply(e,n)}}),e;typeof c=="undefined"&&(e._volume=i),c=e._getSoundIds(c);for(var A=0;A<c.length;A++)g=e._soundById(c[A]),g&&(g._volume=i,n[2]||e._stopFade(c[A]),e._webAudio&&g._node&&!g._muted?g._node.gain.setValueAtTime(i,t.ctx.currentTime):g._node&&!g._muted&&(g._node.volume=i*t.volume()),e._emit("volume",g._id))}else return g=c?e._soundById(c):e._sounds[0],g?g._volume:0;return e},fade:function(e,n,i,c){var p=this;if(p._state!=="loaded"||p._playLock)return p._queue.push({event:"fade",action:function(){p.fade(e,n,i,c)}}),p;e=Math.min(Math.max(0,parseFloat(e)),1),n=Math.min(Math.max(0,parseFloat(n)),1),i=parseFloat(i),p.volume(e,c);for(var y=p._getSoundIds(c),g=0;g<y.length;g++){var A=p._soundById(y[g]);if(A){if(c||p._stopFade(y[g]),p._webAudio&&!A._muted){var q=t.ctx.currentTime,N=q+i/1e3;A._volume=e,A._node.gain.setValueAtTime(e,q),A._node.gain.linearRampToValueAtTime(n,N)}p._startFadeInterval(A,e,n,i,y[g],typeof c=="undefined")}}return p},_startFadeInterval:function(e,n,i,c,p,y){var g=this,A=n,q=i-n,N=Math.abs(q/.01),M=Math.max(4,N>0?c/N:c),R=Date.now();e._fadeTo=i,e._interval=setInterval(function(){var G=(Date.now()-R)/c;R=Date.now(),A+=q*G,A=Math.round(A*100)/100,q<0?A=Math.max(i,A):A=Math.min(i,A),g._webAudio?e._volume=A:g.volume(A,e._id,!0),y&&(g._volume=A),(i<n&&A<=i||i>n&&A>=i)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,g.volume(i,e._id),g._emit("fade",e._id))},M)},_stopFade:function(e){var n=this,i=n._soundById(e);return i&&i._interval&&(n._webAudio&&i._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(i._interval),i._interval=null,n.volume(i._fadeTo,e),i._fadeTo=null,n._emit("fade",e)),n},loop:function(){var e=this,n=arguments,i,c,p;if(n.length===0)return e._loop;if(n.length===1)if(typeof n[0]=="boolean")i=n[0],e._loop=i;else return p=e._soundById(parseInt(n[0],10)),p?p._loop:!1;else n.length===2&&(i=n[0],c=parseInt(n[1],10));for(var y=e._getSoundIds(c),g=0;g<y.length;g++)p=e._soundById(y[g]),p&&(p._loop=i,e._webAudio&&p._node&&p._node.bufferSource&&(p._node.bufferSource.loop=i,i&&(p._node.bufferSource.loopStart=p._start||0,p._node.bufferSource.loopEnd=p._stop,e.playing(y[g])&&(e.pause(y[g],!0),e.play(y[g],!0)))));return e},rate:function(){var e=this,n=arguments,i,c;if(n.length===0)c=e._sounds[0]._id;else if(n.length===1){var p=e._getSoundIds(),y=p.indexOf(n[0]);y>=0?c=parseInt(n[0],10):i=parseFloat(n[0])}else n.length===2&&(i=parseFloat(n[0]),c=parseInt(n[1],10));var g;if(typeof i=="number"){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"rate",action:function(){e.rate.apply(e,n)}}),e;typeof c=="undefined"&&(e._rate=i),c=e._getSoundIds(c);for(var A=0;A<c.length;A++)if(g=e._soundById(c[A]),g){e.playing(c[A])&&(g._rateSeek=e.seek(c[A]),g._playStart=e._webAudio?t.ctx.currentTime:g._playStart),g._rate=i,e._webAudio&&g._node&&g._node.bufferSource?g._node.bufferSource.playbackRate.setValueAtTime(i,t.ctx.currentTime):g._node&&(g._node.playbackRate=i);var q=e.seek(c[A]),N=(e._sprite[g._sprite][0]+e._sprite[g._sprite][1])/1e3-q,M=N*1e3/Math.abs(g._rate);(e._endTimers[c[A]]||!g._paused)&&(e._clearTimer(c[A]),e._endTimers[c[A]]=setTimeout(e._ended.bind(e,g),M)),e._emit("rate",g._id)}}else return g=e._soundById(c),g?g._rate:e._rate;return e},seek:function(){var e=this,n=arguments,i,c;if(n.length===0)e._sounds.length&&(c=e._sounds[0]._id);else if(n.length===1){var p=e._getSoundIds(),y=p.indexOf(n[0]);y>=0?c=parseInt(n[0],10):e._sounds.length&&(c=e._sounds[0]._id,i=parseFloat(n[0]))}else n.length===2&&(i=parseFloat(n[0]),c=parseInt(n[1],10));if(typeof c=="undefined")return 0;if(typeof i=="number"&&(e._state!=="loaded"||e._playLock))return e._queue.push({event:"seek",action:function(){e.seek.apply(e,n)}}),e;var g=e._soundById(c);if(g)if(typeof i=="number"&&i>=0){var A=e.playing(c);A&&e.pause(c,!0),g._seek=i,g._ended=!1,e._clearTimer(c),!e._webAudio&&g._node&&!isNaN(g._node.duration)&&(g._node.currentTime=i);var q=function(){A&&e.play(c,!0),e._emit("seek",c)};if(A&&!e._webAudio){var N=function(){e._playLock?setTimeout(N,0):q()};setTimeout(N,0)}else q()}else if(e._webAudio){var M=e.playing(c)?t.ctx.currentTime-g._playStart:0,R=g._rateSeek?g._rateSeek-g._seek:0;return g._seek+(R+M*Math.abs(g._rate))}else return g._node.currentTime;return e},playing:function(e){var n=this;if(typeof e=="number"){var i=n._soundById(e);return i?!i._paused:!1}for(var c=0;c<n._sounds.length;c++)if(!n._sounds[c]._paused)return!0;return!1},duration:function(e){var n=this,i=n._duration,c=n._soundById(e);return c&&(i=n._sprite[c._sprite][1]/1e3),i},state:function(){return this._state},unload:function(){for(var e=this,n=e._sounds,i=0;i<n.length;i++)n[i]._paused||e.stop(n[i]._id),e._webAudio||(e._clearSound(n[i]._node),n[i]._node.removeEventListener("error",n[i]._errorFn,!1),n[i]._node.removeEventListener(t._canPlayEvent,n[i]._loadFn,!1),n[i]._node.removeEventListener("ended",n[i]._endFn,!1),t._releaseHtml5Audio(n[i]._node)),delete n[i]._node,e._clearTimer(n[i]._id);var c=t._howls.indexOf(e);c>=0&&t._howls.splice(c,1);var p=!0;for(i=0;i<t._howls.length;i++)if(t._howls[i]._src===e._src||e._src.indexOf(t._howls[i]._src)>=0){p=!1;break}return l&&p&&delete l[e._src],t.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,i,c){var p=this,y=p["_on"+e];return typeof n=="function"&&y.push(c?{id:i,fn:n,once:c}:{id:i,fn:n}),p},off:function(e,n,i){var c=this,p=c["_on"+e],y=0;if(typeof n=="number"&&(i=n,n=null),n||i)for(y=0;y<p.length;y++){var g=i===p[y].id;if(n===p[y].fn&&g||!n&&g){p.splice(y,1);break}}else if(e)c["_on"+e]=[];else{var A=Object.keys(c);for(y=0;y<A.length;y++)A[y].indexOf("_on")===0&&Array.isArray(c[A[y]])&&(c[A[y]]=[])}return c},once:function(e,n,i){var c=this;return c.on(e,n,i,1),c},_emit:function(e,n,i){for(var c=this,p=c["_on"+e],y=p.length-1;y>=0;y--)(!p[y].id||p[y].id===n||e==="load")&&(setTimeout(function(g){g.call(this,n,i)}.bind(c,p[y].fn),0),p[y].once&&c.off(e,p[y].fn,p[y].id));return c._loadQueue(e),c},_loadQueue:function(e){var n=this;if(n._queue.length>0){var i=n._queue[0];i.event===e&&(n._queue.shift(),n._loadQueue()),e||i.action()}return n},_ended:function(e){var n=this,i=e._sprite;if(!n._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(n._ended.bind(n,e),100),n;var c=!!(e._loop||n._sprite[i][2]);if(n._emit("end",e._id),!n._webAudio&&c&&n.stop(e._id,!0).play(e._id),n._webAudio&&c){n._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=t.ctx.currentTime;var p=(e._stop-e._start)*1e3/Math.abs(e._rate);n._endTimers[e._id]=setTimeout(n._ended.bind(n,e),p)}return n._webAudio&&!c&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,n._clearTimer(e._id),n._cleanBuffer(e._node),t._autoSuspend()),!n._webAudio&&!c&&n.stop(e._id,!0),n},_clearTimer:function(e){var n=this;if(n._endTimers[e]){if(typeof n._endTimers[e]!="function")clearTimeout(n._endTimers[e]);else{var i=n._soundById(e);i&&i._node&&i._node.removeEventListener("ended",n._endTimers[e],!1)}delete n._endTimers[e]}return n},_soundById:function(e){for(var n=this,i=0;i<n._sounds.length;i++)if(e===n._sounds[i]._id)return n._sounds[i];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new r(e)},_drain:function(){var e=this,n=e._pool,i=0,c=0;if(!(e._sounds.length<n)){for(c=0;c<e._sounds.length;c++)e._sounds[c]._ended&&i++;for(c=e._sounds.length-1;c>=0;c--){if(i<=n)return;e._sounds[c]._ended&&(e._webAudio&&e._sounds[c]._node&&e._sounds[c]._node.disconnect(0),e._sounds.splice(c,1),i--)}}},_getSoundIds:function(e){var n=this;if(typeof e=="undefined"){for(var i=[],c=0;c<n._sounds.length;c++)i.push(n._sounds[c]._id);return i}else return[e]},_refreshBuffer:function(e){var n=this;return e._node.bufferSource=t.ctx.createBufferSource(),e._node.bufferSource.buffer=l[n._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,t.ctx.currentTime),n},_cleanBuffer:function(e){var n=this,i=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!e.bufferSource)return n;if(t._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),i))try{e.bufferSource.buffer=t._scratchBuffer}catch{}return e.bufferSource=null,n},_clearSound:function(e){var n=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);n||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(e){this._parent=e,this.init()};r.prototype={init:function(){var e=this,n=e._parent;return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._rate=n._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++t._counter,n._sounds.push(e),e.create(),e},create:function(){var e=this,n=e._parent,i=t._muted||e._muted||e._parent._muted?0:e._volume;return n._webAudio?(e._node=typeof t.ctx.createGain=="undefined"?t.ctx.createGainNode():t.ctx.createGain(),e._node.gain.setValueAtTime(i,t.ctx.currentTime),e._node.paused=!0,e._node.connect(t.masterGain)):t.noAudio||(e._node=t._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(t._canPlayEvent,e._loadFn,!1),e._endFn=e._endListener.bind(e),e._node.addEventListener("ended",e._endFn,!1),e._node.src=n._src,e._node.preload=n._preload===!0?"auto":n._preload,e._node.volume=i*t.volume(),e._node.load()),e},reset:function(){var e=this,n=e._parent;return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._rate=n._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++t._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,n=e._parent;n._duration=Math.ceil(e._node.duration*10)/10,Object.keys(n._sprite).length===0&&(n._sprite={__default:[0,n._duration*1e3]}),n._state!=="loaded"&&(n._state="loaded",n._emit("load"),n._loadQueue()),e._node.removeEventListener(t._canPlayEvent,e._loadFn,!1)},_endListener:function(){var e=this,n=e._parent;n._duration===1/0&&(n._duration=Math.ceil(e._node.duration*10)/10,n._sprite.__default[1]===1/0&&(n._sprite.__default[1]=n._duration*1e3),n._ended(e)),e._node.removeEventListener("ended",e._endFn,!1)}};var l={},f=function(e){var n=e._src;if(l[n]){e._duration=l[n].duration,v(e);return}if(/^data:[^;]+;base64,/.test(n)){for(var i=atob(n.split(",")[1]),c=new Uint8Array(i.length),p=0;p<i.length;++p)c[p]=i.charCodeAt(p);h(c.buffer,e)}else{var y=new XMLHttpRequest;y.open(e._xhr.method,n,!0),y.withCredentials=e._xhr.withCredentials,y.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(g){y.setRequestHeader(g,e._xhr.headers[g])}),y.onload=function(){var g=(y.status+"")[0];if(g!=="0"&&g!=="2"&&g!=="3"){e._emit("loaderror",null,"Failed loading audio file with status: "+y.status+".");return}h(y.response,e)},y.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete l[n],e.load())},m(y)}},m=function(e){try{e.send()}catch{e.onerror()}},h=function(e,n){var i=function(){n._emit("loaderror",null,"Decoding audio data failed.")},c=function(p){p&&n._sounds.length>0?(l[n._src]=p,v(n,p)):i()};typeof Promise!="undefined"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(e).then(c).catch(i):t.ctx.decodeAudioData(e,c,i)},v=function(e,n){n&&!e._duration&&(e._duration=n.duration),Object.keys(e._sprite).length===0&&(e._sprite={__default:[0,e._duration*1e3]}),e._state!=="loaded"&&(e._state="loaded",e._emit("load"),e._loadQueue())},b=function(){if(t.usingWebAudio){try{typeof AudioContext!="undefined"?t.ctx=new AudioContext:typeof webkitAudioContext!="undefined"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),n=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),i=n?parseInt(n[1],10):null;if(e&&i&&i<9){var c=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!c&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain=="undefined"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};typeof define=="function"&&define.amd&&define([],function(){return{Howler:t,Howl:a}}),typeof it!="undefined"&&(it.Howler=t,it.Howl=a),typeof global!="undefined"?(global.HowlerGlobal=o,global.Howler=t,global.Howl=a,global.Sound=r):typeof window!="undefined"&&(window.HowlerGlobal=o,window.Howler=t,window.Howl=a,window.Sound=r)})();(function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var a=this;if(!a.ctx||!a.ctx.listener)return a;for(var r=a._howls.length-1;r>=0;r--)a._howls[r].stereo(t);return a},HowlerGlobal.prototype.pos=function(t,a,r){var l=this;if(!l.ctx||!l.ctx.listener)return l;if(a=typeof a!="number"?l._pos[1]:a,r=typeof r!="number"?l._pos[2]:r,typeof t=="number")l._pos=[t,a,r],typeof l.ctx.listener.positionX!="undefined"?(l.ctx.listener.positionX.setTargetAtTime(l._pos[0],Howler.ctx.currentTime,.1),l.ctx.listener.positionY.setTargetAtTime(l._pos[1],Howler.ctx.currentTime,.1),l.ctx.listener.positionZ.setTargetAtTime(l._pos[2],Howler.ctx.currentTime,.1)):l.ctx.listener.setPosition(l._pos[0],l._pos[1],l._pos[2]);else return l._pos;return l},HowlerGlobal.prototype.orientation=function(t,a,r,l,f,m){var h=this;if(!h.ctx||!h.ctx.listener)return h;var v=h._orientation;if(a=typeof a!="number"?v[1]:a,r=typeof r!="number"?v[2]:r,l=typeof l!="number"?v[3]:l,f=typeof f!="number"?v[4]:f,m=typeof m!="number"?v[5]:m,typeof t=="number")h._orientation=[t,a,r,l,f,m],typeof h.ctx.listener.forwardX!="undefined"?(h.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),h.ctx.listener.forwardY.setTargetAtTime(a,Howler.ctx.currentTime,.1),h.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),h.ctx.listener.upX.setTargetAtTime(l,Howler.ctx.currentTime,.1),h.ctx.listener.upY.setTargetAtTime(f,Howler.ctx.currentTime,.1),h.ctx.listener.upZ.setTargetAtTime(m,Howler.ctx.currentTime,.1)):h.ctx.listener.setOrientation(t,a,r,l,f,m);else return v;return h},Howl.prototype.init=(function(t){return function(a){var r=this;return r._orientation=a.orientation||[1,0,0],r._stereo=a.stereo||null,r._pos=a.pos||null,r._pannerAttr={coneInnerAngle:typeof a.coneInnerAngle!="undefined"?a.coneInnerAngle:360,coneOuterAngle:typeof a.coneOuterAngle!="undefined"?a.coneOuterAngle:360,coneOuterGain:typeof a.coneOuterGain!="undefined"?a.coneOuterGain:0,distanceModel:typeof a.distanceModel!="undefined"?a.distanceModel:"inverse",maxDistance:typeof a.maxDistance!="undefined"?a.maxDistance:1e4,panningModel:typeof a.panningModel!="undefined"?a.panningModel:"HRTF",refDistance:typeof a.refDistance!="undefined"?a.refDistance:1,rolloffFactor:typeof a.rolloffFactor!="undefined"?a.rolloffFactor:1},r._onstereo=a.onstereo?[{fn:a.onstereo}]:[],r._onpos=a.onpos?[{fn:a.onpos}]:[],r._onorientation=a.onorientation?[{fn:a.onorientation}]:[],t.call(this,a)}})(Howl.prototype.init),Howl.prototype.stereo=function(t,a){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,a)}}),r;var l=typeof Howler.ctx.createStereoPanner=="undefined"?"spatial":"stereo";if(typeof a=="undefined")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var f=r._getSoundIds(a),m=0;m<f.length;m++){var h=r._soundById(f[m]);if(h)if(typeof t=="number")h._stereo=t,h._pos=[t,0,0],h._node&&(h._pannerAttr.panningModel="equalpower",(!h._panner||!h._panner.pan)&&o(h,l),l==="spatial"?typeof h._panner.positionX!="undefined"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):h._panner.setPosition(t,0,0):h._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",h._id);else return h._stereo}return r},Howl.prototype.pos=function(t,a,r,l){var f=this;if(!f._webAudio)return f;if(f._state!=="loaded")return f._queue.push({event:"pos",action:function(){f.pos(t,a,r,l)}}),f;if(a=typeof a!="number"?0:a,r=typeof r!="number"?-.5:r,typeof l=="undefined")if(typeof t=="number")f._pos=[t,a,r];else return f._pos;for(var m=f._getSoundIds(l),h=0;h<m.length;h++){var v=f._soundById(m[h]);if(v)if(typeof t=="number")v._pos=[t,a,r],v._node&&((!v._panner||v._panner.pan)&&o(v,"spatial"),typeof v._panner.positionX!="undefined"?(v._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),v._panner.positionY.setValueAtTime(a,Howler.ctx.currentTime),v._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):v._panner.setPosition(t,a,r)),f._emit("pos",v._id);else return v._pos}return f},Howl.prototype.orientation=function(t,a,r,l){var f=this;if(!f._webAudio)return f;if(f._state!=="loaded")return f._queue.push({event:"orientation",action:function(){f.orientation(t,a,r,l)}}),f;if(a=typeof a!="number"?f._orientation[1]:a,r=typeof r!="number"?f._orientation[2]:r,typeof l=="undefined")if(typeof t=="number")f._orientation=[t,a,r];else return f._orientation;for(var m=f._getSoundIds(l),h=0;h<m.length;h++){var v=f._soundById(m[h]);if(v)if(typeof t=="number")v._orientation=[t,a,r],v._node&&(v._panner||(v._pos||(v._pos=f._pos||[0,0,-.5]),o(v,"spatial")),typeof v._panner.orientationX!="undefined"?(v._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),v._panner.orientationY.setValueAtTime(a,Howler.ctx.currentTime),v._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):v._panner.setOrientation(t,a,r)),f._emit("orientation",v._id);else return v._orientation}return f},Howl.prototype.pannerAttr=function(){var t=this,a=arguments,r,l,f;if(!t._webAudio)return t;if(a.length===0)return t._pannerAttr;if(a.length===1)if(typeof a[0]=="object")r=a[0],typeof l=="undefined"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle!="undefined"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle!="undefined"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain!="undefined"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel!="undefined"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance!="undefined"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance!="undefined"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor!="undefined"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel!="undefined"?r.pannerAttr.panningModel:t._panningModel});else return f=t._soundById(parseInt(a[0],10)),f?f._pannerAttr:t._pannerAttr;else a.length===2&&(r=a[0],l=parseInt(a[1],10));for(var m=t._getSoundIds(l),h=0;h<m.length;h++)if(f=t._soundById(m[h]),f){var v=f._pannerAttr;v={coneInnerAngle:typeof r.coneInnerAngle!="undefined"?r.coneInnerAngle:v.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle!="undefined"?r.coneOuterAngle:v.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain!="undefined"?r.coneOuterGain:v.coneOuterGain,distanceModel:typeof r.distanceModel!="undefined"?r.distanceModel:v.distanceModel,maxDistance:typeof r.maxDistance!="undefined"?r.maxDistance:v.maxDistance,refDistance:typeof r.refDistance!="undefined"?r.refDistance:v.refDistance,rolloffFactor:typeof r.rolloffFactor!="undefined"?r.rolloffFactor:v.rolloffFactor,panningModel:typeof r.panningModel!="undefined"?r.panningModel:v.panningModel};var b=f._panner;b||(f._pos||(f._pos=t._pos||[0,0,-.5]),o(f,"spatial"),b=f._panner),b.coneInnerAngle=v.coneInnerAngle,b.coneOuterAngle=v.coneOuterAngle,b.coneOuterGain=v.coneOuterGain,b.distanceModel=v.distanceModel,b.maxDistance=v.maxDistance,b.refDistance=v.refDistance,b.rolloffFactor=v.rolloffFactor,b.panningModel=v.panningModel}return t},Sound.prototype.init=(function(t){return function(){var a=this,r=a._parent;a._orientation=r._orientation,a._stereo=r._stereo,a._pos=r._pos,a._pannerAttr=r._pannerAttr,t.call(this),a._stereo?r.stereo(a._stereo):a._pos&&r.pos(a._pos[0],a._pos[1],a._pos[2],a._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(t){return function(){var a=this,r=a._parent;return a._orientation=r._orientation,a._stereo=r._stereo,a._pos=r._pos,a._pannerAttr=r._pannerAttr,a._stereo?r.stereo(a._stereo):a._pos?r.pos(a._pos[0],a._pos[1],a._pos[2],a._id):a._panner&&(a._panner.disconnect(0),a._panner=void 0,r._refreshBuffer(a)),t.call(this)}})(Sound.prototype.reset);var o=function(t,a){a=a||"spatial",a==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX!="undefined"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX!="undefined"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()});function Ut(o,t,a){return Math.min(a,Math.max(t,o))}function zt(o){let t=[...o].sort((r,l)=>r-l),a=t.length>>1;return t.length%2?t[a]:(t[a-1]+t[a])/2}function ht(o,t,a,r=8e3){return new Promise(l=>{if(a())return l(!0);let f=null,m=b=>{clearTimeout(f),o.removeEventListener(t,h),o.removeEventListener("error",v),l(b)},h=()=>{a()&&m(!0)},v=()=>m(!1);o.addEventListener(t,h),o.addEventListener("error",v),f=setTimeout(()=>m(a()),r)})}async function Xn(o,t){return await ht(o,"loadedmetadata",()=>o.readyState>=1)?(Math.abs(o.currentTime-t)>.001&&(o.currentTime=t),await ht(o,"seeked",()=>!o.seeking),await ht(o,"canplaythrough",()=>o.readyState>=4,4e3),!0):!1}function ot(){let o=window.AudioContext||window.webkitAudioContext,t=new EventTarget,a=new Map,r=null,l=null,f=null;function m(_,S){t.dispatchEvent(new CustomEvent(_,{detail:S}))}function h(_,S){_.state!==S&&(_.state=S,m("state",{songId:_.id,state:S}))}function v(){r||(r=new o),r.state==="suspended"&&r.resume().catch(_=>console.warn("stems: resume failed",_))}function b(_){if(a.has(_.id))return a.get(_.id);let S={id:_.id,tracks:_.tracks.filter(L=>L.url).map(L=>{var P,$;return{id:L.id,url:L.url,audio:null,gain:null,panner:null,volume:(P=L.volume)!=null?P:1,pan:($=L.pan)!=null?$:0,muted:!1,soloed:!1,dead:!1,primed:!1,drift:null}}),out:null,playing:!1,starting:!1,position:0,duration:0,token:0,state:"idle"};return a.set(S.id,S),S}function e(_){_.out||(_.out=r.createGain(),_.out.gain.value=0,_.out.connect(r.destination)),_.tracks.forEach(S=>{if(S.audio){S.audio.getAttribute("src")||(S.dead=!1,S.audio.src=S.url,S.audio.load());return}let L=new Audio;L.crossOrigin="anonymous",L.preload="auto",L.src=S.url;let P=r.createMediaElementSource(L);S.gain=r.createGain(),P.connect(S.gain),r.createStereoPanner?(S.panner=r.createStereoPanner(),S.panner.pan.value=S.pan,S.gain.connect(S.panner),S.panner.connect(_.out)):S.gain.connect(_.out),L.addEventListener("loadedmetadata",()=>{_.duration=Math.max(_.duration,L.duration||0),g(_,_.position)}),L.addEventListener("waiting",()=>U(_)),L.addEventListener("ended",()=>D(_)),L.addEventListener("error",()=>{L.getAttribute("src")&&(S.dead=!0,console.warn(`stems: track ${S.id} failed to load`,S.url))}),S.audio=L}),i(_,!0)}function n(_){return _.tracks.filter(S=>S.audio&&!S.dead)}function i(_,S=!1){if(!r)return;let L=_.tracks.some(P=>P.soloed);_.tracks.forEach(P=>{if(!P.gain)return;let $=P.muted||L&&!P.soloed?0:P.volume;S?P.gain.gain.value=$:P.gain.gain.setTargetAtTime($,r.currentTime,.015)})}function c(_){var S;(S=_.out)==null||S.gain.setTargetAtTime(0,r.currentTime,.015/2)}function p(_){var S;(S=_.out)==null||S.gain.setTargetAtTime(1,r.currentTime,.015)}function y(_){let S=n(_).filter(L=>!L.audio.ended).map(L=>L.audio.currentTime);return S.length?zt(S):_.position}function g(_,S){m("time",{songId:_.id,time:S,duration:_.duration})}function A(_){let S=a.get(_);return S?(v(),l&&l!==S&&R(l),l=S,e(S),S):null}function q(_=l==null?void 0:l.id){let S=A(_);!S||!S.tracks.length||(n(S).forEach(L=>{L.primed||(L.primed=!0,L.audio.play().catch(()=>{}))}),N(S,S.position))}async function N(_,S){let L=++_.token;_.playing=!0,_.starting=!0,Y(),h(_,"loading"),c(_);let P=n(_);P.forEach(z=>z.audio.pause());let $=await Promise.all(P.map(z=>Xn(z.audio,S)));if(L!==_.token)return;$.forEach((z,Z)=>{z||(P[Z].dead=!0,console.warn(`stems: track ${P[Z].id} not ready, skipping it`))});let F=n(_);if(!F.length){console.error(`stems: no tracks could start for ${_.id}`),_.playing=!1,_.starting=!1,h(_,"idle");return}F.forEach(z=>{z.drift=null,z.audio.playbackRate=1}),await Promise.all(F.map(z=>z.audio.play().catch(Z=>{(Z==null?void 0:Z.name)!=="AbortError"&&console.warn(`stems: track ${z.id} play failed`,Z)}))),L===_.token&&(_.starting=!1,p(_),h(_,"playing"),j(_))}function M(_=l==null?void 0:l.id){let S=a.get(_);if(!S)return;S.token+=1,S.playing&&(S.position=y(S)),S.playing=!1,S.starting=!1,Y(),r&&c(S),h(S,"paused");let L=S.token;setTimeout(()=>{L===S.token&&n(S).forEach(P=>P.audio.pause())},60)}function R(_){_.token+=1,_.playing=!1,_.starting=!1,_.position=0,Y(),_.out&&(_.out.gain.value=0),h(_,"idle"),g(_,0),_.tracks.forEach(S=>{S.audio&&(S.audio.pause(),S.audio.removeAttribute("src"),S.audio.load(),S.drift=null)})}function G(_,S=l==null?void 0:l.id){let L=a.get(S);if(!L||!Number.isFinite(_))return;let P=L.duration?L.duration-.05:1/0,$=Ut(_,0,Math.max(0,P));L.position=$,g(L,$),l===L&&L.playing&&N(L,$)}function U(_){l!==_||!_.playing||_.starting||N(_,y(_))}function D(_){l!==_||!_.playing||!n(_).every(L=>L.audio.ended||L.audio.currentTime>=(L.audio.duration||0)-.3)||(M(_.id),_.position=0,g(_,0),m("ended",{songId:_.id}))}function j(_){Y(),f=setInterval(()=>te(_),200)}function Y(){f&&(clearInterval(f),f=null)}function te(_){if(l!==_||!_.playing||_.starting)return;let S=n(_).filter(F=>!F.audio.ended&&!F.audio.paused&&F.audio.currentTime<(F.audio.duration||1/0)-.5),L=S.map(F=>F.audio.currentTime),P=L.length?zt(L):y(_);if(g(_,P),S.length<2)return;let $=!1;S.forEach((F,z)=>{let Z=L[z]-P;if(Math.abs(Z)>.25){$=!0;return}F.drift=F.drift===null?Z:F.drift+.35*(Z-F.drift);let ue=Math.abs(F.drift)<.006?1:1-Ut(F.drift*1,-.04,.04);Math.abs(F.audio.playbackRate-ue)>5e-4&&(F.audio.playbackRate=ue)}),$&&N(_,P)}function O(_,S,L){let P=a.get(_),$=P==null?void 0:P.tracks.find(F=>F.id===S);$&&(Object.assign($,L),"pan"in L&&$.panner&&($.panner.pan.value=$.pan),i(P))}function C(_){let S=a.get(_);S&&(S.tracks.forEach(L=>{L.volume=1,L.pan=0,L.muted=!1,L.soloed=!1,L.panner&&(L.panner.pan.value=0)}),i(S))}return{on:(_,S)=>t.addEventListener(_,L=>S(L.detail)),define:b,select:A,play:q,pause:M,seek:G,setTrack:O,resetMix:C,getSong:_=>a.get(_)||null,getTime:(_=l==null?void 0:l.id)=>{let S=a.get(_);return S?S.playing&&!S.starting?y(S):S.position:0},isPlaying:(_=l==null?void 0:l.id)=>{var S;return!!((S=a.get(_))!=null&&S.playing)}}}function Kt(){let o=ot(),t=new Map;document.querySelectorAll("[data-song]").forEach(a=>{var v;let r=a.getAttribute("data-song"),l=Array.from(a.querySelectorAll("[data-track-url]")).filter(b=>(b.getAttribute("data-track-url")||"").trim());if(!r||!l.length)return;let f=l.map(b=>{let e=b.querySelector("[data-volume-control]"),n=b.querySelector("[data-pan-control]");return{id:b.getAttribute("data-track-id"),url:b.getAttribute("data-track-url").trim(),volume:e?parseFloat(e.value):1,pan:n?parseFloat(n.value):0}}),m=o.define({id:r,tracks:f}),h={button:a.querySelector("[data-play-button]"),progress:a.querySelector("[data-progress-bar]"),dragging:!1};t.set(r,h),l.forEach((b,e)=>{var y,g;let n=f[e].id,i=m.tracks[e];(y=b.querySelector("[data-volume-control]"))==null||y.addEventListener("input",A=>{o.setTrack(r,n,{volume:parseFloat(A.target.value)})}),(g=b.querySelector("[data-pan-control]"))==null||g.addEventListener("input",A=>{o.setTrack(r,n,{pan:parseFloat(A.target.value)})});let c=b.querySelector("[data-mute-button]");c==null||c.addEventListener("click",()=>{o.setTrack(r,n,{muted:!i.muted}),c.classList.toggle("mute-active",i.muted)});let p=b.querySelector("[data-solo-button]");p==null||p.addEventListener("click",()=>{o.setTrack(r,n,{soloed:!i.soloed}),p.classList.toggle("solo-active",i.soloed)})}),(v=h.button)==null||v.addEventListener("click",()=>{o.isPlaying(r)?o.pause(r):o.play(r)}),h.progress&&(h.progress.addEventListener("input",()=>{h.dragging=!0}),h.progress.addEventListener("change",b=>{h.dragging=!1;let{duration:e}=o.getSong(r);e&&o.seek(parseFloat(b.target.value)/100*e,r)}))}),o.on("state",({songId:a,state:r})=>{var f;let l=(f=t.get(a))==null?void 0:f.button;l&&(l.classList.toggle("playing",r==="playing"),l.classList.toggle("loading",r==="loading"))}),o.on("time",({songId:a,time:r,duration:l})=>{let f=t.get(a);!(f!=null&&f.progress)||f.dragging||!l||(f.progress.value=r/l*100)}),console.log(`mixer: ready (${t.size} songs, synced)`)}var Xt=Yn(Yt(),1);function Wt(){let t={},a={};function r(){try{Array.from(document.querySelectorAll("[data-slide]")).forEach(e=>{let n=e.dataset&&e.dataset.slide,i=e.dataset&&e.dataset.awakeAudio;n&&i&&(t[n]=i)})}catch{}for(let[b,e]of Object.entries(t))try{a[b]=new Xt.Howl({src:[e],volume:.5});try{let n=document.querySelector(`.slide[data-slide="${b}"]`);if(n&&typeof a[b].on=="function"){let i=()=>{n.classList.add("playing"),n.classList.remove("paused")},c=()=>{n.classList.remove("playing"),n.classList.add("paused")},p=()=>{n.classList.remove("playing"),n.classList.remove("paused")};a[b].on("play",i),a[b].on("pause",c),a[b].on("stop",p),a[b].on("end",p)}}catch{}}catch(n){a[b]={_volume:.5,play(){},pause(){},stop(){},volume(i){return typeof i=="number"&&(this._volume=Math.max(0,Math.min(1,i))),this._volume}},console.warn(`Howl creation failed for ${b}:`,n&&n.message)}}function l(b){return Math.max(0,Math.min(1,b))}function f(b){let e=b&&b.dataset&&b.dataset.slide;if(!e)return;let n=a[e];if(!n)return;let i=b.querySelector("[data-awake-play]"),c=b.querySelector("[data-awake-pause]"),p=b.querySelector("[data-awake-stop]"),y=b.querySelector("[data-awake-vol-up]"),g=b.querySelector("[data-awake-vol-down]"),A=!0;i&&i.addEventListener("click",()=>{A&&Object.values(a).forEach(q=>{try{q.stop()}catch{}}),n.play()}),c&&c.addEventListener("click",()=>n.pause()),p&&p.addEventListener("click",()=>n.stop()),y&&y.addEventListener("click",()=>{let q=typeof n.volume=="function"?n.volume():n._volume||.5,N=l(q+.1);typeof n.volume=="function"&&n.volume(N)}),g&&g.addEventListener("click",()=>{let q=typeof n.volume=="function"?n.volume():n._volume||.5,N=l(q-.1);typeof n.volume=="function"&&n.volume(N)})}function m(){let b=Array.from(document.querySelectorAll("[data-slide]"));if(!b.length)return;let e=document.body,n=b.findIndex(A=>A.dataset&&A.dataset.slide==="splash"),i=b.findIndex(A=>A.classList&&A.classList.contains("active")),c=n>=0?n:i>=0?i:0;function p(A){b.forEach((N,M)=>{let R=M===A;N.classList.toggle("active",R),N.setAttribute("aria-hidden",String(!R))});let q=b[A].dataset.slide;q&&(e.dataset.awakeCurrent=q)}let y=480;function g(A,{autoPlay:q=!1}={}){let N=Math.max(0,Math.min(b.length-1,A));if(N===c)return;let M=c,R=b[M],G=b[N];if(!G)return;Object.values(a).forEach(j=>{try{typeof j.stop=="function"&&j.stop(),typeof j.seek=="function"&&j.seek(0)}catch{}});let D=N>M?"exit-left":"exit-right";G.classList.add("active"),G.setAttribute("aria-hidden","false"),R&&R.classList.add(D);try{G.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}catch{G.scrollIntoView()}setTimeout(()=>{R&&(R.classList.remove("active"),R.classList.remove(D),R.setAttribute("aria-hidden","true")),G.classList.add("active"),G.setAttribute("aria-hidden","false"),c=N;let j=G.dataset&&G.dataset.slide;if(j&&(e.dataset.awakeCurrent=j),q){let Y=G.dataset&&G.dataset.slide;if(Y&&a[Y]&&typeof a[Y].play=="function")try{a[Y].play()}catch{}}},y+20)}b.forEach((A,q)=>{f(A);let N=A.querySelector("[data-next-slide]")||A.querySelector(".next"),M=A.querySelector("[data-prev-slide]")||A.querySelector(".prev");N&&N.addEventListener("click",()=>g(q+1)),M&&M.addEventListener("click",()=>g(q-1))}),document.querySelectorAll("[data-next]").forEach(A=>A.addEventListener("click",()=>g(c+1))),document.querySelectorAll("[data-prev]").forEach(A=>A.addEventListener("click",()=>g(c-1))),window.addEventListener("keydown",A=>{A.key==="ArrowRight"&&g(c+1),A.key==="ArrowLeft"&&g(c-1)});try{let A=Array.from(document.querySelectorAll("[data-awake-song]"));A.length&&A.forEach(q=>{let N=q.dataset&&q.dataset.awakeSong,M=b.findIndex(R=>R.dataset&&R.dataset.slide===N);M>=0&&q.addEventListener("click",R=>{R.preventDefault(),g(M);let G=document.querySelector(".awakemenutrigger");if(G)try{G.click()}catch{}})})}catch{}p(c)}function h(){m();let b=[".awakemenuhidden"],e=document.querySelectorAll(b.join(", "));e.length&&e.forEach(n=>{n.addEventListener("click",()=>{Object.values(a).forEach(i=>{try{i.stop()}catch{}})})})}function v(){r(),h();try{window.__awake_howls=a}catch{}console.log("Awake setup ready")}return document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v(),a}function Qt(){if(console.log("player: init"),!document.querySelector("[data-player]")){console.warn("player: no [data-player] found");return}let t=document.getElementById("audio");if(!t){console.warn("player: no #audio element found");return}let a=document.body.dataset.lrc||"https://cdn.jsdelivr.net/gh/hauskupa/vogor@main/dist/sodkaffi.lrc";t.autoplay=!1,t.preload="none",t.pause(),t.currentTime=0,t.volume=1;function r(f){let m=f.split(`
`),h=/\[(\d{2}):(\d{2})\.(\d{2})\]/,v=[];for(let b of m){let e=b.match(h);if(e){let n=+e[1]*60+ +e[2]+ +e[3]/100,i=b.replace(h,"").trim();i&&v.push({time:n,text:i})}}return v}fetch(a).then(f=>f.text()).then(f=>l(r(f))).catch(f=>{console.error("player: failed to load LRC",f),l([])});function l(f){let m=P=>document.getElementById(P),h=m("playBtn"),v=m("pauseBtn"),b=m("stopBtn"),e=m("nextTrackBtn"),n=m("prevTrackBtn"),i=m("volDownBtn"),c=m("volUpBtn"),p=m("playIcon"),y=m("pauseIcon"),g=m("timeDisplay"),A=m("trackTitle"),q=m("lyricsDisplay"),N=.1,M=[{start:0,end:237.64,title:"So\xF0kaffi"},{start:237.64,end:430.374,title:"A\xF0 vera einn"},{start:430.374,end:613.12,title:"Hva\xF0a f\xF3lk b\xFDr \xED svona blokk?"},{start:613.12,end:847.4,title:"Vofusund \xED s\xE1linni"},{start:847.4,end:1043.734,title:"03:16"},{start:1043.734,end:1275.361,title:"Sk\xFDja\xF0ar stj\xF6rnur"},{start:1275.361,end:1443.201,title:"\xDEa\xF0 gerist allt \xED lei\xF0inni"},{start:1443.201,end:1592.574,title:"\xC9g \xE1tta mig \xE1 \xFEv\xED"},{start:1592.574,end:1753.548,title:"Boomerangsafn af axarsk\xF6ftum"},{start:1753.548,end:1e5,title:"Langt\xEDmal\xEDkindi f\xEDn"}];function R(P){let $=Math.floor(P/60),F=Math.floor(P%60);return $+":"+(F<10?"0":"")+F}function G(P){for(let $=M.length-1;$>=0;$--)if(P>=M[$].start)return M[$];return M[0]}let U="",D;function j(){let P=t.currentTime;g&&t.duration&&(g.textContent=`${R(P)} / ${R(t.duration)}`);let $=G(P);if(A&&(A.textContent=$.title),!q||!f.length)return;let F="";for(let{time:z,text:Z}of f){if(z>=$.end)break;z>=$.start&&z<=P&&(F=Z)}F!==U&&(U=F,clearTimeout(D),q.style.opacity=0,setTimeout(()=>{q.textContent=F,q.style.opacity=1,D=setTimeout(()=>{q.style.opacity=0},5e3)},300))}function Y(){p==null||p.setAttribute("aria-hidden","false"),y==null||y.setAttribute("aria-hidden","true"),h==null||h.setAttribute("aria-hidden","false"),v==null||v.setAttribute("aria-hidden","true")}function te(){p==null||p.setAttribute("aria-hidden","true"),y==null||y.setAttribute("aria-hidden","false"),h==null||h.setAttribute("aria-hidden","true"),v==null||v.setAttribute("aria-hidden","false")}let O=()=>{t.play().catch(()=>{}),te()},C=()=>{t.pause(),Y()},_=()=>{t.pause(),t.currentTime=0,Y(),j()},S=()=>{let P=t.currentTime,$=M.find(F=>F.start>P);$&&(t.currentTime=$.start),t.paused&&O()},L=()=>{let P=t.currentTime,$=M.findIndex(z=>P<z.start)-1;$<0&&($=M.length-1);let F=P-M[$].start>3||$===0?M[$]:M[$-1]||M[0];t.currentTime=F.start,t.paused&&O()};c==null||c.addEventListener("click",()=>t.volume=Math.min(1,t.volume+N)),i==null||i.addEventListener("click",()=>t.volume=Math.max(0,t.volume-N)),h==null||h.addEventListener("click",O),v==null||v.addEventListener("click",C),b==null||b.addEventListener("click",_),e==null||e.addEventListener("click",S),n==null||n.addEventListener("click",L),t.addEventListener("loadedmetadata",j),t.addEventListener("timeupdate",j),t.addEventListener("ended",_),console.log("player: ready")}}function fe(o,t,a){return Math.min(a,Math.max(t,o))}var st=.7;function Ce(o){return fe(o,0,1)/st}function Zt(o=0){let a=new Float32Array(2048),l=fe(o,0,1)*24;for(let f=0;f<2048;f+=1){let m=f/2047*2-1;a[f]=(1+l)*m/(1+l*Math.abs(m))}return a}function _t(o,t,a=0){if(!o||!t)return;let r=fe(a,0,2)/2,l=r*r,f=1+l*.85,m=1/(1+l*.2),h=17500-l*1200,v=-18-l*3,b=1+l*1.45,e=22-l*2;o.gainNode.gain.setValueAtTime(1,t.currentTime),o.colorInNode.gain.setValueAtTime(f,t.currentTime),o.compressorNode.threshold.setValueAtTime(v,t.currentTime),o.compressorNode.ratio.setValueAtTime(b,t.currentTime),o.compressorNode.knee.setValueAtTime(e,t.currentTime),o.makeupNode.gain.setValueAtTime(m,t.currentTime),o.toneNode.frequency.setValueAtTime(h,t.currentTime),o.saturatorNode.curve=Zt(l*.35)}function yt(o){let t=o.createGain(),a=o.createGain(),r=o.createDynamicsCompressor(),l=o.createBiquadFilter(),f=o.createBiquadFilter(),m=o.createBiquadFilter(),h=o.createWaveShaper(),v=o.createGain(),b=o.createStereoPanner(),e=o.createGain();return t.gain.value=1,a.gain.value=1,r.threshold.value=-18,r.knee.value=22,r.ratio.value=1,r.attack.value=.01,r.release.value=.08,l.type="lowshelf",l.frequency.value=180,l.gain.value=0,f.type="highshelf",f.frequency.value=3200,f.gain.value=0,m.type="lowpass",m.frequency.value=17500,m.Q.value=1e-4,h.curve=Zt(0),h.oversample="2x",v.gain.value=1,b.pan.value=0,e.gain.value=Ce(st),t.connect(a),a.connect(r),r.connect(l),l.connect(f),f.connect(m),m.connect(h),h.connect(v),v.connect(b),b.connect(e),{input:t,output:e,nodes:{gainNode:t,colorInNode:a,compressorNode:r,eqLowNode:l,eqHighNode:f,toneNode:m,saturatorNode:h,makeupNode:v,panNode:b,faderNode:e}}}function Jt(o,t,a={}){var l,f,m,h,v;if(!o||!t)return;let r=t.currentTime;_t(o,t,fe((l=a.gain)!=null?l:0,0,2)),o.eqLowNode.gain.setValueAtTime(fe((f=a.eqLow)!=null?f:0,-1,1)*12,r),o.eqHighNode.gain.setValueAtTime(fe((m=a.eqHigh)!=null?m:0,-1,1)*12,r),o.panNode.pan.setValueAtTime(fe((h=a.pan)!=null?h:0,-1,1),r),o.faderNode.gain.setValueAtTime(Ce((v=a.fader)!=null?v:st),r)}function en({songs:o=[]}={}){let t=window.AudioContext||window.webkitAudioContext,a=t?new t:null,r=new EventTarget,l=a?a.createGain():null,f=new Map,m=st;l&&(l.gain.value=Ce(m),l.connect(a.destination));let h=null,v=!1,b=null,e=null,n=0,i=1,c=null,p=null;function y(s,u={}){r.dispatchEvent(new CustomEvent(s,{detail:u}))}function g(){p&&(window.clearTimeout(p),p=null)}function A(s){let u=s==null?void 0:s.audio;return!u||!Number.isFinite(u.duration)||u.duration<=0?Number.POSITIVE_INFINITY:Math.max(0,u.duration-(u.currentTime||0))}function q(s,u=.18){let w=s==null?void 0:s.audio;return!w||w.ended?!0:!Number.isFinite(w.duration)||w.duration<=0?!1:w.currentTime>=Math.max(0,w.duration-u)}function N(s,u=.35){if(!s)return!1;let{buffered:w,currentTime:x}=s;for(let V=0;V<w.length;V+=1){let H=w.start(V),J=w.end(V);if(x>=H&&x<=J)return J-x>=u}return!1}function M(s){if(!s||h!==s||c===s)return;let u=j();if(!u.length)return;let w=u.every(V=>q(V,.14)),x=u.reduce((V,H)=>Math.max(V,A(H)),0);!w||x>.2||(g(),p=window.setTimeout(()=>{p=null;let V=j();!V.length||h!==s||c===s||!V.every(J=>q(J,.12))||(c=s,v=!1,O(),_(),y("playstatechange",{isPlaying:v,songId:h}),y("songended",{songId:h,song:D()}))},120))}function R(s,u,w){let x=new Audio(s.url);if(x.crossOrigin="anonymous",x.preload="auto",x.preservesPitch=!1,x.mozPreservesPitch=!1,x.webkitPreservesPitch=!1,x.addEventListener("ended",()=>{M(w)}),x.addEventListener("waiting",()=>{x.dataset.tm4Buffering="true"}),x.addEventListener("stalled",()=>{x.dataset.tm4Buffering="true"}),x.addEventListener("seeking",()=>{x.dataset.tm4Buffering="true"}),["canplaythrough","playing","seeked","timeupdate"].forEach(T=>{x.addEventListener(T,()=>{(N(x,.2)||x.readyState>=3)&&delete x.dataset.tm4Buffering})}),!a||!l)return{...s,audio:x,index:u,gain:0,eqLow:0,eqHigh:0,pan:0,fader:.7,nodes:null};let V=a.createMediaElementSource(x),H=a.createAnalyser();H.fftSize=256,H.smoothingTimeConstant=.82;let J=yt(a),{gainNode:ae,colorInNode:re,compressorNode:ce,eqLowNode:ve,eqHighNode:ne,toneNode:ge,saturatorNode:Te,makeupNode:Le,panNode:Pe,faderNode:Ye}=J.nodes;V.connect(J.input),J.output.connect(l),J.output.connect(H);let De={...s,audio:x,index:u,gain:0,eqLow:0,eqHigh:0,pan:0,fader:.7,nodes:{source:V,gainNode:ae,colorInNode:re,compressorNode:ce,eqLowNode:ve,eqHighNode:ne,toneNode:ge,saturatorNode:Te,makeupNode:Le,panNode:Pe,faderNode:Ye,analyserNode:H},_driftEMA:void 0,_nudgeTimeout:null};return _t(De.nodes,a,0),De}let G=new Map(o.map(s=>[s.id,s]));function U(s){let u=f.get(s);if(u)return u;let w=G.get(s);if(!w)return null;let x={...w,tracks:w.tracks.map((V,H)=>R(V,H,w.id))};return f.set(w.id,x),x}function D(){return h&&f.get(h)||null}function j(){var s;return((s=D())==null?void 0:s.tracks)||[]}function Y(){let s=j()[0];y("timeupdate",{songId:h,currentTime:(s==null?void 0:s.audio.currentTime)||0,duration:(s==null?void 0:s.audio.duration)||0})}function te(){O(),b=window.setInterval(()=>{Y()},200)}function O(){b&&(window.clearInterval(b),b=null)}function C(s){s!=null&&s._nudgeTimeout&&(window.clearTimeout(s._nudgeTimeout),s._nudgeTimeout=null),s!=null&&s.audio&&(s.audio.playbackRate=i),s._driftEMA=void 0}function _(){e&&(window.clearInterval(e),e=null),j().forEach(C)}function S(){let s=j(),u=s[0],w=u==null?void 0:u.audio;if(!w||w.paused||w.dataset.tm4Buffering==="true"&&!N(w,.2))return;let x=w.currentTime,V=.25,H=.04,J=.25,ae=.0125,re=420,ce=.75,ve=A(u);if(x<.35||ve<ce){s.slice(1).forEach(C);return}s.slice(1).forEach(ne=>{let ge=ne.audio;if(!ge||ge.paused)return;if(ge.dataset.tm4Buffering==="true"&&!N(ge,.2)){C(ne);return}if(A(ne)<ce){C(ne);return}let Te=ge.currentTime-x;Number.isFinite(Te)||(Te=0),ne._driftEMA=typeof ne._driftEMA=="number"?V*Te+(1-V)*ne._driftEMA:Te;let Le=ne._driftEMA;if(Math.abs(Le)<=H){C(ne);return}if(Math.abs(Le)>=J){ge.currentTime=x,C(ne);return}let Pe=Le>0?1:-1;ge.playbackRate=i-Pe*ae,ne._nudgeTimeout&&window.clearTimeout(ne._nudgeTimeout),ne._nudgeTimeout=window.setTimeout(()=>{ge.playbackRate=i,ne._nudgeTimeout=null},re)})}function L(){_(),h&&(e=window.setInterval(()=>{S()},900))}async function P(){a&&a.state==="suspended"&&await a.resume()}function $(s){s&&(n+=1,g(),s.tracks.forEach(u=>{u.audio.pause(),u.audio.currentTime=0,delete u.audio.dataset.tm4Buffering,C(u)}))}async function F(s,{autoplay:u=!1}={}){let w=U(s);if(!w)return null;let x=u||v;return c=null,g(),h&&h!==s&&$(D()),h=s,y("songchange",{songId:s,song:w}),Y(),x&&await z(),w}async function z(){let s=++n;if(c=null,g(),!h){let H=o[0];if(!H)return;await F(H.id)}let u=j();if(!u.length)return;await P();let w=u[0].audio.currentTime||0,x=await Promise.allSettled(u.map(async H=>(Math.abs(H.audio.currentTime-w)>.05&&(H.audio.currentTime=w),H.audio.playbackRate=i,await H.audio.play(),H.id)));if(s!==n)return;if(x.forEach((H,J)=>{var re,ce,ve;if(H.status!=="rejected")return;let ae=((re=H.reason)==null?void 0:re.name)||null;ae!=="AbortError"&&console.warn("album-mixer: track play failed",{trackId:((ce=u[J])==null?void 0:ce.id)||null,songId:h,error:ae,message:((ve=H.reason)==null?void 0:ve.message)||String(H.reason)})}),!x.some(H=>H.status==="fulfilled"))throw new Error(`album-mixer: no tracks started for song ${h}`);v=!0,te(),L(),y("playstatechange",{isPlaying:v,songId:h}),Y()}function Z(){n+=1,c=null,g(),j().forEach(s=>{s.audio.pause()}),v=!1,O(),_(),y("playstatechange",{isPlaying:v,songId:h})}function ue(){n+=1,c=null,g(),$(D()),v=!1,O(),_(),y("playstatechange",{isPlaying:v,songId:h}),Y()}function _e(s){let u=Math.max(0,s||0);j().forEach(w=>{w.audio.currentTime=u}),Y()}function me(s){m=fe(s,0,1),l&&(l.gain.value=Ce(m)),y("masterchange",{value:m})}function Ae(s){i=fe(s,.75,1.25),j().forEach(u=>{u._nudgeTimeout||(u.audio.playbackRate=i)}),y("pitchchange",{value:i,songId:h})}function ye(){return j().map(s=>{var H;let u=(H=s.nodes)==null?void 0:H.analyserNode;if(!u)return{trackId:s.id,level:0};let w=new Uint8Array(u.frequencyBinCount);u.getByteTimeDomainData(w);let x=0;for(let J=0;J<w.length;J+=1){let ae=(w[J]-128)/128;x+=ae*ae}let V=Math.sqrt(x/w.length);return{trackId:s.id,level:fe(V*2.8,0,1)}})}function E(s,u,w){var V,H,J,ae;let x=j().find(re=>re.id===s);x&&(u==="gain"&&(x.gain=fe(w,0,2),x.nodes&&a&&_t(x.nodes,a,x.gain)),u==="pan"&&(x.pan=fe(w,-1,1),(V=x.nodes)==null||V.panNode.pan.setValueAtTime(x.pan,a.currentTime)),u==="eqLow"&&(x.eqLow=fe(w,-1,1),(H=x.nodes)==null||H.eqLowNode.gain.setValueAtTime(x.eqLow*12,a.currentTime)),u==="eqHigh"&&(x.eqHigh=fe(w,-1,1),(J=x.nodes)==null||J.eqHighNode.gain.setValueAtTime(x.eqHigh*12,a.currentTime)),u==="fader"&&(x.fader=fe(w,0,1),(ae=x.nodes)==null||ae.faderNode.gain.setValueAtTime(Ce(x.fader),a.currentTime)),y("trackchange",{songId:h,trackId:s,gain:x.gain,eqLow:x.eqLow,eqHigh:x.eqHigh,pan:x.pan,fader:x.fader}))}function d(){let s=D(),u=s==null?void 0:s.tracks[0];return{currentSongId:h,isPlaying:v,currentTime:(u==null?void 0:u.audio.currentTime)||0,duration:(u==null?void 0:u.audio.duration)||0,masterVolume:m,pitch:i,song:s}}return{addEventListener:(...s)=>r.addEventListener(...s),removeEventListener:(...s)=>r.removeEventListener(...s),getSongs:()=>o.map(s=>({...s})),ensureSong:s=>U(s),getState:d,loadSong:F,play:z,pause:Z,stop:ue,seek:_e,setMasterVolume:me,setPitch:Ae,getMeterLevels:ye,setTrackGain:(s,u)=>E(s,"gain",u),setTrackEqLow:(s,u)=>E(s,"eqLow",u),setTrackEqHigh:(s,u)=>E(s,"eqHigh",u),setTrackPan:(s,u)=>E(s,"pan",u),setTrackFader:(s,u)=>E(s,"fader",u)}}function oe(o,t){return String((o==null?void 0:o.getAttribute(t))||"").trim()}function Wn(o){return String(o||"").toLowerCase().replace(/þ/g,"th").replace(/ð/g,"d").replace(/æ/g,"ae").replace(/ö/g,"o").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function Qn(o){return oe(o,"data-stem-url")||oe(o,"data-stem")||oe(o,"href")||oe(o,"src")}function Zn(o){let t=[];for(let r=1;r<=6;r+=1){let l=oe(o,`data-stem-${r}`);l&&t.push({slot:r,url:l,label:oe(o,`data-stem-${r}-label`),short:oe(o,`data-stem-${r}-short`),role:oe(o,`data-stem-${r}-role`).toLowerCase()})}let a=oe(o,"data-aux");return a&&t.push({slot:7,url:a,label:oe(o,"data-aux-label"),short:oe(o,"data-aux-short"),role:"aux"}),t}function Jn(o){return Array.from(o.querySelectorAll("[data-stem]")).map((t,a)=>{var r;return{slot:a+1,url:Qn(t),label:oe(t,"data-stem-label")||((r=t.textContent)==null?void 0:r.trim())||"",short:oe(t,"data-stem-short"),role:oe(t,"data-stem-role").toLowerCase()}}).filter(t=>t.url)}function vt(o,t){let a=new Map,r=f=>{for(let m of o){let h=oe(m,f);if(h)return h}return""};for(let f=1;f<=6;f+=1){let m=r(`data-stem-${f}-${t}`);m&&a.set(f,m)}let l=r(`data-aux-${t}`);return l&&a.set(7,l),a}function er(o,t,a,r){var b;let l=oe(o,"data-song-title")||((b=o.textContent)==null?void 0:b.trim())||"";if(!l)return null;let f=Zn(o),m=(f.length?f:Jn(o)).filter(e=>e.url).slice(0,6);if(!m.length)return null;let h=oe(o,"data-song-side").toUpperCase(),v=Number.parseInt(oe(o,"data-song-index"),10);return{id:oe(o,"data-song-id")||Wn(l)||`song-${t+1}`,title:l,side:h==="B"?"B":"A",sideIndex:Number.isFinite(v)?v:t+1,tracks:m.map((e,n)=>{let i=e.label||r.labels.get(e.slot)||"",c=e.short||r.shorts.get(e.slot)||"",p=e.role||r.roles.get(e.slot)||"";return{id:`track-${n+1}`,title:i||`Track ${n+1}`,label:i,short:c,role:p==="aux"||p!=="main"&&n>=a?"aux":"main",url:e.url}})}}function tn(o){if(!o)return null;let t=o.querySelector("[data-mixer-songs]");if(!t)return null;let a=[t,o],r=Number.parseInt(oe(t,"data-main-channels")||oe(o,"data-main-channels"),10),l=Number.isFinite(r)&&r>0?r:4,f={labels:vt(a,"label"),shorts:vt(a,"short"),roles:vt(a,"role")},m=Array.from(t.querySelectorAll("[data-song]")).map((h,v)=>er(h,v,l,f)).filter(Boolean);return m.length?m:(console.warn("album-mixer: [data-mixer-songs] fannst en engin gild l\xF6g \xED honum"),null)}var Ne=44100,tr=Ne*2*4,rn,nn=typeof document!="undefined"&&((rn=document.currentScript)==null?void 0:rn.src)||"";function nr(o){let t=o==null?void 0:o.getAttribute("data-mp3-worker");return t||(nn?nn.replace(/\/[^/]*$/,"/mp3worker.js"):"https://cdn.jsdelivr.net/gh/hauskupa/vogor@main/dist/mp3worker.js")}async function rr(o){let t=await fetch(o);if(!t.ok)throw new Error(`N\xE1\xF0i ekki \xED MP3-k\xF3\xF0arann (HTTP ${t.status})`);let a=await t.text(),r=URL.createObjectURL(new Blob([a],{type:"text/javascript"})),l=new Worker(r);return URL.revokeObjectURL(r),l}function ar(o,t){return o*tr*(t+1)}function an(o,t){let a=ar(o,t);return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?{ok:!1,reason:"iOS r\xE6\xF0ur ekki vi\xF0 \xFAtflutninginn",needed:a}:typeof navigator.deviceMemory=="number"&&navigator.deviceMemory<=2?{ok:!1,reason:"T\xE6ki\xF0 hefur of l\xEDti\xF0 minni",needed:a}:window.OfflineAudioContext?{ok:!0,needed:a}:{ok:!1,reason:"Vafrinn sty\xF0ur ekki OfflineAudioContext",needed:a}}function or(o){let t=[],a=new TextEncoder;for(let[h,v]of Object.entries(o)){if(!v)continue;let b=new Uint8Array(2+v.length*2+2);b[0]=255,b[1]=254;for(let c=0;c<v.length;c+=1){let p=v.charCodeAt(c);b[2+c*2]=p&255,b[3+c*2]=p>>8}let e=new Uint8Array(1+b.length);e[0]=1,e.set(b,1);let n=new Uint8Array(10+e.length);n.set(a.encode(h),0);let i=e.length;n[4]=i>>24&255,n[5]=i>>16&255,n[6]=i>>8&255,n[7]=i&255,n.set(e,10),t.push(n)}let r=t.reduce((h,v)=>h+v.length,0),l=new Uint8Array(10);l.set(a.encode("ID3"),0),l[3]=3,l[4]=0,l[5]=0,l[6]=r>>21&127,l[7]=r>>14&127,l[8]=r>>7&127,l[9]=r&127;let f=new Uint8Array(10+r);f.set(l,0);let m=10;for(let h of t)f.set(h,m),m+=h.length;return f}async function ir(o,t){let a=0;return Promise.all(o.map(async r=>{let l=await fetch(r.url);if(!l.ok)throw new Error(`N\xE1\xF0i ekki \xED ${r.label||r.id}`);let f=await l.arrayBuffer();return a+=1,t(a/o.length),f}))}async function sr({tracks:o,masterPosition:t,pitch:a=1,onProgress:r=()=>{}}){if(!(o!=null&&o.length))throw new Error("Engar r\xE1sir til a\xF0 flytja \xFAt");r({phase:"fetch",ratio:0});let l=await ir(o,c=>r({phase:"fetch",ratio:c}));r({phase:"decode",ratio:0});let f=new OfflineAudioContext(2,Ne,Ne),m=[];for(let c=0;c<l.length;c+=1)m.push(await f.decodeAudioData(l[c])),r({phase:"decode",ratio:(c+1)/l.length});let h=Math.min(1.25,Math.max(.75,a||1)),v=m.reduce((c,p)=>Math.max(c,p.duration),0),b=Math.ceil(v/h*Ne);r({phase:"render",ratio:0});let e=new OfflineAudioContext(2,b,Ne),n=e.createGain();n.gain.value=Ce(t),n.connect(e.destination),m.forEach((c,p)=>{let y=o[p],g=e.createBufferSource();g.buffer=c,g.playbackRate.value=h;let A=yt(e);Jt(A.nodes,e,y),g.connect(A.input),A.output.connect(n),g.start(0)});let i=await e.startRendering();return r({phase:"render",ratio:1}),i}async function on({container:o,song:t,albumTitle:a,artist:r="Stafr\xE6nn H\xE1kon",tracks:l,masterPosition:f,pitch:m=1,bitrate:h=192,onProgress:v=()=>{}}){let b=await sr({tracks:l,masterPosition:f,pitch:m,onProgress:v}),e=b.getChannelData(0),n=b.numberOfChannels>1?b.getChannelData(1):e;v({phase:"encode",ratio:0});let i=await rr(nr(o)),c=await new Promise((g,A)=>{i.onmessage=M=>{let R=M.data||{};R.type==="progress"?v({phase:"encode",ratio:R.ratio}):R.type==="done"?g(R.mp3):R.type==="error"&&A(new Error(R.message))},i.onerror=M=>A(new Error(M.message||"MP3-k\xF3\xF0arinn br\xE1st"));let q=new Float32Array(e),N=new Float32Array(n);i.postMessage({left:q,right:N,sampleRate:Ne,bitrate:h},[q.buffer,N.buffer])}).finally(()=>i.terminate()),p=or({TIT2:`${(t==null?void 0:t.title)||"Mix"} (my mix)`,TPE1:r,TALB:a||"",TCON:"Post-Rock",TSSE:"Vogor Studio 424"}),y=new Blob([p,c],{type:"audio/mpeg"});return v({phase:"done",ratio:1}),y}function sn(o,t){let a=URL.createObjectURL(o),r=document.createElement("a");r.href=a,r.download=t,document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(a),3e4)}var cr="https://audio-proxy.stafraennhakon.workers.dev";function Oe(o){if(!o)return"";try{let t=new URL(o,window.location.href);if(t.hostname==="www.dropbox.com"||t.hostname==="dl.dropbox.com"||t.hostname==="dl.dropboxusercontent.com"){let a=new URL(cr,window.location.href);return a.searchParams.set("src",t.toString()),a.toString()}return t.toString()}catch{return o}}function lt(o){let t=Number.isFinite(o)?Math.max(0,o):0,a=Math.floor(t/60),r=Math.floor(t%60).toString().padStart(2,"0");return`${a}:${r}`}function ur(o){let t=Number.isFinite(o)?Math.max(0,o):0;return String(Math.floor(t)%1e3).padStart(3,"0")}function ln(o){let t=o/2*12;return t<.05?"0 dB":`+${t.toFixed(1)} dB`}function ct(o){let t=o*12;return Math.abs(t)<.05?"0 dB":`${t>0?"+":""}${t.toFixed(1)} dB`}function Fe(o){return(o*10).toFixed(1)}function bt(o){return Math.min(1,Math.max(0,o))}function cn(o){return`track${o+1}`}function dr(o,t){let a=String((o==null?void 0:o.title)||"").trim();if(a&&!/^track\s+\d+$/i.test(a))return a;let r=String((o==null?void 0:o.id)||"").trim();if(r){let l=r.replace(/^track/i,"");if(/^\d+$/.test(l))return l}return a||`Track ${t+1}`}function pr(o){return Array.from(o.querySelectorAll("[data-track-title]")).filter(t=>!(!(t instanceof HTMLElement)||t.closest("[data-mixer-track-template]")||t.closest(".tm4-master-strip"))).map(t=>{var a;return((a=t.textContent)==null?void 0:a.trim())||""}).filter(Boolean)}function fr(o,t){let a=String(o.dataset.albumTitle||"").trim();if(a)return a;let r=String((t==null?void 0:t.textContent)||"").trim();return r&&r.toLowerCase()!=="loading..."?r:""}function mr(o,t){let a=o.querySelector("[data-mixer-cassette-album-title]");if(a instanceof HTMLElement)return a;let r=o.querySelector(".tm4-cassette-overlay");if(!(r instanceof HTMLElement)||!(t instanceof HTMLElement))return null;let l=document.createElement("div");return l.dataset.mixerCassetteAlbumTitle="",l.className=t.className,r.insertBefore(l,t),l}function gr(o){let t=o.querySelector("[data-album-mixer-preloader]")||o.querySelector("[data-asleep-preloader]");if(t instanceof HTMLElement)return t.setAttribute("aria-hidden",t.getAttribute("aria-hidden")||"true"),t;let a=document.createElement("div");return a.dataset.albumMixerPreloader="",a.setAttribute("aria-hidden","true"),a.innerHTML="<div data-preloader-panel>Loading tape...</div>",o.appendChild(a),a}var dt=12,hr=9,_r=11;function yr(o){let t=document.createElement("div");t.className="tm4-meter-panel",t.dataset.trackMeter=o;let a=document.createElement("div");a.className="tm4-meter-stack";for(let r=dt-1;r>=0;r-=1){let l=document.createElement("span");l.className="tm4-meter-segment inactive",l.dataset.segmentIndex=String(r),a.appendChild(l)}return t.appendChild(a),t}function un(o,t){if(!o)return;let a=Math.max(0,Math.min(dt,Math.round(t*dt)));o.querySelectorAll(".tm4-meter-segment").forEach(r=>{let l=Number(r.dataset.segmentIndex||"0"),f=l<a,m=f&&l>=hr,h=f&&l>=_r;r.classList.toggle("inactive",!f),r.classList.toggle("is-on",f&&!m&&!h),r.classList.toggle("is-warn",m&&!h),r.classList.toggle("is-peak",h)})}function vr(o,t){if(!o)return null;o.dataset.trackMeter=t,o.classList.contains("tm4-meter-panel")||o.classList.add("tm4-meter-panel");let a=o.querySelector(".tm4-meter-stack");if(a||(a=document.createElement("div"),a.className="tm4-meter-stack",o.replaceChildren(a)),!o.querySelector(".tm4-meter-segment"))for(let r=dt-1;r>=0;r-=1){let l=document.createElement("span");l.className="tm4-meter-segment inactive",l.dataset.segmentIndex=String(r),a.appendChild(l)}return o}function xr(o,t){let a=String(o.side||"A").localeCompare(String(t.side||"A"));if(a!==0)return a;let r=(o.sideIndex||0)-(t.sideIndex||0);return r!==0?r:0}function dn(o,t){let a=new Map,r=new Map,l=[...o].sort(xr);return l.forEach(f=>{let m=f.side||"A",h=r.get(m)||[];h.push(f),r.set(m,h)}),r.forEach((f,m)=>{let h=0;f.forEach((v,b)=>{let e=t.get(v.id)||0,n=v.sideIndex||b+1;a.set(v.id,{...v,side:m,cueNumber:n,cueLabel:`${m}${n}`,sideStart:h,duration:e,sideTotal:0}),h+=e}),f.forEach(v=>{let b=a.get(v.id);b&&(b.sideTotal=h)})}),{byId:a,sideSongs:r,orderedSongs:l}}function ke(o,t,a,r){var h,v;let l=r-a||1,f=(t-a)/l,m=String(bt(f));o.style.setProperty("--turn",m),(h=o.parentElement)==null||h.style.setProperty("--turn",m),(v=o.closest(".tm4-dial, .tm4-knob-visual, .tm4-knob"))==null||v.style.setProperty("--turn",m)}function He(o,t,a,r){var m;let l=r-a||1,f=bt((t-a)/l);o.style.setProperty("--fader-position",String(f)),(m=o.closest(".tm4-fader-visual, .tm4-fader-wrap, .tm4-master-strip"))==null||m.style.setProperty("--fader-position",String(f))}function gn(o,t){!o||!t||o.dataset.pointerBound==="true"||(o.dataset.pointerBound="true",o.style.touchAction="none",t.style.touchAction="none")}function hn(o,t,a,r,l){let f=0,m=0,h=!1;function v(n){let i=f-n,p=(r-a)/220,y=Math.min(r,Math.max(a,m+i*p));t.value=String(y),ke(t,y,a,r),l(y)}function b(n){h&&v(n.clientY)}function e(){h=!1,window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",e)}gn(o,t),o.addEventListener("pointerdown",n=>{n.preventDefault(),h=!0,f=n.clientY,m=parseFloat(t.value),window.addEventListener("pointermove",b),window.addEventListener("pointerup",e)}),o.addEventListener("wheel",n=>{n.preventDefault();let i=parseFloat(t.value),c=parseFloat(t.step||"0.01"),p=n.deltaY<0?1:-1,y=Math.min(r,Math.max(a,i+p*c));t.value=String(y),ke(t,y,a,r),l(y)})}function pn(o,t,a,r,l){let f=0,m=0,h=!1;function v(n){let i=o.getBoundingClientRect(),c=f-n,y=(r-a)/Math.max(i.height||180,120),g=Math.min(r,Math.max(a,m+c*y));t.value=String(g),He(t,g,a,r),l(g)}function b(n){h&&(n.preventDefault(),v(n.clientY))}function e(){h=!1,window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",e)}gn(o,t),o.addEventListener("pointerdown",n=>{n.preventDefault(),h=!0,f=n.clientY,m=parseFloat(t.value),window.addEventListener("pointermove",b,{passive:!1}),window.addEventListener("pointerup",e)}),o.addEventListener("wheel",n=>{n.preventDefault();let i=parseFloat(t.value),c=parseFloat(t.step||"0.01"),p=n.deltaY<0?1:-1,y=Math.min(r,Math.max(a,i+p*c));t.value=String(y),He(t,y,a,r),l(y)})}function ze(o,t,a,r){let l=document.createElement("label");l.className="tm4-knob";let f=document.createElement("span");f.textContent=o;let m=document.createElement("span");m.className="tm4-dial",m.appendChild(t),l.appendChild(f),l.appendChild(m);let h=String(bt(a));return t.style.setProperty("--turn",h),m.style.setProperty("--turn",h),hn(m,t,parseFloat(t.min||"0"),parseFloat(t.max||"1"),r),l}function ut(o,t){if(!o||!t)return;o.dataset.control=t,o.classList.add(`tm4-knob--${t}`);let a=xt(o);a==null||a.classList.add(`tm4-dial--${t}`);let r=o.querySelector(".tm4-knob-pointer");r==null||r.classList.add(`tm4-knob-pointer--${t}`)}function fn(o){return(o==null?void 0:o.querySelector('input[type="range"]'))||null}function xt(o){return o?o.matches(".tm4-dial, .tm4-knob-visual")?o:o.querySelector(".tm4-dial, .tm4-knob-visual"):null}function br(o){return o?o.querySelector("[data-readout]")||o.querySelector(".tm4-readout"):null}function Ke(o,t,a){let r=br(o);return r?(r.textContent=a,r):t?(t.textContent=a,t):null}function mn(o){return o?o.matches(".tm4-fader-visual")?o:o.querySelector(".tm4-fader-visual"):null}function wr(o){let t=o.querySelector("[data-mixer-track-template]");if(!t)return null;let a=null;t instanceof HTMLTemplateElement?a=t.content.cloneNode(!0):a=t.cloneNode(!0);let r=a.querySelector(".tm4-strip");return r instanceof HTMLElement?r:null}function Sr(o){return o.map((t,a)=>({...t,side:t.side||"A",sideIndex:Number.isFinite(t.sideIndex)?t.sideIndex:a+1,tracks:(t.tracks||[]).slice(0,6).map((r,l)=>({id:r.id||`track-${l+1}`,title:r.title||`Track ${l+1}`,label:String(r.label||"").trim(),short:String(r.short||"").trim(),role:r.role==="aux"?"aux":"main",url:Oe(r.url||"")})).filter(r=>r.url)})).filter(t=>t.id&&t.tracks.length>=1)}function Ar(o){let t=Sr(tn(o)||[]);return t.length?(new Set(t.map(r=>r.tracks.length)).size>1&&console.warn("album-mixer: l\xF6gin eru ekki me\xF0 sama r\xE1safj\xF6lda",Object.fromEntries(t.map(r=>[r.id,r.tracks.length]))),t):(console.error("album-mixer: engin l\xF6g \xED DOM-inu. B\xE6ttu Collection List me\xF0 data-mixer-songs inni \xED [data-album-mixer]. Sj\xE1 WEBFLOW_ALBUM_MIXER.md"),[])}function _n(o=document){var Pe,Ye,De;let t=o.querySelector("[data-album-mixer]");if(!t)return null;let a=Ar(t);if(!a.length)return null;console.log(`album-mixer: ${a.length} l\xF6g`);let r=en({songs:a}),l=t.querySelector("[data-mixer-side-a]"),f=t.querySelector("[data-mixer-side-b]"),m=t.querySelector("[data-mixer-current-song]"),h=t.querySelector("[data-mixer-cassette-title]"),v=mr(t,h),b=t.querySelector("[data-mixer-cassette-time]"),e=t.querySelector("[data-mixer-current-side]"),n=t.querySelector("[data-cassette]"),i=t.querySelector("[data-mixer-track-controls]"),c=t.querySelector("[data-mixer-seek]"),p=t.querySelector("[data-mixer-counter]"),y=t.querySelector("[data-mixer-time]"),g=t.querySelector("[data-mixer-master]"),A=t.querySelector("[data-mixer-master-value]"),q=t.querySelector("[data-mixer-pitch-knob]"),N=t.querySelector("[data-mixer-pitch-value]"),M=t.querySelector("[data-mixer-play-light]"),R=t.querySelector("[data-mixer-stop-light]"),G=t.querySelector("[data-mixer-prev]"),U=t.querySelector("[data-mixer-next]"),D=t.querySelector("[data-mixer-meter-bank]"),j=pr(t),Y=fr(t,h),te=gr(t),O=0,C=new Map,_=new Map;function S(T,I){if(!D)return null;let k=Array.from(D.querySelectorAll("[data-track-meter]"));return k.forEach(B=>{B.dataset.meterKey===void 0&&(B.dataset.meterKey=B.getAttribute("data-track-meter")||"")}),k.find(B=>B.dataset.meterKey===T)||(I?k.find(B=>B.dataset.meterKey==="aux"):null)||null}let L={play:new Audio(Oe("https://www.dropbox.com/scl/fi/sgvhyxbqoc0pakf6il1sq/4track-play.mp3?rlkey=zl6thgu94wmmd00pd5epuuex4&st=rj781cfj&dl=0")),pause:new Audio(Oe("https://www.dropbox.com/scl/fi/tbdvqrzh699clxtz4ui82/4trackstopp.mp3?rlkey=ejma0tqs2r9v0vid6c5n0d9aq&st=0q465h7m&dl=0")),stop:new Audio(Oe("https://www.dropbox.com/scl/fi/tbdvqrzh699clxtz4ui82/4trackstopp.mp3?rlkey=ejma0tqs2r9v0vid6c5n0d9aq&st=0q465h7m&dl=0")),rew:new Audio(Oe("https://www.dropbox.com/scl/fi/vyvts53ptjniimubulalu/4trackffw.mp3?rlkey=j9ezqp10z86qc04zthakrpcxx&st=k4ydo9v9&dl=0")),ff:new Audio(Oe("https://www.dropbox.com/scl/fi/vyvts53ptjniimubulalu/4trackffw.mp3?rlkey=j9ezqp10z86qc04zthakrpcxx&st=k4ydo9v9&dl=0"))};Object.values(L).forEach(T=>{T.preload="auto"});let P=new Map,$=dn(a,P);function F(T,{playbackRate:I=1,volume:k=.25}={}){try{T.pause(),T.currentTime=0,T.playbackRate=I,T.volume=k;let B=T.play();B&&typeof B.catch=="function"&&B.catch(()=>{})}catch{}}function z(){$=dn(a,P)}function Z(){let{currentSongId:T}=r.getState(),I=a.findIndex(k=>k.id===T);return I>=0?I:0}function ue(T,I){if(!T||!Number.isFinite(I)||I<=0)return;let k=P.get(T);k&&Math.abs(k-I)<.01||(P.set(T,I),z())}function _e(T){var X;let I=(X=T==null?void 0:T.tracks)==null?void 0:X[0];if(!(I!=null&&I.url)||P.has(T.id))return;let k=new Audio(I.url);k.preload="metadata";let B=()=>{ue(T.id,k.duration)};k.addEventListener("loadedmetadata",B,{once:!0}),k.addEventListener("durationchange",B,{once:!0})}a.forEach(_e);function me(T){return!!(T&&T.readyState>=3)}function Ae(T,{timeout:I=3500}={}){return T?me(T)?Promise.resolve({ok:!0,cached:!0}):new Promise(k=>{let B=!1,X=()=>{T.removeEventListener("canplaythrough",K),T.removeEventListener("loadedmetadata",K),T.removeEventListener("error",ie)},ee=W=>{B||(B=!0,X(),k(W))},K=()=>ee({ok:!0}),ie=W=>{console.warn("album-mixer: ui audio preload error",T.src,W),ee({ok:!1,error:!0})};T.addEventListener("canplaythrough",K,{passive:!0}),T.addEventListener("loadedmetadata",K,{passive:!0}),T.addEventListener("error",ie,{passive:!0}),window.setTimeout(()=>ee({ok:!1,timeout:!0}),I);try{T.load()}catch{ee({ok:!1,error:!0})}}):Promise.resolve({ok:!1,missing:!0})}function ye(T){let I=T==null?void 0:T.audio;if(!I)return Promise.resolve({ok:!1,missing:!0});if(I.preload="auto",T._isReady||me(I))return T._isReady=!0,Promise.resolve({ok:!0,cached:!0});if(T._readyPromise||(T._readyPromise=new Promise(k=>{let B=!1,X=()=>{I.removeEventListener("canplaythrough",K),I.removeEventListener("loadedmetadata",K),I.removeEventListener("error",ie)},ee=W=>{B||(B=!0,X(),T._isReady=!!(W!=null&&W.ok),T._preloadAttempted=!0,T._loadRequested=!1,k(W))},K=()=>ee({ok:!0}),ie=W=>{console.warn("album-mixer: preload error",I.src,W),ee({ok:!1,error:!0})};I.addEventListener("canplaythrough",K,{passive:!0}),I.addEventListener("loadedmetadata",K,{passive:!0}),I.addEventListener("error",ie,{passive:!0}),window.setTimeout(()=>ee({ok:!1,timeout:!0}),3500)})),!T._loadRequested&&I.readyState<3){T._loadRequested=!0;try{I.load()}catch{T._loadRequested=!1}}return T._readyPromise}function E(T){return T!=null&&T.id?r.ensureSong(T.id)||T:T||null}function d(T){var k;let I=E(T);return(k=I==null?void 0:I.tracks)!=null&&k.length?Promise.all(I.tracks.map(B=>ye(B))):Promise.resolve([])}function s(){return Promise.all(Object.values(L).map(T=>Ae(T)))}async function u(T,{timeout:I=3500,minShow:k=900}={}){var ie;let B=E(T);if(!((ie=B==null?void 0:B.tracks)!=null&&ie.length))return;let X=B.tracks.filter(W=>W==null?void 0:W.audio);if(!X.length||X.every(W=>me(W.audio)))return;let ee=performance.now();te.setAttribute("aria-hidden","false"),await Promise.race([d(B),new Promise(W=>window.setTimeout(W,I))]);let K=performance.now()-ee;K<k&&await new Promise(W=>window.setTimeout(W,k-K)),te.setAttribute("aria-hidden","true")}function w(T){d(T).catch(()=>{})}async function x(){let T=a[0];if(!T)return;let I=performance.now();te.setAttribute("aria-hidden","false"),await r.loadSong(T.id),await Promise.race([Promise.all([d(T),s()]),new Promise(B=>window.setTimeout(B,4500))]);let k=performance.now()-I;k<900&&await new Promise(B=>window.setTimeout(B,900-k)),te.setAttribute("aria-hidden","true")}function V(T){let{currentSongId:I}=r.getState(),k=$.byId.get(I),B=null;if(k){let X=$.sideSongs.get(k.side)||[],ee=X.findIndex(ie=>ie.id===I),K=X[ee+T];if(K)B=K;else{let W=($.orderedSongs.findIndex(de=>de.id===I)+T+$.orderedSongs.length)%$.orderedSongs.length;B=$.orderedSongs[W]}}if(!B){let ee=(Z()+T+a.length)%a.length;B=a[ee]}return B}async function H(T){let{currentTime:I}=r.getState();if(T<0&&I>3){r.seek(0),ce();return}let k=V(T),{isPlaying:B}=r.getState();F(T<0?L.rew:L.ff,{playbackRate:1,volume:.22}),await u(k),await r.loadSong(k.id,{autoplay:B}),re(),ae()}function J(){[l,f].forEach(T=>{T&&(T.innerHTML="")}),a.forEach(T=>{let I=document.createElement("button");I.type="button";let k=$.byId.get(T.id);I.textContent=k?`${k.cueLabel} ${T.title}`:T.title,I.dataset.songId=T.id,I.className="tm4-song-button",I.addEventListener("click",async()=>{await u(T),await r.loadSong(T.id),re(),ae()}),T.side==="B"?f==null||f.appendChild(I):l==null||l.appendChild(I)})}function ae(){let{currentSongId:T}=r.getState();t.querySelectorAll("[data-song-id]").forEach(I=>{I.toggleAttribute("data-active",I.dataset.songId===T)})}function re(){if(!i)return;let{song:T}=r.getState();if(i.innerHTML="",_.clear(),!T)return;m&&(m.textContent=T.title);let I=T.tracks.filter(k=>k.role!=="aux").length;t.style.setProperty("--tm4-channels",String(T.tracks.length)),t.style.setProperty("--tm4-main-channels",String(I)),t.dataset.channelCount=String(T.tracks.length),T.tracks.forEach((k,B)=>{var Tt,Et,kt,Lt,Mt,It,Ct,qt,Pt,$t,Nt,Ft,Ot,Ht,Rt,Dt,Bt,Vt;let X=cn(B),ee=k.role==="aux",K=wr(t)||document.createElement("section");K.classList.contains("tm4-strip")||(K.className="tm4-strip"),K.classList.toggle("tm4-strip--aux",ee),K.dataset.trackRole=ee?"aux":"main";let ie=k.label||j[B]||dr(k,B),W=K.querySelector("[data-track-title]")||document.createElement("div");W.className="tm4-strip-title",W.classList.toggle("tm4-strip-title--short",!!k.short),W.textContent=k.short||ie;let de=K.querySelector("[data-track-label]")||document.createElement("div");de.className="tm4-strip-title",de.dataset.trackLabel="",de.textContent=ie;let le=document.createElement("input");le.type="range",le.min="0",le.max="2",le.step="0.01",le.value=String((Tt=k.gain)!=null?Tt:0);let Xe=Q=>{ke(le,Q,0,2),r.setTrackGain(k.id,Q),Ke(Ve,Qe,ln(Q))};le.addEventListener("input",Q=>{Xe(parseFloat(Q.target.value))});let xe=document.createElement("input");xe.type="range",xe.min="-1",xe.max="1",xe.step="0.01",xe.value=String((Et=k.pan)!=null?Et:0);let Be=Q=>{ke(xe,Q,-1,1),r.setTrackPan(k.id,Q),Ke(Ue,Ze,Q===0?"C":Q<0?`L${Math.abs(Q).toFixed(1)}`:`R${Q.toFixed(1)}`)};xe.addEventListener("input",Q=>{Be(parseFloat(Q.target.value))});let be=document.createElement("input");be.type="range",be.min="-1",be.max="1",be.step="0.01",be.value=String((kt=k.eqHigh)!=null?kt:0);let We=Q=>{ke(be,Q,-1,1),r.setTrackEqHigh(k.id,Q),Ke(Ge,Je,ct(Q))};be.addEventListener("input",Q=>{We(parseFloat(Q.target.value))});let Ee=document.createElement("input");Ee.type="range",Ee.min="-1",Ee.max="1",Ee.step="0.01",Ee.value=String((Lt=k.eqLow)!=null?Lt:0);let At=Q=>{ke(Ee,Q,-1,1),r.setTrackEqLow(k.id,Q),Ke(je,et,ct(Q))};Ee.addEventListener("input",Q=>{At(parseFloat(Q.target.value))});let he=document.createElement("input");he.type="range",he.min="0",he.max="1",he.step="0.01",he.value=String((Mt=k.fader)!=null?Mt:.7),he.className="tm4-fader",he.addEventListener("input",Q=>{let Me=parseFloat(Q.target.value);He(he,Me,0,1),r.setTrackFader(k.id,Me),Ie.textContent=Fe(Me)});let Qe=document.createElement("span");Qe.className="tm4-readout",Qe.textContent=ln((It=k.gain)!=null?It:0);let Ze=document.createElement("span");Ze.className="tm4-readout",Ze.textContent=k.pan?k.pan<0?`L${Math.abs(k.pan).toFixed(1)}`:`R${k.pan.toFixed(1)}`:"C";let Je=document.createElement("span");Je.className="tm4-readout",Je.textContent=ct((Ct=k.eqHigh)!=null?Ct:0);let et=document.createElement("span");et.className="tm4-readout",et.textContent=ct((qt=k.eqLow)!=null?qt:0);let Ie=document.createElement("span");Ie.className="tm4-readout",Ie.textContent=Fe((Pt=k.fader)!=null?Pt:.7);let pe=K.querySelector(".tm4-strip-controls")||document.createElement("div");pe.className="tm4-strip-controls";let Ve=pe.querySelector('[data-control="gain"]')||ze("Gain",le,(($t=k.gain)!=null?$t:0)/2,Xe),Ge=pe.querySelector('[data-control="eq-high"]')||ze("EQ Hi",be,(((Nt=k.eqHigh)!=null?Nt:0)+1)/2,We),je=pe.querySelector('[data-control="eq-low"]')||ze("EQ Lo",Ee,(((Ft=k.eqLow)!=null?Ft:0)+1)/2,At),Ue=pe.querySelector('[data-control="pan"]')||ze("Pan",xe,(((Ot=k.pan)!=null?Ot:0)+1)/2,Be);ut(Ve,"gain"),ut(Ge,"eq-high"),ut(je,"eq-low"),ut(Ue,"pan");let tt=(Q,Me,gt,Hn,Rn,Dn)=>{let Gt=xt(Q),at=fn(Q);at&&at!==Me?at.replaceWith(Me):Gt&&!at&&Gt.appendChild(Me),Ke(Q,gt,gt.textContent)||Q.appendChild(gt),ke(Me,Hn,Rn,Dn)};tt(Ve,le,Qe,(Ht=k.gain)!=null?Ht:0,0,2),tt(Ge,be,Je,(Rt=k.eqHigh)!=null?Rt:0,-1,1),tt(je,Ee,et,(Dt=k.eqLow)!=null?Dt:0,-1,1),tt(Ue,xe,Ze,(Bt=k.pan)!=null?Bt:0,-1,1),pe.contains(Ve)||pe.appendChild(Ve),pe.contains(Ge)||pe.appendChild(Ge),pe.contains(je)||pe.appendChild(je),pe.contains(Ue)||pe.appendChild(Ue);let we=K.querySelector(".tm4-fader-wrap")||document.createElement("label");we.className="tm4-fader-wrap";let mt=we.querySelector(":scope > span");mt==null||mt.remove();let nt=we.querySelector("input"),rt=we.querySelector(".tm4-readout");nt&&nt!==he?nt.replaceWith(he):nt||we.appendChild(he),rt&&rt!==Ie?rt.replaceWith(Ie):rt||we.appendChild(Ie),He(he,(Vt=k.fader)!=null?Vt:.7,0,1);let On=mn(we)||we;pn(On,he,0,1,Q=>{r.setTrackFader(k.id,Q),Ie.textContent=Fe(Q)});let $e=vr(S(X,ee)||!D&&(K.querySelector(`[data-track-meter="${X}"]`)||K.querySelector("[data-track-meter]"))||(D?null:yr(X)),X);$e?_.set(X,$e):D&&console.warn(`album-mixer: engan m\xE6li a\xF0 finna fyrir ${X}. Settu data-track-meter="${X}"`+(ee?' e\xF0a "aux"':"")+" \xE1 reitinn \xED m\xE6labor\xF0inu."),un($e,C.get(X)||0),K.contains(W)||K.appendChild(W),K.contains(pe)||K.appendChild(pe),$e&&!D&&!K.contains($e)&&K.appendChild($e),K.contains(we)||K.appendChild(we),K.contains(de)||K.appendChild(de),i.appendChild(K)}),D&&Array.from(D.querySelectorAll("[data-track-meter]")).filter(k=>!Array.from(_.values()).includes(k)).forEach(k=>{console.warn(`album-mixer: m\xE6lireitur "${k.dataset.meterKey}" passar vi\xF0 enga r\xE1s \xED \xFEessu lagi`)})}function ce(){let{currentSongId:T,currentTime:I,duration:k,song:B}=r.getState();ue(T,k);let X=$.byId.get(T),ee=k>0?Math.min(I/k,1):0,K=1-ee*.35,ie=.65+ee*.35,W=((X==null?void 0:X.sideStart)||0)+I,de=(X==null?void 0:X.sideTotal)||k||0,le=(X==null?void 0:X.cueLabel)||(B==null?void 0:B.side)||"-";c&&(c.max=String(k||0),c.value=String(Math.min(I,k||0))),y&&(y.textContent=`${le} ${lt(W)} / ${lt(de)}`),p&&(p.textContent=ur(W)),b&&(b.textContent=`${le} ${lt(W)} / ${lt(de)}`),t.style.setProperty("--left-reel-scale",String(K)),t.style.setProperty("--right-reel-scale",String(ie))}function ve(){let{isPlaying:T,pitch:I,song:k}=r.getState(),B=$.byId.get((k==null?void 0:k.id)||"");t.classList.toggle("is-playing",!!T),n==null||n.classList.toggle("is-playing",!!T),M==null||M.toggleAttribute("data-active",!!T),R==null||R.toggleAttribute("data-active",!T),t.style.setProperty("--pitch-rate",String(I||1)),h&&(h.textContent=(k==null?void 0:k.title)||"No Tape"),v&&(v.textContent=Y||""),e&&(e.textContent=(B==null?void 0:B.cueLabel)||(k==null?void 0:k.side)||"-"),m&&(m.textContent=B?`${B.cueLabel} ${(k==null?void 0:k.title)||""}`.trim():(k==null?void 0:k.title)||"Loading...")}(Pe=t.querySelector("[data-mixer-play]"))==null||Pe.addEventListener("click",async()=>{try{let T=r.getState().song||await r.loadSong(a[0].id);await u(T),F(L.play,{playbackRate:1,volume:.18}),await r.play()}catch(T){console.warn("album-mixer: play request failed",T)}finally{te.setAttribute("aria-hidden","true")}}),(Ye=t.querySelector("[data-mixer-pause]"))==null||Ye.addEventListener("click",()=>{F(L.pause,{playbackRate:1,volume:.16}),r.pause()}),(De=t.querySelector("[data-mixer-stop]"))==null||De.addEventListener("click",()=>{F(L.stop,{playbackRate:1,volume:.18}),r.stop()});let ne=t.querySelector("[data-mixer-export]"),ge=t.querySelector("[data-mixer-export-progress]"),Te=String(t.dataset.export||"").toLowerCase()!=="off";if(ne&&!Te&&(ne.hidden=!0),ne&&Te){let T={fetch:"S\xE6ki stem",decode:"Afk\xF3\xF0a",render:"Rendra mix",encode:"K\xF3\xF0a MP3",done:"Tilb\xFAi\xF0"},I=k=>{ge&&(ge.textContent=k),ne.dataset.exportStatus=k};ne.addEventListener("click",async()=>{var W,de;if(ne.dataset.exporting==="true")return;let{song:k,masterVolume:B,pitch:X}=r.getState(),ee=(k==null?void 0:k.tracks)||[];if(!ee.length)return;let K=((de=(W=ee[0])==null?void 0:W.audio)==null?void 0:de.duration)||0,ie=an(K,ee.length);if(!ie.ok){I(ie.reason);return}ne.dataset.exporting="true",ne.disabled=!0;try{let le=await on({container:t,song:k,albumTitle:Y,tracks:ee,masterPosition:B,pitch:X,bitrate:192,onProgress:({phase:Be,ratio:be})=>{let We=T[Be]||Be;I(`${We} ${Math.round((be||0)*100)}%`)}}),Xe=String((k==null?void 0:k.title)||"mix").replace(/[\\/:*?"<>|]/g,""),xe=String(Y||"Vogor").replace(/[\\/:*?"<>|]/g,"");sn(le,`Stafraenn Hakon - ${xe} - ${Xe} (my mix).mp3`),I("Tilb\xFAi\xF0")}catch(le){console.warn("album-mixer: export failed",le),I((le==null?void 0:le.message)||"\xDAtflutningur br\xE1st")}finally{ne.dataset.exporting="false",ne.disabled=!1}})}if(G==null||G.addEventListener("click",async()=>{await H(-1)}),U==null||U.addEventListener("click",async()=>{await H(1)}),c==null||c.addEventListener("input",T=>{r.seek(parseFloat(T.target.value))}),g==null||g.addEventListener("input",T=>{let I=parseFloat(T.target.value);He(g,I,0,1),r.setMasterVolume(I),A&&(A.textContent=Fe(I))}),g){let T=mn(g.closest(".tm4-fader-wrap, .tm4-master-strip"))||g;pn(T,g,0,1,I=>{r.setMasterVolume(I),A&&(A.textContent=Fe(I))})}if(q){let T=fn(q),I=T||document.createElement("input");I.type="range",I.min="0.75",I.max="1.25",I.step="0.005",I.value=String(r.getState().pitch);let k=B=>{ke(I,B,.75,1.25),r.setPitch(B),N&&(N.textContent=`${Math.round(B*100)}%`)};if(I.addEventListener("input",B=>{k(parseFloat(B.target.value))}),T){let B=xt(q)||q;ke(I,r.getState().pitch,.75,1.25),hn(B,I,.75,1.25,k)}else{let B=ze("Pitch",I,(r.getState().pitch-.75)/.5,k);q.innerHTML="",q.appendChild(B)}}r.addEventListener("songchange",()=>{re(),J(),ae(),ce(),ve();let T=r.getState().song;w(T)}),r.addEventListener("timeupdate",()=>{ce()}),r.addEventListener("playstatechange",()=>{ve()}),r.addEventListener("pitchchange",()=>{ve()}),r.addEventListener("songended",async()=>{let T=V(1);T&&(await u(T),await r.loadSong(T.id,{autoplay:!0}),re(),ae())});function Le(){r.getMeterLevels().forEach(({level:I},k)=>{let B=cn(k),X=_.get(B);if(!X)return;let ee=C.get(B)||0,W=I>=ee?.42:.18,de=ee+(I-ee)*W;C.set(B,de),un(X,de)}),O=window.requestAnimationFrame(Le)}return J(),re(),ce(),ve(),N&&(N.textContent=`${Math.round(r.getState().pitch*100)}%`),A&&(A.textContent=Fe(r.getState().masterVolume)),g&&He(g,r.getState().masterVolume,0,1),O=window.requestAnimationFrame(Le),x().catch(T=>{console.warn("album-mixer: initial preload failed",T),te.setAttribute("aria-hidden","true")}),{container:t,engine:r,destroy(){O&&window.cancelAnimationFrame(O)}}}function yn(o,t,a=300){let l=a/30,f=o.volume,m=t-f,h=0,v=setInterval(()=>{h++,o.volume=f+m*(h/30),h>=30&&(o.volume=t,clearInterval(v))},l)}function vn(o=document){console.log("multitrack: init");let t=o.querySelector("[data-multitrack-player]");if(!t)return console.warn("multitrack: no [data-multitrack-player] found"),null;let a=t.querySelector("[data-mt-play]"),r=t.querySelector("[data-mt-pause]"),l=t.querySelector("[data-mt-stop]"),f=Array.from(t.querySelectorAll("[data-mt-trigger]")),m=[];if(f.forEach((M,R)=>{let G=(M.dataset.mtAudio||"").trim();if(!G){M.classList.add("is-disabled");return}let U=M.closest("[data-mt-track]"),D=(U==null?void 0:U.dataset.mtTrack)||null,j=new Audio(G);j.preload="auto",j.volume=0,m.push({id:`t-${R}`,songId:D,el:M,audio:j,_driftEMA:void 0,_nudgeTimeout:null})}),console.log("multitrack: triggers =",f.length,"usable tracks =",m.length),!m.length)return console.warn("multitrack: no usable tracks found (check data-mt-audio)"),null;let h=!1,v=!1,b=null,e=null;function n(M){let R=m.filter(_=>_.songId===M);if(!R.length)return;let G=R.find(_=>_.el.classList.contains("is-active"))||R[0],U=G&&G.audio;if(!U||U.paused)return;let D=U.currentTime,j=.25,Y=.05,te=.25,O=.02,C=600;R.forEach(_=>{if(_===G)return;let S=_.audio;if(!S||S.paused)return;let L=S.currentTime-D;Number.isFinite(L)||(L=0),typeof _._driftEMA=="undefined"?_._driftEMA=L:_._driftEMA=j*L+(1-j)*_._driftEMA;let P=_._driftEMA;if(Math.abs(P)<=Y){_._nudgeTimeout&&(clearTimeout(_._nudgeTimeout),_._nudgeTimeout=null);try{S.playbackRate!==1&&(S.playbackRate=1)}catch{}return}if(Math.abs(P)>=te){try{S.currentTime=D}catch{}_._driftEMA=0,_._nudgeTimeout&&(clearTimeout(_._nudgeTimeout),_._nudgeTimeout=null);try{S.playbackRate=1}catch{}return}let F=1-(P>0?1:-1)*O;try{S.playbackRate!==F&&(S.playbackRate=F)}catch{}_._nudgeTimeout&&clearTimeout(_._nudgeTimeout),_._nudgeTimeout=setTimeout(()=>{try{S.playbackRate=1}catch{}_._nudgeTimeout=null},C)})}function i(M){c(),M&&(e=setInterval(()=>{try{n(M)}catch(R){console.warn("multitrack: resync error",R)}},800))}function c(){e&&(clearInterval(e),e=null),m.forEach(M=>{M._nudgeTimeout&&(clearTimeout(M._nudgeTimeout),M._nudgeTimeout=null);try{M.audio.playbackRate=1}catch{}M._driftEMA=void 0})}function p(){m.forEach(M=>{let{audio:R,songId:G,el:U}=M;R.paused&&R.play().catch(D=>{var j;console.warn("multitrack: play failed",{error:D&&D.name,message:D&&D.message,src:R.src,songId:G,stem:((j=U==null?void 0:U.dataset)==null?void 0:j.mtStem)||null})})}),v=!0}function y(){m.forEach(({audio:M})=>M.pause()),v=!1}function g(){m.forEach(M=>{let{audio:R,el:G}=M;R.pause(),R.currentTime=0,R.volume=0,G.classList.remove("is-active")}),v=!1,h=!1,b=null,c(),window.dispatchEvent(new CustomEvent("mt:song:change",{detail:{songId:null}})),window.dispatchEvent(new CustomEvent("mt:stem:change",{detail:{songId:null,activeStems:[]}}))}function A(){h||(h=!0,p())}function q(){let M=b,R=m.filter(G=>!M||G.songId===M).filter(G=>G.el.classList.contains("is-active")).map(G=>G.el.dataset.mtStem||"Stem");window.dispatchEvent(new CustomEvent("mt:stem:change",{detail:{songId:M,activeStems:R}}))}function N(M){let R=b;M.songId&&b&&M.songId!==b&&(m.forEach(U=>{U.audio.pause(),U.audio.currentTime=0,U.audio.volume=0,U.el.classList.remove("is-active")}),v=!1,h=!1,c()),M.songId&&(b=M.songId),A(),v||p();let G=M.audio.volume>.01;G?yn(M.audio,0,300):yn(M.audio,1,300),M.el.classList.toggle("is-active",!G),M.songId&&M.songId!==R&&window.dispatchEvent(new CustomEvent("mt:song:change",{detail:{songId:M.songId}})),q(),b&&m.some(D=>D.songId===b&&D.el.classList.contains("is-active"))?i(b):c()}return m.forEach(M=>{M.el.addEventListener("click",()=>N(M)),M.el.addEventListener("mouseenter",()=>{M.songId&&window.dispatchEvent(new CustomEvent("mt:stem:hover",{detail:{songId:M.songId}}))}),M.el.addEventListener("mouseleave",()=>{window.dispatchEvent(new CustomEvent("mt:stem:leave"))})}),a==null||a.addEventListener("click",()=>{A(),p(),q(),b&&i(b)}),r==null||r.addEventListener("click",()=>{y()}),l==null||l.addEventListener("click",()=>{g()}),console.log("multitrack: ready (with resync)"),{container:t,tracks:m,playAll:p,pauseAll:y,stopAll:g,toggleTrack:N,ensureStarted:A}}var xn=[{x:.279,y:.198},{x:.369,y:.17},{x:.42,y:.172},{x:.466,y:.073},{x:.499,y:.178},{x:.54,y:.139},{x:.572,y:.088},{x:.697,y:.262},{x:.577,y:.205},{x:.452,y:.219},{x:.403,y:.235},{x:.278,y:.346},{x:.418,y:.341},{x:.475,y:.336},{x:.528,y:.347},{x:.577,y:.286},{x:.628,y:.349},{x:.825,y:.28},{x:.817,y:.421},{x:.748,y:.498},{x:.659,y:.47},{x:.552,y:.462},{x:.499,y:.434},{x:.396,y:.407},{x:.33,y:.446},{x:.261,y:.514},{x:.188,y:.555},{x:.302,y:.601},{x:.383,y:.559},{x:.484,y:.566},{x:.527,y:.623},{x:.564,y:.577},{x:.614,y:.617},{x:.674,y:.577},{x:.717,y:.678},{x:.645,y:.689},{x:.592,y:.708},{x:.516,y:.728},{x:.44,y:.728},{x:.376,y:.721},{x:.314,y:.702},{x:.247,y:.701},{x:.141,y:.816},{x:.266,y:.803},{x:.324,y:.85},{x:.385,y:.828},{x:.44,y:.914},{x:.552,y:.781},{x:.635,y:.774},{x:.744,y:.763}],pt=[{x:.174,y:.145},{x:.441,y:.187},{x:.191,y:.265},{x:.298,y:.246},{x:.484,y:.26},{x:.649,y:.277},{x:.801,y:.284},{x:.145,y:.328},{x:.295,y:.315},{x:.393,y:.305},{x:.481,y:.328},{x:.554,y:.323},{x:.088,y:.44},{x:.163,y:.389},{x:.267,y:.377},{x:.437,y:.385},{x:.499,y:.382},{x:.588,y:.392},{x:.653,y:.418},{x:.822,y:.371},{x:.917,y:.458},{x:.786,y:.452},{x:.662,y:.48},{x:.505,y:.47},{x:.437,y:.488},{x:.274,y:.44},{x:.2,y:.457},{x:.178,y:.495},{x:.264,y:.511},{x:.376,y:.523},{x:.465,y:.537},{x:.536,y:.548},{x:.655,y:.529},{x:.816,y:.501},{x:.853,y:.543},{x:.913,y:.577},{x:.715,y:.583},{x:.647,y:.631},{x:.513,y:.598},{x:.423,y:.565},{x:.284,y:.593},{x:.217,y:.553},{x:.197,y:.59},{x:.109,y:.603},{x:.23,y:.638},{x:.312,y:.649},{x:.423,y:.673},{x:.522,y:.652},{x:.732,y:.695},{x:.324,y:.716},{x:.234,y:.744}],bn={Mars:{slotStart:15,count:11},Palli:{slotStart:41,count:8},Agust:{slotStart:31,count:7},Siggi:{slotStart:0,count:7}};function Tr(o){var f;let t=o.el.dataset.mtStem;if(t)return t;let a=o.el.dataset.mtAudio||((f=o.audio)==null?void 0:f.src)||"";if(!a)return"Stem";let l=a.split("/").pop().replace(/\.[^/.]+$/,"");return l=l.replace(/^(Mars|Palli|Agust|Siggi)[0-9\-_]*/i,""),l=l.replace(/[_-]+/g," ").trim(),l.charAt(0).toUpperCase()+l.slice(1)}function Er(o,t,a=500){let l=a/30,f=o.volume,m=t-f,h=0,v=setInterval(()=>{h++,o.volume=f+m*(h/30),h>=30&&(o.volume=t,clearInterval(v))},l)}function wn(o){if(!o)return;let{container:t,tracks:a}=o,r=t.querySelector("[data-mt-activesong]"),l=t.querySelector("[data-mt-activestems]"),f=t.querySelector("[data-mt-status]"),m={};t.querySelectorAll("[data-mt-trackimg]").forEach(O=>{let C=O.dataset.mtTrackimg;C&&(m[C]=O,O.style.display="none")});let h={},v={...bn};t.querySelectorAll("[data-mt-track]").forEach(O=>{var P,$;let C=O.dataset.mtTrack;if(!C)return;let _=O.dataset.mtColor;_&&(h[C]=_);let S=O.dataset.mtSlotstart,L=O.dataset.mtCount;if(S!=null||L!=null){let F=v[C]||{},z=S!=null?parseInt(S,10):(P=F.slotStart)!=null?P:0,Z=L!=null?parseInt(L,10):($=F.count)!=null?$:0;v[C]={slotStart:z,count:Z}}}),a.forEach(O=>{O.stemName=Tr(O)});function b(){a.forEach(O=>{let C=O.audio;if(C&&(C.preload="auto",O._readyPromise||(O._readyPromise=new Promise(_=>{let S=!1,L=()=>{C.removeEventListener("canplaythrough",$),C.removeEventListener("loadedmetadata",$),C.removeEventListener("error",F)},P=z=>{if(!S){S=!0,L();try{_(z)}catch{}}},$=()=>P({ok:!0}),F=z=>{var Z,ue;console.warn("asleep: preload error",C.src||((ue=(Z=O.el)==null?void 0:Z.dataset)==null?void 0:ue.mtAudio)||"",z),P({ok:!1,error:!0})};if(C.readyState>=3){P({ok:!0,cached:!0});return}C.addEventListener("canplaythrough",$,{passive:!0}),C.addEventListener("loadedmetadata",$,{passive:!0}),C.addEventListener("error",F,{passive:!0}),setTimeout(()=>P({ok:!1,timeout:!0}),3500)})),C.readyState<3))try{C.load()}catch{}})}async function e(O=null,C=3500,_=900){let S=t.querySelector("[data-asleep-preloader]")||document.querySelector("[data-asleep-preloader]");if(!S)return;let L=performance.now();S.setAttribute("aria-hidden","false"),console.log("asleep: preloader ON");let P=a.filter(F=>!O||O.includes(F.songId)).map(F=>F._readyPromise||Promise.resolve({ok:!0}));await Promise.race([Promise.all(P),new Promise(F=>setTimeout(F,C))]);let $=performance.now()-L;$<_&&await new Promise(F=>setTimeout(F,_-$)),S.setAttribute("aria-hidden","true"),console.log("asleep: preloader OFF after",performance.now()-L,"ms")}let i=window.matchMedia("(max-width: 991px)").matches&&pt&&pt.length?pt:xn;function c(){let O=new Map;a.forEach(C=>{C.songId&&(O.has(C.songId)||O.set(C.songId,[]),O.get(C.songId).push(C.el))}),O.forEach((C,_)=>{let S=v[_];if(!S)return;let L=S.slotStart;for(let P=0;P<C.length;P++){let $=i[L+P];if(!$)continue;let F=C[P];F.removeAttribute("style"),F.style.position="absolute",F.style.left=$.x*100+"%",F.style.top=$.y*100+"%",F.style.pointerEvents="auto",F.style.transform="translate(-50%, -50%)"}})}let p=t.querySelector("[data-mt-default]"),y=(p==null?void 0:p.dataset.mtDefault)||"",g=null,A=!1;y&&(g=new Audio(y),g.loop=!0,g.volume=1,(async()=>{try{await g.play(),A=!0}catch{let _=()=>{g.play().then(()=>{A=!0}).catch(()=>{})};window.addEventListener("pointerdown",_,{once:!0,passive:!0})}})());function q(){!A||!g||(Er(g,0,500),setTimeout(()=>{g.pause(),g.currentTime=0},550),A=!1)}function N(O){if(!r)return;r.innerHTML="";let C=O||"",_=m[C];if(_){let L=_.cloneNode(!0);L.removeAttribute("data-mt-trackimg"),L.style.display="block",L.loading="lazy",r.appendChild(L)}else r.textContent=C||"\u2013";let S=h[C]||"#cdb5b0";t.style.setProperty("--asleep-glow",S)}let M=new Set,R=null;function G(){if(l){if(l.innerHTML="",M.size===0){let O=document.createElement("li");O.textContent="\u2013",l.appendChild(O);return}M.forEach(O=>{let C=document.createElement("li");C.textContent=O,l.appendChild(C)})}}function U(){f&&(f.classList.add("is-visible"),R&&clearTimeout(R),R=setTimeout(()=>{M.size===0&&f.classList.remove("is-visible")},5e3))}function D(O){a.forEach(C=>{C.songId===O?C.el.classList.add("song-hover"):C.el.classList.remove("song-hover")})}function j(){a.forEach(O=>O.el.classList.remove("song-hover"))}let Y=!1;window.addEventListener("mt:stem:change",O=>{let C=O.detail||{},_=C.songId||null,S=Array.isArray(C.activeStems)?C.activeStems:[];M.clear(),S.forEach(L=>M.add(L)),N(_||"\u2013"),G(),S.length>0&&(U(),Y||(Y=!0,q()))}),window.addEventListener("mt:song:change",O=>{var _;let C=((_=O.detail)==null?void 0:_.songId)||"\u2013";N(C),U()}),window.addEventListener("mt:stem:hover",O=>{var _;let C=((_=O.detail)==null?void 0:_.songId)||null;C&&D(C)}),window.addEventListener("mt:stem:leave",()=>{j()});let te=t.querySelector("[data-mt-stop]");te==null||te.addEventListener("click",()=>{M.clear(),G(),N("\u2013")}),console.log("asleep: ready (visuals only \u2013 slots + drone + status + preload + glow)"),c(),b(),setTimeout(()=>{e()},50)}var kr="rpghdz4ncwxr449",wt=/\.(mp3|wav|m4a|aac|ogg|flac)$/i;function Sn(o){if(o=o||document.querySelector("[data-vogor-player]"),!o)return null;let t=o.dataset.appKey||kr,a=o.dataset.folder||"",r=E=>o.querySelector(`[data-vp="${E}"]`),l=r("audio"),f=[],m=null,h=null,v=0,b=null,e=(E,d)=>{try{localStorage.setItem(E,d)}catch{}},n=E=>{try{return localStorage.getItem(E)}catch{return null}},i=E=>{try{localStorage.removeItem(E)}catch{}};function c(E,d){let s=r(E);s&&(s.textContent=d,s.classList.add("is-open"))}function p(E){let d=r(E);d&&d.classList.remove("is-open")}function y(E){if(!isFinite(E))return"\u2013:\u2013\u2013";let d=Math.floor(E/60),s=Math.floor(E%60);return d+":"+(s<10?"0":"")+s}let g=()=>location.origin+location.pathname;function A(){let E=new Uint8Array(48);return crypto.getRandomValues(E),Array.prototype.map.call(E,d=>("0"+d.toString(16)).slice(-2)).join("")}function q(E){let d=new Uint8Array(E),s="";for(let u=0;u<d.length;u++)s+=String.fromCharCode(d[u]);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function N(E){return crypto.subtle.digest("SHA-256",new TextEncoder().encode(E)).then(q)}function M(){if(p("loginErr"),!t){c("loginErr","Vantar app key \u2014 sj\xE1 lei\xF0beiningar.");return}let E=A();e("rs_verifier",E),N(E).then(d=>{let s="https://www.dropbox.com/oauth2/authorize?client_id="+encodeURIComponent(t)+"&response_type=code&token_access_type=offline&code_challenge="+d+"&code_challenge_method=S256&redirect_uri="+encodeURIComponent(g());try{window.top.location.href=s}catch{location.href=s}})}function R(E){return fetch("https://api.dropboxapi.com/oauth2/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(E).toString()}).then(d=>d.json().then(s=>{if(!d.ok)throw new Error(s.error_description||s.error||"OAuth villa");return s}))}function G(E){return R({code:E,grant_type:"authorization_code",code_verifier:n("rs_verifier")||"",client_id:t,redirect_uri:g()}).then(d=>{i("rs_verifier"),d.refresh_token&&e("rs_refresh",d.refresh_token),h=d.access_token,v=Date.now()+Math.max(0,d.expires_in-60)*1e3})}function U(){if(h&&Date.now()<v)return Promise.resolve(h);let E=n("rs_refresh");return E?R({grant_type:"refresh_token",refresh_token:E,client_id:t}).then(d=>(h=d.access_token,v=Date.now()+Math.max(0,d.expires_in-60)*1e3,h)):Promise.reject(new Error("Ekki tengt"))}function D(){i("rs_refresh"),h=null,v=0,f=[],m=null,l.pause(),l.removeAttribute("src"),Z(),Ae(),L(!1)}function j(E,d){return U().then(s=>{let u={Authorization:"Bearer "+s,"Content-Type":"application/json"};return b&&E.indexOf("files/")===0&&(u["Dropbox-API-Path-Root"]=b),fetch("https://api.dropboxapi.com/2/"+E,{method:"POST",headers:u,body:d===null?"null":JSON.stringify(d)}).then(w=>w.ok?w.json():w.text().then(x=>{let V=x;try{V=JSON.parse(x).error_summary||x}catch{}throw new Error(V)}))})}function Y(E){let d=[];function s(u){return d=d.concat(u.entries),u.has_more?j("files/list_folder/continue",{cursor:u.cursor}).then(s):d}return j("files/list_folder",{path:E,recursive:!1}).then(s)}function te(E){if(E=(E||"").trim(),/^https?:\/\//i.test(E))try{let s=new URL(E).pathname.replace(/^\/home(\/|$)/,"/");try{s=decodeURIComponent(s)}catch{}E=s}catch{}return E&&E[0]!=="/"&&(E="/"+E),E==="/"&&(E=""),E.length>1&&E[E.length-1]==="/"&&(E=E.slice(0,-1)),E}function O(){p("err");let E=te(r("folder").value),d=r("loadFolder");d.disabled=!0,d.textContent="S\xE6ki...",Y(E).then(s=>{let u=s.filter(w=>w[".tag"]==="file"&&wt.test(w.name));if(!u.length)throw new Error("Engar hlj\xF3\xF0skr\xE1r fundust \xED \xFEessari m\xF6ppu.");return Promise.all(u.map(w=>j("files/get_temporary_link",{path:w.path_lower}).then(x=>({url:x.link,name:w.name.replace(wt,""),dur:NaN}))))}).then(s=>{e("rs_folder",E),f=C(s),m=null,f.forEach(S),Z(),Ae()}).catch(s=>{c("err","Villa: "+s.message)}).then(()=>{d.disabled=!1,d.textContent="S\xE6kja l\xF6g"})}function C(E){let d=(n("rs_order")||"").split(`
`).filter(Boolean);return E.sort((s,u)=>{let w=d.indexOf(s.name),x=d.indexOf(u.name);return w===-1&&x===-1?s.name.localeCompare(u.name,"is"):w===-1?1:x===-1?-1:w-x}),E}function _(){e("rs_order",f.map(E=>E.name).join(`
`))}function S(E){let d=new Audio;d.preload="metadata",d.src=E.url,d.addEventListener("loadedmetadata",()=>{E.dur=d.duration,Z()})}function L(E){return r("loginPanel").style.display=E?"none":"block",r("folderPanel").style.display=E?"block":"none",E?(r("folder").value=n("rs_folder")||a||"",j("users/get_current_account",null).then(d=>{let s=r("acct");s.textContent="Tengt sem ";let u=document.createElement("b");u.textContent=d.name.display_name,s.appendChild(u);let w=d.root_info;w&&w.root_namespace_id&&w.home_namespace_id&&w.root_namespace_id!==w.home_namespace_id&&(b=JSON.stringify({".tag":"root",root:w.root_namespace_id}))}).catch(()=>{r("acct").textContent="Tengt vi\xF0 Dropbox"})):Promise.resolve()}let P="";function $(E){let d=E.lastIndexOf("/");return d<=0?"":E.substring(0,d)}function F(E,d,s){let u=document.createElement("div");return u.className="vp-bitem"+(d?" "+d:""),u.textContent=E,s&&u.addEventListener("click",s),u}function z(E){r("browser").classList.add("is-open"),P=E,r("bpath").textContent=E||"/ (r\xF3t)",r("buse").textContent="";let d=r("bitems");d.innerHTML="",d.appendChild(F("S\xE6ki...","is-dim")),Y(E).then(s=>{d.innerHTML="",E&&d.appendChild(F("\u2B11 ..","",()=>z($(E))));let u=s.filter(x=>x[".tag"]==="folder").sort((x,V)=>x.name.localeCompare(V.name,"is"));u.forEach(x=>{d.appendChild(F("\u{1F4C1} "+x.name,"",()=>z(x.path_display||E+"/"+x.name)))}),u.length||d.appendChild(F("Engar undirm\xF6ppur","is-dim"));let w=s.filter(x=>x[".tag"]==="file"&&wt.test(x.name)).length;r("buse").textContent="\u2713 Nota \xFEessa m\xF6ppu ("+w+" hlj\xF3\xF0skr\xE1r)"}).catch(s=>{if(E){z("");return}d.innerHTML="",d.appendChild(F("Villa: "+s.message,"is-dim"))})}function Z(){let E=r("list");E.innerHTML="",r("listhead").classList.toggle("is-active",f.length>0),r("player").classList.toggle("is-active",f.length>0),f.length&&f.forEach((d,s)=>{let u=document.createElement("li");u.className="vp-track"+(d.url===m?" is-playing":""),u.draggable=!0,u.dataset.index=s,u.innerHTML='<span class="vp-grip" aria-hidden="true">\u283F</span><span class="vp-num"></span><span class="vp-led" aria-hidden="true"></span><span class="vp-name"></span><span class="vp-dur"></span><button class="vp-mv" data-mv="up" title="F\xE6ra upp" aria-label="F\xE6ra upp">\u25B2</button><button class="vp-mv" data-mv="down" title="F\xE6ra ni\xF0ur" aria-label="F\xE6ra ni\xF0ur">\u25BC</button>',u.querySelector(".vp-num").textContent=s+1,u.querySelector(".vp-name").textContent=d.name,u.querySelector(".vp-dur").textContent=y(d.dur),u.querySelector(".vp-name").addEventListener("click",()=>me(s)),u.querySelector('[data-mv="up"]').addEventListener("click",w=>{w.stopPropagation(),ue(s,s-1)}),u.querySelector('[data-mv="down"]').addEventListener("click",w=>{w.stopPropagation(),ue(s,s+1)}),u.addEventListener("dragstart",w=>{w.dataTransfer.setData("text/plain",s),u.classList.add("is-dragging")}),u.addEventListener("dragend",()=>u.classList.remove("is-dragging")),u.addEventListener("dragover",w=>w.preventDefault()),u.addEventListener("drop",w=>{w.preventDefault();let x=parseInt(w.dataTransfer.getData("text/plain"),10),V=parseInt(u.dataset.index,10);!isNaN(x)&&!isNaN(V)&&x!==V&&ue(x,V)}),E.appendChild(u)})}function ue(E,d){if(d<0||d>=f.length)return;let s=f.splice(E,1)[0];f.splice(d,0,s),_(),Z()}let _e=()=>f.findIndex(E=>E.url===m);function me(E){E<0||E>=f.length||(m=f[E].url,l.src=m,l.play(),Ae(),Z())}function Ae(){let E=_e(),d=r("nowNum"),s=r("nowName");d.textContent=E>=0?String(E+1).padStart(2,"0"):"--",s.textContent=E>=0?f[E].name:""}r("connect").addEventListener("click",M),r("logout").addEventListener("click",D),r("loadFolder").addEventListener("click",O),r("browseBtn").addEventListener("click",()=>{let E=r("browser");if(E.classList.contains("is-open")){E.classList.remove("is-open");return}z(te(r("folder").value))}),r("buse").addEventListener("click",()=>{r("folder").value=P||"/",r("browser").classList.remove("is-open"),O()}),r("playpause").addEventListener("click",()=>{if(!l.src&&f.length){me(0);return}l.paused?l.play():l.pause()}),r("next").addEventListener("click",()=>{let E=_e();me(E+1<f.length?E+1:0)}),r("prev").addEventListener("click",()=>{let E=_e();me(E>0?E-1:0)}),l.addEventListener("play",()=>{r("playpause").textContent="\u23F8"}),l.addEventListener("pause",()=>{r("playpause").textContent="\u25B6"}),l.addEventListener("ended",()=>{let E=_e();E+1<f.length&&me(E+1)}),l.addEventListener("timeupdate",()=>{r("cur").textContent=y(l.currentTime),r("tot").textContent=y(l.duration),isFinite(l.duration)&&(r("seek").value=l.currentTime/l.duration*100)}),r("seek").addEventListener("input",function(){isFinite(l.duration)&&(l.currentTime=this.value/100*l.duration)}),r("copy").addEventListener("click",()=>{let E=f.map((d,s)=>s+1+". "+d.name).join(`
`);navigator.clipboard.writeText(E).then(()=>{let d=r("toast");d.classList.add("is-open"),setTimeout(()=>d.classList.remove("is-open"),1600)})});let ye=new URLSearchParams(location.search).get("code");return ye?G(ye).then(()=>(history.replaceState(null,"",location.pathname),L(!0))).then(()=>{(n("rs_folder")||a)&&O()}).catch(E=>{L(!1),c("loginErr","Innskr\xE1ning mist\xF3kst: "+E.message)}):n("rs_refresh")?L(!0).then(()=>{(n("rs_folder")||a)&&O()}):L(!1),{play:me,loadFolder:O,logout:D,get tracks(){return f}}}var Lr="https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec",Tn="per-yfirlestur-lykill",An="per-yfirlestur-hver";function En(o){try{return localStorage.getItem(o)||""}catch{return""}}function kn(o,t){try{localStorage.setItem(o,t)}catch{}}function Ln(){let o=new URL(location.href),t=o.searchParams.get("k");if(t){o.searchParams.delete("k");try{history.replaceState(history.state,"",o.href)}catch{}return{key:t,fresh:!0}}return{key:En(Tn),fresh:!1}}function Mn(o){kn(Tn,o)}var qe={get:()=>En(An),set:o=>kn(An,o)};async function ft(o,t){let r=await(await fetch(Lr,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({...t,k:o})})).json();if(r.rangurLykill){let l=new Error("Hlekkurinn gildir ekki.");throw l.badKey=!0,l}return r}function In(o){let t=/^(\d{1,2}):(\d\d)$/.exec((o||"").trim());return t?Number(t[1])*60+Number(t[2]):null}var Mr=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"];function Cn(o){let t=/^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(o||"");return t?`${Number(t[3])}. ${Mr[Number(t[2])-1]} kl. ${t[4]}`:""}var qn=`/* \xC6fingas\xED\xF0an (permixer.js). Sprauta\xF0 inn \xFAr JS, allt undir .pm */

.pm {
  --pm-bg: #111;
  --pm-fg: #ececec;
  --pm-muted: #8c8c8c;
  --pm-line: #2a2a2a;
  --pm-accent: #f2a33a;
  --pm-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  display: grid;
  grid-template-columns: 240px minmax(0, 1fr) 320px;
  gap: 48px;
  /* Fyllir gluggann; Webflow-umgj\xF6r\xF0in m\xE1 ekki takmarka breiddina heldur */
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 40px 32px 80px;
  background: var(--pm-bg);
  color: var(--pm-fg);
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;
}

.pm *,
.pm *::before,
.pm *::after {
  box-sizing: inherit;
}

.pm button {
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.pm button:disabled {
  cursor: default;
  opacity: 0.35;
}

.pm button:focus-visible,
.pm input:focus-visible {
  outline: 2px solid var(--pm-accent);
  outline-offset: 2px;
}

.pm input[type="range"] {
  accent-color: var(--pm-accent);
  margin: 0;
  cursor: pointer;
}

.pm [hidden] {
  display: none !important;
}

/* Lagalisti */
.pm-songs ol {
  list-style: none;
  margin: 0;
  padding: 0;
  position: sticky;
  top: 24px;
}

.pm-songs button {
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 6px 0;
  text-align: left;
  font-size: 14px;
  line-height: 1.35;
  color: var(--pm-muted);
}

.pm-songs button:hover,
.pm-songs button[aria-current="true"] {
  color: var(--pm-fg);
}

.pm-songs button[aria-current="true"] .pm-num {
  color: var(--pm-accent);
}

.pm-num {
  font-family: var(--pm-mono);
  font-size: 12px;
  padding-top: 2px;
  flex: none;
}

/* T\xF3nleikar\xF6\xF0in (me\xF0 lykli) */
.pm-songs-head {
  display: grid;
  gap: 8px;
  padding-bottom: 12px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--pm-line);
  font-size: 13px;
  color: var(--pm-muted);
}

.pm-total {
  font-family: var(--pm-mono);
  color: var(--pm-fg);
}

.pm-total small {
  color: var(--pm-muted);
  font-size: 11px;
}

.pm-who select,
.pm-per textarea,
.pm-per input {
  font: inherit;
  color: var(--pm-fg);
  background: #1b1b1b;
  border: 1px solid var(--pm-line);
  border-radius: 4px;
}

.pm-who select {
  margin-left: 6px;
  padding: 2px 4px;
}

.pm-songs-head .pm-link {
  justify-self: start;
}

.pm-songs li {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pm-songs li > button {
  flex: 1;
  min-width: 0;
}

.pm-songs-sub {
  margin: 20px 0 4px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-songs ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.pm-order {
  display: flex;
  gap: 2px;
  flex: none;
}

.pm-order button {
  width: 26px;
  height: 26px;
  border: 1px solid var(--pm-line) !important;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1;
}

.pm-songs.is-editing ol {
  position: static;
}

.pm-order-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  font-size: 13px;
}

.pm-save {
  padding: 6px 14px !important;
  border-radius: 4px;
  background: var(--pm-accent) !important;
  color: var(--pm-bg) !important;
  font-weight: 600;
}

.pm-status {
  margin: 0;
  width: 100%;
  font-size: 13px;
  color: var(--pm-muted);
}

.pm-status.is-warning {
  color: var(--pm-accent);
}

/* Fyrra og n\xE6sta lag */
.pm-step {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 13px;
  color: var(--pm-muted);
}

.pm-step button:hover {
  color: var(--pm-fg);
}

.pm-step button[data-pm-step="1"] {
  margin-left: auto;
}

/* Kynning og n\xF3tur */
.pm-per {
  display: grid;
  gap: 14px;
  margin-top: 24px;
  padding: 16px;
  border: 1px solid var(--pm-line);
  border-radius: 6px;
}

.pm-intro summary {
  cursor: pointer;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-intro[open] summary {
  margin-bottom: 8px;
  color: var(--pm-fg);
}

.pm-field {
  display: grid;
  gap: 6px;
}

.pm-field > span,
.pm-length {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-per textarea {
  width: 100%;
  padding: 8px 10px;
  line-height: 1.5;
  resize: vertical;
}

.pm-per input {
  width: 5em;
  margin-left: 6px;
  padding: 4px 6px;
  font-family: var(--pm-mono);
}

.pm-per-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
}

.pm-per-foot .pm-status {
  width: auto;
  flex: 1;
}

/* Spilari */
.pm-title {
  margin: 0 0 20px;
  font-size: 32px;
  line-height: 1.15;
  font-weight: 700;
  color: var(--pm-fg);
}

.pm-transport {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pm-play {
  width: 44px;
  height: 44px;
  flex: none;
  border-radius: 50%;
  border: 1px solid var(--pm-fg) !important;
  display: grid;
  place-items: center;
}

.pm-play svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.pm-play .pm-icon-pause,
.pm-play[data-state="playing"] .pm-icon-play {
  display: none;
}

.pm-play[data-state="playing"] .pm-icon-pause {
  display: block;
}

.pm-play[data-state="playing"] {
  background: var(--pm-fg);
  color: var(--pm-bg);
}

.pm-play[data-state="loading"] {
  animation: pm-pulse 1s ease-in-out infinite;
}

@keyframes pm-pulse {
  50% {
    opacity: 0.4;
  }
}

.pm-time {
  font-family: var(--pm-mono);
  font-size: 13px;
  color: var(--pm-muted);
  white-space: nowrap;
  min-width: 92px;
}

.pm-seek {
  flex: 1;
  min-width: 0;
}

.pm-note {
  margin: 16px 0 0;
  font-size: 14px;
  color: var(--pm-muted);
}

/* Uppbygging */
.pm-structure {
  --pm-progress: 0%;
  position: relative;
  display: flex;
  gap: 3px;
  margin-top: 28px;
}

.pm-structure::after {
  content: "";
  position: absolute;
  left: var(--pm-progress);
  top: 0;
  height: 3px;
  width: 2px;
  background: var(--pm-fg);
  pointer-events: none;
}

.pm-seg {
  flex: 1 1 0;
  min-width: 0;
  border-top: 3px solid var(--pm-line) !important;
  padding-top: 6px !important;
  text-align: left;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--pm-muted);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button.pm-seg:hover {
  color: var(--pm-fg);
}

.pm-seg.is-current {
  border-top-color: var(--pm-accent) !important;
  color: var(--pm-fg);
}

/* S\xFDn og transpose */
.pm-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 36px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--pm-line);
  font-size: 13px;
}

.pm-views {
  display: flex;
  gap: 16px;
}

.pm-views button {
  color: var(--pm-muted);
}

.pm-views button[aria-pressed="true"] {
  color: var(--pm-fg);
  text-decoration: underline;
  text-underline-offset: 5px;
}

.pm-transpose {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--pm-mono);
}

.pm-transpose button {
  width: 28px;
  height: 28px;
  border: 1px solid var(--pm-line) !important;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1;
}

.pm-transpose span {
  min-width: 56px;
  text-align: center;
}

/* Kaflar */
.pm-section {
  padding: 24px 0;
  border-bottom: 1px solid var(--pm-line);
}

.pm-section-head {
  display: flex;
  gap: 12px;
  align-items: baseline;
  text-align: left;
}

.pm-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

button.pm-section-head:hover .pm-label,
.pm-section.is-current .pm-label {
  color: var(--pm-accent);
}

.pm-start {
  font-family: var(--pm-mono);
  font-size: 12px;
  color: var(--pm-muted);
}

.pm-chords {
  margin-top: 8px;
  font-family: var(--pm-mono);
  font-size: 16px;
  font-weight: 600;
  color: var(--pm-fg);
}

.pm-lyrics {
  margin-top: 12px;
  font-size: 18px;
  line-height: 1.65;
  color: var(--pm-fg);
}

.pm-lyrics > * {
  margin: 0 0 0.8em;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

.pm-lyrics h5,
.pm-lyrics strong {
  font-size: 13px;
  color: var(--pm-muted);
  font-weight: 500;
}

.pm-sections[data-view="chords"] .pm-lyrics,
.pm-sections[data-view="lyrics"] .pm-chords {
  display: none;
}

/* Mixer */
.pm-mixer {
  position: sticky;
  top: 24px;
  align-self: start;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  overflow-x: hidden;
  /* Pl\xE1ss fyrir skrunstikuna fr\xE1 byrjun, svo h\xFAn leggist ekki yfir sle\xF0ana */
  scrollbar-gutter: stable;
  padding-right: 6px;
  min-width: 0;
}

.pm-mixer-head > *,
.pm-strip > * {
  min-width: 0;
}

.pm-mixer-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 13px;
  color: var(--pm-muted);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--pm-line);
}

.pm-link {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.pm-group-name {
  margin: 20px 0 6px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-strip {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  grid-template-areas:
    "name m s"
    "vol vol pan";
  gap: 6px 6px;
  align-items: center;
  padding: 8px 0;
}

.pm-strip.is-silent .pm-strip-name,
.pm-strip.is-silent .pm-vol {
  opacity: 0.4;
}

.pm-strip-name {
  grid-area: name;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pm-ms {
  width: 26px;
  height: 26px;
  border: 1px solid var(--pm-line) !important;
  border-radius: 4px;
  font-family: var(--pm-mono);
  font-size: 11px;
  color: var(--pm-muted) !important;
}

.pm-ms[data-pm-mute] {
  grid-area: m;
}

.pm-ms[data-pm-solo] {
  grid-area: s;
}

.pm-ms[data-pm-mute][aria-pressed="true"] {
  background: var(--pm-fg);
  border-color: var(--pm-fg) !important;
  color: var(--pm-bg) !important;
}

.pm-ms[data-pm-solo][aria-pressed="true"] {
  background: var(--pm-accent);
  border-color: var(--pm-accent) !important;
  color: var(--pm-bg) !important;
}

.pm-vol {
  grid-area: vol;
  width: 100%;
}

.pm-pan {
  grid-area: pan;
  width: 56px;
}

.pm input.pm-vol,
.pm input.pm-pan {
  accent-color: #b5b5b5;
}

@media (max-width: 1100px) {
  .pm {
    grid-template-columns: 220px minmax(0, 1fr);
  }

  .pm-mixer {
    grid-column: 1 / -1;
    position: static;
    max-height: none;
  }
}

@media (max-width: 700px) {
  .pm {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding: 24px 16px 64px;
  }

  .pm-songs ol {
    position: static;
  }
}
`;var Pn=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],$n={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"},Cr=[["Taktur",/drum|kick|snare|perc|trommu|slagverk|bass/],["Kassag\xEDtarar",/acoustic|akust|kassa/],["Rafg\xEDtarar",/guit|gítar|gitar|gtr/],["Hlj\xF3mbor\xF0",/piano|píanó|keys|organ|orgel|synth|rhodes|hljómb/],["S\xF6ngur",/vocal|vox|voice|söng|rödd|kór|choir|backing/],["Bl\xE1stur",/trombone|trumpet|sax|horn|básún|trompet|brass|blást/],["Anna\xF0",/.*/]],qr=["Taktur","Rafg\xEDtarar","Kassag\xEDtarar","Hlj\xF3mbor\xF0","S\xF6ngur","Bl\xE1stur","Anna\xF0"],Pr=[["both","B\xE6\xF0i"],["chords","Hlj\xF3mar"],["lyrics","Texti"]];function Se(o){return(o||"").replace(/[​-‏﻿]/g,"").trim()}var $r={\u00F0:"d",\u00FE:"th",\u00E6:"ae",\u00F6:"o"};function St(o){return Se(o).toLowerCase().replace(/[ðþæö]/g,t=>$r[t]).normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function Nr(o){let t=[],a=/([^\s:,;][^:,;\n]*?)\s*:\s*(https?:\/\/[^\s,;]+)/g,r;for(;r=a.exec(o.getAttribute("data-pm-stems")||"");)t.push([Se(r[1]),r[2]]);Array.from(o.attributes).forEach(f=>{let m=Se(f.value);f.name.startsWith("data-stem-")&&/^https?:\/\//.test(m)&&t.push([f.name.slice(10),m])});let l=new Set;return t.map(([f,m],h)=>{let v=St(f)||`stem-${h+1}`;for(;l.has(v);)v+="-2";return l.add(v),{id:v,name:f,url:m}})}function Fr(o){let t=o.split(":").map(Number);return!t.length||t.some(a=>!Number.isFinite(a))?null:t.reduce((a,r)=>a*60+r,0)}function Or(o){return Se(o).split(/[\s,;]+/).filter(Boolean).map(Fr)}function Hr(o){return Array.from(o.querySelectorAll("[data-chords]")).map(t=>{var h,v,b;let a=t.parentElement,r=Se(t.getAttribute("data-chords")||t.textContent),l=a.querySelector(".w-richtext"),f=!!Se(l==null?void 0:l.textContent);if(!r&&!f)return null;let m=Se((v=(h=a.querySelector(".kafli-repeat"))==null?void 0:h.lastElementChild)==null?void 0:v.textContent);return{label:Se((b=a.querySelector("h1, h2, h3, h4"))==null?void 0:b.textContent),chords:r,repeat:/^\d+$/.test(m)?Number(m):null,lyrics:f?l:null,start:null}}).filter(Boolean)}function Rr(){return Array.from(document.querySelectorAll("[data-pm-song]")).map((o,t)=>{var h;let a=o.closest(".w-dyn-item")||o.parentElement,r=Se(o.getAttribute("data-pm-title"))||Se((h=a.querySelector("h1, h2"))==null?void 0:h.textContent)||`Lag ${t+1}`,l=St(o.getAttribute("data-pm-song"))||St(r)||`lag-${t+1}`,f=Hr(a),m=Or(o.getAttribute("data-pm-times"));return f.forEach((v,b)=>{var e;v.start=(e=m[b])!=null?e:null}),{id:l,title:r,stems:Nr(o),sections:f}})}function se(o){return String(o).replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`)}function Re(o){if(!Number.isFinite(o))return"0:00";let t=Math.max(0,Math.floor(o));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Dr(o){let t=o.replace(/([a-zA-Zþæöðáéíóúý])(\d+)$/,"$1 $2");return t.charAt(0).toUpperCase()+t.slice(1)}function Br(o){let t=o.name.toLowerCase();return Cr.find(([,a])=>a.test(t))[0]}function Nn(o,t){return o.split("/").map(a=>{let r=a.match(/^([A-G])([#b]?)(.*)$/);if(!r)return a;let l=$n[r[1]+r[2]]||r[1]+r[2],f=Pn.indexOf(l);return f<0?a:Pn[((f+t)%12+12)%12]+r[3]}).join("/")}function Vr(o,t){return t?o.split(/(\s+|-+)/).map(a=>/^(\s+|-+)?$/.test(a)?a:Nn(a,t)).join(""):o}function Gr(o){for(let t of o.sections){let a=t.chords.match(/[A-G][#b]?/);if(a)return $n[a[0]]||a[0]}return null}function Fn(){let o=Rr();if(!o.length)return;if(!document.querySelector("style[data-pm-style]")){let d=document.createElement("style");d.setAttribute("data-pm-style",""),d.textContent=qn,document.head.appendChild(d)}let t=document.querySelector("[data-pm-song]").closest(".w-dyn-list"),a=document.querySelector("[data-pm-app]");a||(a=document.createElement("div"),(t||document.body).before(a)),t&&(t.hidden=!0),a.classList.add("pm");let r=ot();o.forEach(d=>{r.define({id:d.id,tracks:d.stems.map(({id:s,url:u})=>({id:s,url:u}))})});let l=new Map,f="both",m=o.find(d=>`#${d.id}`===location.hash)||o[0],h=!1,v=-1,b=new Map(o.map(d=>[d.id,d])),e=null,n=null,i=new Map;a.innerHTML=`
    <nav class="pm-songs" aria-label="Lagalisti" data-pm-el="nav"></nav>
    <main class="pm-main">
      <div class="pm-step" data-pm-el="step" hidden>
        <button type="button" data-pm-step="-1"></button>
        <button type="button" data-pm-step="1"></button>
      </div>
      <h1 class="pm-title" data-pm-el="title"></h1>
      <div class="pm-transport">
        <button type="button" class="pm-play" data-pm-el="play" aria-label="Spila">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="pm-icon-play"><path d="M8 5v14l11-7z"/></svg>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="pm-icon-pause"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
        </button>
        <span class="pm-time" data-pm-el="time">0:00 / 0:00</span>
        <input type="range" class="pm-seek" data-pm-el="seek" min="0" max="1000" value="0" aria-label="Sta\xF0setning \xED laginu">
      </div>
      <p class="pm-note" data-pm-el="note" hidden></p>
      <form class="pm-per" data-pm-el="per" hidden>
        <details class="pm-intro" data-pm-el="intro-box">
          <summary>Kynning <span data-pm-el="intro-hint"></span></summary>
          <textarea data-pm-field="kynning" rows="8" aria-label="Kynning \xE1 undan laginu"></textarea>
        </details>
        <label class="pm-field">
          <span>N\xF3tur fr\xE1 \xE6fingum</span>
          <textarea data-pm-field="notur" rows="2" placeholder="T.d. styttum outro, N\xF3i telur inn, n\xFD l\xEDna \xED \xF6\xF0ru erindi"></textarea>
        </label>
        <div class="pm-per-foot">
          <label class="pm-length">Lengd <input data-pm-field="lengd" placeholder="m:ss" size="5"></label>
          <button type="submit" class="pm-save" data-pm-el="save">Vista</button>
          <p class="pm-status" data-pm-el="status" aria-live="polite"></p>
        </div>
      </form>
      <div class="pm-structure" data-pm-el="structure"></div>
      <div class="pm-toolbar" data-pm-el="toolbar">
        <div class="pm-views" role="group" aria-label="S\xFDn">${Pr.map(([d,s])=>`<button type="button" data-pm-view="${d}">${s}</button>`).join("")}</div>
        <div class="pm-transpose">
          <button type="button" data-pm-transpose="-1" aria-label="L\xE6kka um h\xE1lft\xF3n">\u2212</button>
          <span data-pm-el="key"></span>
          <button type="button" data-pm-transpose="1" aria-label="H\xE6kka um h\xE1lft\xF3n">+</button>
        </div>
      </div>
      <div class="pm-sections" data-pm-el="sections"></div>
    </main>
    <aside class="pm-mixer" aria-label="Mixer">
      <div class="pm-mixer-head">
        <span data-pm-el="count"></span>
        <button type="button" class="pm-link" data-pm-el="reset">Endurstilla</button>
      </div>
      <div data-pm-el="strips"></div>
    </aside>`;let c=d=>a.querySelector(`[data-pm-el="${d}"]`),p={nav:c("nav"),step:c("step"),per:c("per"),introBox:c("intro-box"),introHint:c("intro-hint"),save:c("save"),status:c("status"),toolbar:c("toolbar"),title:c("title"),play:c("play"),time:c("time"),seek:c("seek"),note:c("note"),structure:c("structure"),key:c("key"),sections:c("sections"),count:c("count"),reset:c("reset"),strips:c("strips")};function y(d=m){var s;return((s=r.getSong(d.id))==null?void 0:s.duration)||0}function g(d,s){let u=d.sections.slice(s+1).find(w=>w.start!==null);return u?u.start:y(d)}function A(d){var s,u;return((s=e==null?void 0:e.rows.get(d))==null?void 0:s.lag)||((u=b.get(d))==null?void 0:u.title)||d}function q(){if(!e)return{listed:o.map(s=>s.id),other:[]};let d=n||e.order;return{listed:d,other:o.map(s=>s.id).filter(s=>!d.includes(s))}}function N(){let{listed:d,other:s}=q(),u=!!n,w=(H,J)=>{let ae=d.indexOf(H),re=u?ae===-1?`<span class="pm-order"><button type="button" data-pm-add="${se(H)}" aria-label="Setja ${se(A(H))} \xE1 listann">+</button></span>`:`<span class="pm-order">
              <button type="button" data-pm-move="${se(H)}" data-pm-by="-1" ${ae===0?"disabled":""} aria-label="F\xE6ra ${se(A(H))} upp">\u2191</button>
              <button type="button" data-pm-move="${se(H)}" data-pm-by="1" ${ae===d.length-1?"disabled":""} aria-label="F\xE6ra ${se(A(H))} ni\xF0ur">\u2193</button>
              <button type="button" data-pm-remove="${se(H)}" aria-label="Taka ${se(A(H))} af listanum">\xD7</button>
            </span>`:"";return`<li><button type="button" data-pm-pick="${se(H)}" aria-current="${H===m.id}">
          <span class="pm-num">${J===null?"\u2013":String(J+1).padStart(2,"0")}</span>
          <span>${se(A(H))}</span></button>${re}</li>`},x="";if(e){let H=d.map(re=>{var ce;return In((ce=e.rows.get(re))==null?void 0:ce.lengd)}),J=H.filter(re=>re===null).length,ae=H.reduce((re,ce)=>re+(ce||0),0);x=`<div class="pm-songs-head">
          <span class="pm-total">${d.length} l\xF6g \xB7 ${Re(ae)}${J?` <small>(${J} \xE1n lengdar)</small>`:""}</span>
          <label class="pm-who">\xC9g er <select data-pm-who>
            <option value="">veldu</option>
            ${e.names.map(re=>`<option ${re===qe.get()?"selected":""}>${se(re)}</option>`).join("")}
          </select></label>
          ${u?"":'<button type="button" class="pm-link" data-pm-order="edit">Breyta r\xF6\xF0</button>'}
        </div>`}let V=u?`<div class="pm-order-foot">
          <button type="button" class="pm-save" data-pm-order="save">Vista r\xF6\xF0</button>
          <button type="button" class="pm-link" data-pm-order="cancel">H\xE6tta vi\xF0</button>
          <p class="pm-status" data-pm-el="order-status" aria-live="polite"></p>
        </div>`:"";p.nav.classList.toggle("is-editing",u),p.nav.innerHTML=`${x}
      <ol>${d.filter(H=>b.has(H)).map(H=>w(H,d.indexOf(H))).join("")}</ol>
      ${s.length?`<p class="pm-songs-sub">Utan lagalista</p><ul>${s.map(H=>w(H,null)).join("")}</ul>`:""}
      ${V}`}function M(){let{listed:d}=q(),s=d.indexOf(m.id);return s===-1?[null,null]:[d[s-1]||null,d[s+1]||null]}function R(){let[d,s]=M();p.step.hidden=!e||!d&&!s;let[u,w]=p.step.querySelectorAll("button");u.hidden=!d,w.hidden=!s,u.dataset.pmTarget=d||"",w.dataset.pmTarget=s||"",u.textContent=d?`\u2190 ${A(d)}`:"",w.textContent=s?`N\xE6st: ${A(s)} \u2192`:""}let G=["kynning","notur","lengd"],U=d=>p.per.querySelector(`[data-pm-field="${d}"]`);function D(d=m.id){return(e==null?void 0:e.rows.get(d))||null}function j(){let d=D();return d?G.filter(s=>U(s).value!==(d[s]||"")):[]}function Y(d){let s=D();if(p.per.hidden=!s,!s)return;let u=i.get(m.id)||s;G.forEach(w=>{U(w).value=u[w]||""}),p.introHint.textContent=s.kynning.trim()?"":"(engin enn)",te(d)}function te(d){let s=D(),u=j();u.length?i.set(m.id,Object.fromEntries(G.map(w=>[w,U(w).value]))):i.delete(m.id),p.save.disabled=!u.length,p.status.classList.toggle("is-warning",!!d||u.length>0),p.status.textContent=d||(u.length?"\xD3vista\xF0ar breytingar":s.breytt&&s.breyttAf?`S\xED\xF0ast vista\xF0 ${Cn(s.breytt)} af ${s.breyttAf}`:"")}function O(){let d=m;N(),R(),Y(),p.title.textContent=A(d.id),p.play.disabled=!d.stems.length,p.note.hidden=!!d.stems.length,p.note.textContent=d.missing?"Ekki komi\xF0 \xED mixerinn: bara kynning og n\xF3tur.":"Engin stem fyrir \xFEetta lag \u2014 bara hlj\xF3mar og texti.",p.toolbar.hidden=!d.sections.length,v=-1,C(),_(),S(),L(),$(r.getTime(d.id))}function C(){let d=m,u=!!y(d)&&d.sections.some(w=>w.start!==null);p.structure.hidden=!d.sections.length,p.structure.innerHTML=d.sections.map((w,x)=>{let V=u&&w.start!==null?Math.max(1,g(d,x)-w.start):1,H=u&&w.start!==null?"button":"div";return`<${H} ${H==="button"?'type="button"':""} class="pm-seg" data-pm-seg="${x}"
          style="flex-grow:${V}"><span>${se(w.label||`Kafli ${x+1}`)}</span></${H}>`}).join("")}function _(){let d=m,s=l.get(d.id)||0;p.sections.dataset.view=f,p.sections.innerHTML="",d.sections.forEach((u,w)=>{let x=document.createElement("section");x.className="pm-section",x.dataset.pmSection=w;let V=u.start!==null&&d.stems.length;if(x.innerHTML=`
        <${V?'button type="button"':"div"} class="pm-section-head" ${V?`data-pm-jump="${w}"`:""}>
          <span class="pm-label">${se(u.label||`Kafli ${w+1}`)}${u.repeat?` \xD7${u.repeat}`:""}</span>
          ${u.start!==null?`<span class="pm-start">${Re(u.start)}</span>`:""}
        </${V?"button":"div"}>
        ${u.chords?`<div class="pm-chords">${se(Vr(u.chords,s))}</div>`:""}`,u.lyrics){let H=document.createElement("div");H.className="pm-lyrics",H.append(...Array.from(u.lyrics.cloneNode(!0).childNodes)),x.appendChild(H)}p.sections.appendChild(x)}),a.querySelectorAll("[data-pm-view]").forEach(u=>{u.setAttribute("aria-pressed",u.dataset.pmView===f?"true":"false")})}function S(){let d=l.get(m.id)||0,s=Gr(m),u=d>0?`+${d}`:d<0?`${d}`:"";p.key.textContent=s?`${Nn(s,d)}${u?` (${u})`:""}`:u||"T\xF3nn"}function L(){let d=m,s=r.getSong(d.id);if(!d.stems.length){p.strips.innerHTML="",p.count.textContent="Engar r\xE1sir",p.reset.hidden=!0;return}p.reset.hidden=!1;let u=new Map;d.stems.forEach((w,x)=>{let V=Br(w);u.has(V)||u.set(V,[]),u.get(V).push({stem:w,track:s.tracks[x]})}),p.strips.innerHTML=qr.filter(w=>u.has(w)).map(w=>`<div class="pm-group"><div class="pm-group-name">${w}</div>${u.get(w).map(({stem:x,track:V})=>`<div class="pm-strip" data-pm-strip="${se(x.id)}">
              <span class="pm-strip-name">${se(Dr(x.name))}</span>
              <button type="button" class="pm-ms" data-pm-mute aria-pressed="${V.muted}" aria-label="\xDEagga ${se(x.name)}">M</button>
              <button type="button" class="pm-ms" data-pm-solo aria-pressed="${V.soloed}" aria-label="S\xF3l\xF3 ${se(x.name)}">S</button>
              <input type="range" class="pm-vol" data-pm-vol min="0" max="1" step="0.01" value="${V.volume}" aria-label="Styrkur ${se(x.name)}">
              <input type="range" class="pm-pan" data-pm-pan min="-1" max="1" step="0.01" value="${V.pan}" aria-label="Pan ${se(x.name)}">
            </div>`).join("")}</div>`).join(""),P()}function P(){let d=r.getSong(m.id);if(!d)return;let s=d.tracks.some(w=>w.soloed),u=0;d.tracks.forEach(w=>{let x=p.strips.querySelector(`[data-pm-strip="${CSS.escape(w.id)}"]`),V=w.muted||s&&!w.soloed;V||(u+=1),x&&(x.classList.toggle("is-silent",V),x.querySelector("[data-pm-mute]").setAttribute("aria-pressed",w.muted),x.querySelector("[data-pm-solo]").setAttribute("aria-pressed",w.soloed))}),p.count.textContent=`${u} af ${d.tracks.length} r\xE1sum`}function $(d){let s=y();p.time.textContent=`${Re(d)} / ${Re(s)}`,h||(p.seek.value=s?Math.round(d/s*1e3):0),p.structure.style.setProperty("--pm-progress",s?`${d/s*100}%`:"0%");let u=-1;m.sections.forEach((w,x)=>{w.start!==null&&d>=w.start&&(u=x)}),u!==v&&(v=u,a.querySelectorAll("[data-pm-seg], [data-pm-section]").forEach(w=>{var V;let x=Number((V=w.dataset.pmSeg)!=null?V:w.dataset.pmSection);w.classList.toggle("is-current",x===u)}))}function F(d){let s=o.find(x=>x.id===d);if(!s||s===m)return;let u=r.isPlaying(m.id);m=s;let w=new URL(location.href);w.hash=s.id,history.replaceState(history.state,"",w.href),s.stems.length?u?r.play(s.id):r.select(s.id):r.pause(),O()}function z(){m.stems.length&&(r.isPlaying(m.id)?r.pause(m.id):r.play(m.id))}function Z(d){var u;let s=(u=m.sections[d])==null?void 0:u.start;s!=null&&(r.isPlaying(m.id)?r.seek(s,m.id):(r.seek(s,m.id),r.play(m.id)))}function ue(d){let s=M()[d<0?0:1];s&&F(s)}function _e(d){let s=new Map(d.map(u=>[u.id,u]));d.forEach(u=>{if(b.has(u.id))return;let w={id:u.id,title:u.lag,stems:[],sections:[],missing:!0};o.push(w),b.set(u.id,w)}),e={...e,rows:s,order:d.filter(u=>u.rod!==null).map(u=>u.id)}}async function me(){let{key:d,fresh:s}=Ln();if(d)try{let u=await ft(d,{action:"lagalisti"});if(!u.ok)throw new Error(u.villa);Mn(d),e={key:d,names:u.nofn},_e(u.log),!location.hash&&e.order.length&&!r.isPlaying(m.id)&&(m=b.get(e.order[0])),O()}catch(u){(s||u.badKey)&&(p.note.hidden=!1,p.note.textContent=u.badKey?"Hlekkurinn gildir ekki, svo t\xF3nleikar\xF6\xF0in s\xE9st ekki. Biddu \xD3la um n\xFDjan.":"N\xE1\xF0i ekki \xED t\xF3nleikar\xF6\xF0ina. Reyndu a\xF0 endurhla\xF0a s\xED\xF0una.")}}async function Ae(){let d=D(),s=j();if(!d||!s.length)return;if(!qe.get()){te("Veldu fyrst hver \xFE\xFA ert, efst \xED lagalistanum.");return}let u=m.id,w=Object.fromEntries(s.map(x=>[x,U(x).value]));p.save.disabled=!0,p.status.textContent="Vista \u2026";try{let x=await ft(e.key,{action:"lagVista",id:u,hver:qe.get(),breytt:d.breytt,reitir:w});if(x.arekstur){e.rows.set(u,x.lag),m.id===u&&te(x.villa);return}if(!x.ok)throw new Error(x.villa);e.rows.set(u,x.lag),i.delete(u),m.id===u&&Y(),N()}catch(x){m.id===u&&te(`T\xF3kst ekki a\xF0 vista: ${x.message==="Failed to fetch"?"ekkert samband.":x.message}`)}}function ye(d){let s=a.querySelector('[data-pm-el="order-status"]');s&&(s.textContent=d)}async function E(){if(!qe.get()){ye("Veldu fyrst hver \xFE\xFA ert.");return}let d=e.order,s=n;if(s.join(`
`)===d.join(`
`)){n=null,N();return}ye("Vista \u2026");try{let u=await ft(e.key,{action:"rodVista",hver:qe.get(),adur:d,rod:s.map(w=>({id:w,lag:A(w)}))});if(!u.ok&&!u.arekstur)throw new Error(u.villa);_e(u.log),n=u.arekstur?[...e.order]:null,N(),R(),i.has(m.id)||Y(),u.arekstur&&ye(u.villa)}catch(u){ye(`T\xF3kst ekki a\xF0 vista: ${u.message==="Failed to fetch"?"ekkert samband.":u.message}`)}}a.addEventListener("click",d=>{var w;let s=d.target.closest("button");if(!s||!a.contains(s))return;let u=s.dataset;if(u.pmPick)F(u.pmPick);else if(u.pmTarget)F(u.pmTarget);else if(u.pmOrder==="edit")n=[...e.order],N();else if(u.pmOrder==="cancel")n=null,N(),R();else if(u.pmOrder==="save")E();else if(u.pmMove){let x=n.indexOf(u.pmMove),V=x+Number(u.pmBy);x!==-1&&V>=0&&V<n.length&&([n[x],n[V]]=[n[V],n[x]],N(),(w=a.querySelector(`[data-pm-move="${CSS.escape(u.pmMove)}"][data-pm-by="${u.pmBy}"]:not(:disabled)`))==null||w.focus())}else if(u.pmRemove)n=n.filter(x=>x!==u.pmRemove),N();else if(u.pmAdd)n=[...n,u.pmAdd],N();else if(u.pmEl==="play")z();else if(u.pmSeg!==void 0)Z(Number(u.pmSeg));else if(u.pmJump!==void 0)Z(Number(u.pmJump));else if(u.pmView)f=u.pmView,_(),v=-1,$(r.getTime(m.id));else if(u.pmTranspose)l.set(m.id,(l.get(m.id)||0)+Number(u.pmTranspose)),_(),S(),v=-1,$(r.getTime(m.id));else if(u.pmEl==="reset")r.resetMix(m.id),L();else if(u.pmMute!==void 0||u.pmSolo!==void 0){let x=s.closest("[data-pm-strip]").dataset.pmStrip,V=r.getSong(m.id).tracks.find(J=>J.id===x),H=u.pmMute!==void 0?"muted":"soloed";r.setTrack(m.id,x,{[H]:!V[H]}),P()}}),p.per.addEventListener("submit",d=>{d.preventDefault(),Ae()}),a.addEventListener("change",d=>{d.target.matches("[data-pm-who]")&&qe.set(d.target.value)}),window.addEventListener("beforeunload",d=>{i.size&&(d.preventDefault(),d.returnValue="")}),a.addEventListener("input",d=>{if(d.target.closest("[data-pm-field]")){te();return}let s=d.target.closest("[data-pm-strip]");if(s){let u=d.target.matches("[data-pm-vol]")?"volume":"pan";r.setTrack(m.id,s.dataset.pmStrip,{[u]:parseFloat(d.target.value)})}else d.target===p.seek&&(h=!0,p.time.textContent=`${Re(p.seek.value/1e3*y())} / ${Re(y())}`)}),p.seek.addEventListener("change",()=>{h=!1;let d=y();d&&r.seek(p.seek.value/1e3*d,m.id)}),document.addEventListener("keydown",d=>{var s,u,w,x;if(!(d.repeat||d.altKey||d.ctrlKey||d.metaKey)){if(d.code==="Space"){if((u=(s=d.target).closest)!=null&&u.call(s,"textarea, select, [contenteditable], input:not([type=range])"))return;d.preventDefault(),z()}else if((d.key==="ArrowLeft"||d.key==="ArrowRight")&&e&&!n){if((x=(w=d.target).closest)!=null&&x.call(w,"textarea, select, input, [contenteditable]"))return;d.preventDefault(),ue(d.key==="ArrowLeft"?-1:1)}}}),r.on("state",({songId:d,state:s})=>{d===m.id&&(p.play.dataset.state=s,p.play.setAttribute("aria-label",s==="playing"?"Gera hl\xE9":"Spila"))}),r.on("time",({songId:d,time:s})=>{d===m.id&&(p.structure.dataset.duration!==String(y())&&(p.structure.dataset.duration=String(y()),C(),v=-1),$(s))}),O(),me(),console.log(`permixer: ${o.length} l\xF6g`)}document.addEventListener("DOMContentLoaded",()=>{if(document.querySelector("[data-mixer]")&&(console.log("Found mixer element, initializing..."),Kt()),document.querySelector("[data-pm-song]")&&Fn(),document.querySelector("[data-awake]")&&(console.log("Found awake element, initializing..."),Wt()),document.querySelector("[data-player]")&&(console.log("Found [data-player], initializing player..."),Qt()),document.querySelector("[data-album-mixer]")&&_n(),document.querySelector("[data-vogor-player]")&&(console.log("Found [data-vogor-player], initializing Vogor player..."),Sn()),document.querySelector("[data-multitrack-player]")){console.log("Found [data-multitrack-player], initializing multitrack...");let o=vn(document);wn(o)}});})();
/*! Bundled license information:

howler/dist/howler.js:
  (*!
   *  howler.js v2.2.4
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   *)
  (*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *  
   *  howler.js v2.2.4
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   *)
*/
//# sourceMappingURL=main.js.map
