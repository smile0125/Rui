(function(window){var svgSprite='<svg><symbol id="icon-weixin" viewBox="0 0 1024 1024"><path d="M669.181367 366.290407c10.193153 0 20.38119 0.703011 30.569226 1.75804-27.406187-127.892809-164.087149-222.76148-320.087109-222.76148-174.277232 0-317.278133 118.759801-317.278133 269.846868 0 87.134523 47.431266 158.815075 126.83778 214.33046l-31.618115 95.566566 111.030769-55.864332c39.702234 7.730055 71.673389 15.807011 111.027699 15.807011 9.837042 0 19.676132-0.344854 29.514197-1.399883-6.327102-21.084201-9.838066-43.569308-9.838066-66.406432C399.339616 478.728222 518.451434 366.290407 669.181367 366.290407L669.181367 366.290407zM498.422262 280.20989c23.89113 0 39.702234 15.812127 39.702234 39.70428 0 23.89113-15.811104 39.703257-39.702234 39.703257-23.893176 0-47.784306-15.812127-47.784306-39.703257C450.989973 296.022017 474.880079 280.20989 498.422262 280.20989L498.422262 280.20989zM276.364817 359.617427c-23.893176 0-47.783283-15.812127-47.783283-39.703257 0-23.892153 23.890107-39.70428 47.783283-39.70428 23.890107 0 39.702234 15.812127 39.702234 39.70428C316.067051 343.453283 300.254923 359.617427 276.364817 359.617427L276.364817 359.617427zM276.364817 359.617427"  ></path><path d="M958.70539 613.651145c0-126.84392-126.84392-230.143611-269.493827-230.143611-151.087067 0-269.844821 103.299691-269.844821 230.143611 0 127.190821 118.758778 230.140541 269.844821 230.140541 31.624255 0 63.594387-8.082072 95.219665-15.811104l87.134523 47.781236-23.892153-79.405491C911.269008 748.574067 958.70539 684.972517 958.70539 613.651145L958.70539 613.651145zM601.719906 573.947887c-15.807011 0-31.618115-15.812127-31.618115-31.624255s15.811104-31.619138 31.618115-31.619138c23.89727 0 39.709397 15.807011 39.709397 31.619138S625.616152 573.947887 601.719906 573.947887L601.719906 573.947887zM776.346085 573.947887c-15.807011 0-31.619138-15.812127-31.619138-31.624255s15.812127-31.619138 31.619138-31.619138c23.89727 0 39.70428 15.807011 39.70428 31.619138S799.891338 573.947887 776.346085 573.947887L776.346085 573.947887zM776.346085 573.947887"  ></path></symbol><symbol id="icon-shouji" viewBox="0 0 1024 1024"><path d="M714.23 903.708h-400.517c-23.698 0-42.937-19.183-42.937-42.935v-743.788c0-23.698 19.238-42.937 42.937-42.937h400.518c23.698 0 42.937 19.187 42.937 42.937v743.842c0 23.697-19.239 42.881-42.938 42.881v0zM513.972 860.828c15.813 0 28.623-12.809 28.623-28.626 0-15.813-12.811-28.623-28.623-28.623-15.817 0-28.623 12.809-28.623 28.623 0 15.817 12.805 28.626 28.623 28.626v0zM714.23 159.864h-400.518v600.779h400.518v-600.779zM714.23 159.864z"  ></path></symbol><symbol id="icon-informatiom" viewBox="0 0 1024 1024"><path d="M512 640L0 320v576c0-29.44 28.16 0 64 0h896a64 64 0 0 0 64-64V320z" fill="" ></path><path d="M960 192H64a64 64 0 0 0-64 64l512 315.52 512-320A64 64 0 0 0 960 192z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)