let colors = "";
let colorsList = [
  "primary",
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "indigo",
  "purple",
  "pink",
  "light",
  "dark",
];
colorsList.forEach(function (v) {
  for (let i = 1; i <= 9; i++) {
    colors += `--${v}-${i}00-0:rgba(let(--${v}-${i}00-base), 0); `;
    for (let a = 1; a <= 9; a += 1) {
      colors += `--${v}-${i}00-${a}:rgba(let(--${v}-${i}00-base), 0.${a}); `;
    }
    colors += `--${v}-${i}00:rgb(let(--${v}-${i}00-base)); `;
  }
});
["white", "black"].forEach(function (v) {
  colors += `--${v}-0:rgba(let(--${v}-base), 0); `;
  for (let a = 1; a <= 9; a += 1) {
    colors += `--${v}-${a}:rgba(let(--${v}-base), 0.${a}); `;
  }
  colors += `--${v}:rgb(let(--${v}-base)); `;
});

let cssValues = `
  :root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:focus{outline:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;padding:0;font-size:16px}body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:let(--gray-200)}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:let(--gray-400)}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:let(--gray-400)}input::placeholder,textarea::placeholder{color:let(--gray-400)}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}
  
  :root {
  --sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 16px;
  --ease: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --white-base: 255,255,255;
  --black-base: 0,0,0;
  --primary-100-base: 236,244,255;
  --primary-200-base: 195,218,254;
  --primary-300-base: 162,191,250;
  --primary-400-base: 127,156,244;
  --primary-500-base: 102,126,234;
  --primary-600-base: 89,104,216;
  --primary-700-base: 76,82,191;
  --primary-800-base: 67,64,144;
  --primary-900-base: 60,54,107;
  --gray-100-base: 247,250,252;
  --gray-200-base: 237,242,246;
  --gray-300-base: 226,232,240;
  --gray-400-base: 204,213,224;
  --gray-500-base: 160,174,192;
  --gray-600-base: 113,128,150;
  --gray-700-base: 73,85,104;
  --gray-800-base: 44,55,72;
  --gray-900-base: 26,32,44;
  --red-100-base: 254,245,245;
  --red-200-base: 255,215,215;
  --red-300-base: 254,178,178;
  --red-400-base: 246,173,84;
  --red-500-base: 236,137,54;
  --red-600-base: 221,106,31;
  --red-700-base: 192,85,33;
  --red-800-base: 155,66,33;
  --red-900-base: 123,52,30;
  --orange-100-base: 255,250,240;
  --orange-200-base: 255,235,200;
  --orange-300-base: 251,211,141;
  --orange-400-base: 246,173,84;
  --orange-500-base: 236,137,54;
  --orange-600-base: 221,106,31;
  --orange-700-base: 192,85,33;
  --orange-800-base: 155,66,33;
  --orange-900-base: 123,52,30;
  --yellow-100-base: 255,255,240;
  --yellow-200-base: 255,252,191;
  --yellow-300-base: 250,240,136;
  --yellow-400-base: 245,224,94;
  --yellow-500-base: 235,200,75;
  --yellow-600-base: 215,158,46;
  --yellow-700-base: 182,121,31;
  --yellow-800-base: 151,90,23;
  --yellow-900-base: 116,65,16;
  --green-100-base: 240,255,244;
  --green-200-base: 198,246,213;
  --green-300-base: 155,230,180;
  --green-400-base: 104,211,145;
  --green-500-base: 72,187,129;
  --green-600-base: 56,161,105;
  --green-700-base: 47,132,90;
  --green-800-base: 39,104,73;
  --green-900-base: 33,84,61;
  --teal-100-base: 230,255,250;
  --teal-200-base: 177,245,234;
  --teal-300-base: 129,231,217;
  --teal-400-base: 78,209,197;
  --teal-500-base: 55,179,172;
  --teal-600-base: 49,151,149;
  --teal-700-base: 46,122,123;
  --teal-800-base: 39,94,97;
  --teal-900-base: 35,78,82;
  --blue-100-base: 235,248,255;
  --blue-200-base: 190,227,248;
  --blue-300-base: 144,205,244;
  --blue-400-base: 98,179,237;
  --blue-500-base: 66,153,225;
  --blue-600-base: 49,130,206;
  --blue-700-base: 43,109,176;
  --blue-800-base: 44,82,130;
  --blue-900-base: 43,67,101;
  --indigo-100-base: 236,244,255;
  --indigo-200-base: 195,218,254;
  --indigo-300-base: 162,191,250;
  --indigo-400-base: 127,156,244;
  --indigo-500-base: 102,126,234;
  --indigo-600-base: 89,104,216;
  --indigo-700-base: 76,82,191;
  --indigo-800-base: 67,64,144;
  --indigo-900-base: 60,54,107;
  --purple-100-base: 250,245,255;
  --purple-200-base: 233,217,253;
  --purple-300-base: 215,188,250;
  --purple-400-base: 182,147,244;
  --purple-500-base: 159,121,234;
  --purple-600-base: 128,90,213;
  --purple-700-base: 108,71,193;
  --purple-800-base: 85,60,154;
  --purple-900-base: 67,51,122;
  --pink-100-base: 255,245,247;
  --pink-200-base: 255,214,226;
  --pink-300-base: 251,182,206;
  --pink-400-base: 245,136,179;
  --pink-500-base: 237,99,166;
  --pink-600-base: 214,63,140;
  --pink-700-base: 184,50,128;
  --pink-800-base: 151,39,109;
  --pink-900-base: 112,35,89;
  --light-100-base: 255,255,255;
  --light-200-base: 250,250,250;
  --light-300-base: 245,245,245;
  --light-400-base: 240,240,240;
  --light-500-base: 233,233,233;
  --light-600-base: 227,227,227;
  --light-700-base: 220,220,220;
  --light-800-base: 215,215,215;
  --light-900-base: 209,209,209;
  --dark-100-base: 0,0,0;
  --dark-200-base: 31,31,31;
  --dark-300-base: 48,48,48;
  --dark-400-base: 60,60,60;
  --dark-500-base: 75,75,75;
  --dark-600-base: 92,92,92;
  --dark-700-base: 108,108,108;
  --dark-800-base: 122,122,122;
  --dark-900-base: 133,133,133;
  ${colors}
  }
  `;
let ele = document.createElement("style");
ele.textContent = cssValues;
ele.id = "css-value-colors";
document.head.append(ele);
