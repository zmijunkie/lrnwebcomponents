!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";window.MediaBehaviors=window.MediaBehaviors||{},window.MediaBehaviors.Video={_sourceIsIframe:function(e){return"local"!=this.getVideoType(e)},cleanVideoSource:function(e,o){if("local"!=o){var i=e.split("?"),n="";if(e=i[0],2==i.length){var t=i[1].split("&"),r=t[0].split("="),d=Array.isArray(t.shift())?t.shift().join(""):t.shift();"v"==r[0]&&(n=r[1]+"?"+d)}if(-1==e.indexOf("player.vimeo.com")&&-1!=e.indexOf("vimeo.com"))return-1!=e.indexOf("/videos/")&&(e=e.replace("/videos/","/")),e.replace("vimeo.com/","player.vimeo.com/video/");if(-1!=e.indexOf("youtube.com/watch"))return e.replace("youtube.com/watch","youtube.com/embed/")+n;if(-1!=e.indexOf("youtube-no-cookie.com/embed"))return e.replace("youtube-no-cookie.com/embed","youtube.com/embed/")+n;if(-1!=e.indexOf("youtu.be"))return e.replace("youtu.be/","www.youtube.com/embed/")+n;if(-1!=e.indexOf("sketchfab.com")&&-1==e.indexOf("/embed"))return e+"/embed";if(-1!=e.indexOf("dailymotion.com")&&-1==e.indexOf("/embed"))return e.replace("/video/","/embed/video/")}return e},getVideoType:function(e){var o=["aac","flac","mov","mp3","mp4","oga","ogg","ogv","wav","webm"],i=!1;if(-1!=e.indexOf("vimeo"))return"vimeo";if(-1!=e.indexOf("youtube")||-1!=e.indexOf("youtu.be"))return"youtube";if(-1!=e.indexOf("sketchfab.com"))return"sketchfab";if(-1!=e.indexOf("dailymotion.com"))return"dailymotion";for(var n=0;n<o.length;n++)!i&&e.toLowerCase().indexOf("."+o[n])>-1&&(i=!0);return i?"local":"external"}}});
//# sourceMappingURL=media-behaviors.umd.js.map
