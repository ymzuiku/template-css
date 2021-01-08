!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("template-fn")):"function"==typeof define&&define.amd?define(["template-fn"],n):(e=e||self).css=n(e.templateFn)}(this,function(s){"use strict";s=s&&s.hasOwnProperty("default")?s.default:s;var t="";["primary","gray","red","orange","yellow","green","teal","blue","indigo","purple","pink","light","dark"].forEach(function(e){for(var n=1;n<=9;n++){t+="--"+e+n+"-0:rgba(var(--"+e+n+"-base), 0); ";for(var a=1;a<=9;a++)t+="--"+e+n+"-"+a+":rgba(var(--"+e+n+"-base), 0."+a+"); ";t+="--"+e+n+":rgba(var(--"+e+n+"-base), 1); "}}),["white","black"].forEach(function(e){t+="--"+e+"-0:rgba(var(--"+e+"-base), 0); ";for(var n=1;n<=8;n++)t+="--"+e+"-"+n+":rgba(var(--"+e+"-base), 0."+n+"); ";t+="--"+e+":rgba(var(--"+e+"-base), 1); "});var e="\n--xs: 480px;\n--sm: 640px;\n--md: 720px;\n--lg: 1024px;\n--xl: 1280px;\n--t1: 0.12s;\n--t2: 0.2s;\n--t3: 0.3s;\n--t4: 0.5s;\n--t5: 0.7s;\n--t6: 1s;\n--t7: 1.3s;\n--t8: 1.5s;\n--t9: 2s;\n--h6: 1.25em;\n--h5: 1.5em;\n--h4: 1.875em;\n--h3: 2.25em;\n--h2: 3em;\n--h1: 4em;\n--fs1: 10px;\n--fs2: 12px;\n--fs3: 14px;\n--fs4: 16px;\n--fs5: 18px;\n--fs6: 20px;\n--fs7: 24px;\n--fs8: 28px;\n--fs9: 32px;\n--zero: 0px;\n--auto: auto;\n--px: 1px;\n--a1: 2px;\n--a2: 4px;\n--a3: 6px;\n--a4: 8px;\n--a5: 12px;\n--a6: 16px;\n--a7: 20px;\n--a8: 24px;\n--a9: 28px;\n--b1: 32px;\n--b2: 40px;\n--b3: 48px;\n--b4: 64px;\n--b5: 72px;\n--b6: 80px;\n--b7: 88px;\n--b8: 92px;\n--b9: 100px;\n--c1: 180px;\n--c2: 260px;\n--c3: 340px;\n--c4: 420px;\n--c5: 500px;\n--c6: 580px;\n--c7: 660px;\n--c8: 740px;\n--c9: 820px;\n--white-base: 255,255,255;\n--black-base: 0,0,0;\n--primary1-base: 236,244,255;\n--primary2-base: 195,218,254;\n--primary3-base: 162,191,250;\n--primary4-base: 127,156,244;\n--primary5-base: 102,126,234;\n--primary6-base: 89,104,216;\n--primary7-base: 76,82,191;\n--primary8-base: 67,64,144;\n--primary9-base: 60,54,107;\n--gray1-base: 247,250,252;\n--gray2-base: 237,242,246;\n--gray3-base: 226,232,240;\n--gray4-base: 204,213,224;\n--gray5-base: 160,174,192;\n--gray6-base: 113,128,150;\n--gray7-base: 73,85,104;\n--gray8-base: 44,55,72;\n--gray9-base: 26,32,44;\n--red1-base: 254,245,245;\n--red2-base: 255,215,215;\n--red3-base: 254,178,178;\n--red4-base: 246,173,84;\n--red5-base: 236,137,54;\n--red6-base: 221,106,31;\n--red7-base: 192,85,33;\n--red8-base: 155,66,33;\n--red9-base: 123,52,30;\n--orange1-base: 255,250,240;\n--orange2-base: 255,235,200;\n--orange3-base: 251,211,141;\n--orange4-base: 246,173,84;\n--orange5-base: 236,137,54;\n--orange6-base: 221,106,31;\n--orange7-base: 192,85,33;\n--orange8-base: 155,66,33;\n--orange9-base: 123,52,30;\n--yellow1-base: 255,255,240;\n--yellow2-base: 255,252,191;\n--yellow3-base: 250,240,136;\n--yellow4-base: 245,224,94;\n--yellow5-base: 235,200,75;\n--yellow6-base: 215,158,46;\n--yellow7-base: 182,121,31;\n--yellow8-base: 151,90,23;\n--yellow9-base: 116,65,16;\n--green1-base: 240,255,244;\n--green2-base: 198,246,213;\n--green3-base: 155,230,180;\n--green4-base: 104,211,145;\n--green5-base: 72,187,129;\n--green6-base: 56,161,105;\n--green7-base: 47,132,90;\n--green8-base: 39,104,73;\n--green9-base: 33,84,61;\n--teal1-base: 230,255,250;\n--teal2-base: 177,245,234;\n--teal3-base: 129,231,217;\n--teal4-base: 78,209,197;\n--teal5-base: 55,179,172;\n--teal6-base: 49,151,149;\n--teal7-base: 46,122,123;\n--teal8-base: 39,94,97;\n--teal9-base: 35,78,82;\n--blue1-base: 235,248,255;\n--blue2-base: 190,227,248;\n--blue3-base: 144,205,244;\n--blue4-base: 98,179,237;\n--blue5-base: 66,153,225;\n--blue6-base: 49,130,206;\n--blue7-base: 43,109,176;\n--blue8-base: 44,82,130;\n--blue9-base: 43,67,101;\n--indigo1-base: 236,244,255;\n--indigo2-base: 195,218,254;\n--indigo3-base: 162,191,250;\n--indigo4-base: 127,156,244;\n--indigo5-base: 102,126,234;\n--indigo6-base: 89,104,216;\n--indigo7-base: 76,82,191;\n--indigo8-base: 67,64,144;\n--indigo9-base: 60,54,107;\n--purple1-base: 250,245,255;\n--purple2-base: 233,217,253;\n--purple3-base: 215,188,250;\n--purple4-base: 182,147,244;\n--purple5-base: 159,121,234;\n--purple6-base: 128,90,213;\n--purple7-base: 108,71,193;\n--purple8-base: 85,60,154;\n--purple9-base: 67,51,122;\n--pink1-base: 255,245,247;\n--pink2-base: 255,214,226;\n--pink3-base: 251,182,206;\n--pink4-base: 245,136,179;\n--pink5-base: 237,99,166;\n--pink6-base: 214,63,140;\n--pink7-base: 184,50,128;\n--pink8-base: 151,39,109;\n--pink9-base: 112,35,89;\n--light1-base: 255,255,255;\n--light2-base: 250,250,250;\n--light3-base: 245,245,245;\n--light4-base: 240,240,240;\n--light5-base: 233,233,233;\n--light6-base: 227,227,227;\n--light7-base: 220,220,220;\n--light8-base: 215,215,215;\n--light9-base: 209,209,209;\n--dark1-base: 0,0,0;\n--dark2-base: 31,31,31;\n--dark3-base: 48,48,48;\n--dark4-base: 60,60,60;\n--dark5-base: 75,75,75;\n--dark6-base: 92,92,92;\n--dark7-base: 108,108,108;\n--dark8-base: 122,122,122;\n--dark9-base: 133,133,133;\n"+t+'\n--shadow-px: 0 0 0 2px;\n--shadow-out: 0 0 0 3px;\n--shadow-xs: 0 1px 2px 0;\n--shadow-sm: 0 4px 6px -1px;\n--shadow-md: 0 10px 15px -3px;\n--shadow-lg: 0 20px 25px -5px;\n--shadow-xl: 0 25px 50px -12px;\n--ease: cubic-bezier(0.23, 1, 0.32, 1);\n--ease-in: cubic-bezier(0.4, 0, 1, 1);\n--ease-out: cubic-bezier(0, 0, 0.2, 1);\n--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n--sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n--serif: Georgia, Cambria, "Times New Roman", Times, serif;\n--mono: Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n',o={};function n(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var a=s.apply(void 0,e);if(!o[a]){o[a]=!0;var t=document.createElement("style");t.innerHTML=a,document.head.append(t)}}n.widthAndHeight=function(e){return"\nwidth:"+e+";\nmin-width:"+e+";\nmax-width:"+e+";\nheight:"+e+";\nmin-height:"+e+";\nmax-height:"+e+";\n"};var r={center:"center",start:"flex-start",end:"flex-end",between:"flex-between",around:"flex-around",auto:"auto",baseline:"baseline",stretch:"stretch"},i={col:"column",row:"row"};n.flex=function(e){var n=e.split("-"),a=n[0],t=n[1],s=n[2];return"\n  display:flex;\n  flex-direction:"+i[a]+";\n  justify-content: "+r[t]+";\n  align-items:"+r[s]+";"},n.clear=function(){return"\nmargin: 0;\nborder-width: 0;\nborder-style: solid;\nborder-color: currentColor;\n-webkit-tap-highlight-color: transparent;\noutline:0;\ntext-decoration:none;\nlist-style: none;\n"},n.imageFitCover=function(){return"\nobject-fit: cover;\nobject-position: 50% 50%;\n"},n.wordBreak=function(e){return void 0===e&&(e=1),1===e?"\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    word-break: break-all;\n    ":"\n  text-overflow: -o-ellipsis-lastline;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: "+e+";\n  line-clamp: "+e+";\n  -webkit-box-orient: vertical;\n  "},n.cssValues=function(){return e},n.normal=function(){return"\nhtml{-webkit-text-size-adjust:100%} main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\nbody {line-height:1.15; padding:0px; margin:0px; font-size:16px; font-family:var(--sans);}\n"};var a={};return n.get=function(e){return a[e]||""},n.set=function(e,n){return a[e]=n},n});
