let colors = "";
const colorsList = [
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
colorsList.forEach((v) => {
  for (let i = 1; i <= 9; i++) {
    colors += `--${v}${i}-0:rgba(var(--${v}${i}-base), 0); `;
    for (let a = 1; a <= 8; a++) {
      colors += `--${v}${i}-${a}:rgba(var(--${v}${i}-base), 0.${a}); `;
    }
    colors += `--${v}${i}:rgba(var(--${v}${i}-base), 1); `;
  }
});
["white", "black"].forEach((v) => {
  colors += `--${v}-0:rgba(var(--${v}-base), 0); `;
  for (let a = 1; a <= 8; a++) {
    colors += `--${v}-${a}:rgba(var(--${v}-base), 0.${a}); `;
  }
  colors += `--${v}:rgba(var(--${v}-base), 1); `;
});

export const cssValues = `
--xs: 480px;
--sm: 640px;
--md: 720px;
--lg: 1024px;
--xl: 1280px;
--t1: 0.12s;
--t2: 0.2s;
--t3: 0.3s;
--t4: 0.5s;
--t5: 0.7s;
--t6: 1s;
--h6: 1.25em;
--h5: 1.5em;
--h4: 1.875em;
--h3: 2.25em;
--h2: 3em;
--h1: 4em;
--fs1: 10px;
--fs2: 12px;
--fs3: 14px;
--fs4: 16px;
--fs5: 18px;
--fs6: 20px;
--zero: 0px;
--auto: auto;
--px: 1px;
--a1: 2px;
--a2: 4px;
--a3: 6px;
--a4: 8px;
--a5: 12px;
--a6: 16px;
--b1: 24px;
--b2: 34px;
--b3: 48px;
--b4: 64px;
--b5: 72px;
--b6: 80px;
--c1: 180px;
--c2: 260px;
--c3: 340px;
--c4: 420px;
--c5: 500px;
--c6: 580px;
--max: 9999px;
--white-base: 255,255,255;
--black-base: 0,0,0;
--primary1-base: 236,244,255;
--primary2-base: 195,218,254;
--primary3-base: 162,191,250;
--primary4-base: 127,156,244;
--primary5-base: 102,126,234;
--primary6-base: 89,104,216;
--primary7-base: 76,82,191;
--primary8-base: 67,64,144;
--primary9-base: 60,54,107;
--gray1-base: 247,250,252;
--gray2-base: 237,242,246;
--gray3-base: 226,232,240;
--gray4-base: 204,213,224;
--gray5-base: 160,174,192;
--gray6-base: 113,128,150;
--gray7-base: 73,85,104;
--gray8-base: 44,55,72;
--gray9-base: 26,32,44;
--red1-base: 254,245,245;
--red2-base: 255,215,215;
--red3-base: 254,178,178;
--red4-base: 246,173,84;
--red5-base: 236,137,54;
--red6-base: 221,106,31;
--red7-base: 192,85,33;
--red8-base: 155,66,33;
--red9-base: 123,52,30;
--orange1-base: 255,250,240;
--orange2-base: 255,235,200;
--orange3-base: 251,211,141;
--orange4-base: 246,173,84;
--orange5-base: 236,137,54;
--orange6-base: 221,106,31;
--orange7-base: 192,85,33;
--orange8-base: 155,66,33;
--orange9-base: 123,52,30;
--yellow1-base: 255,255,240;
--yellow2-base: 255,252,191;
--yellow3-base: 250,240,136;
--yellow4-base: 245,224,94;
--yellow5-base: 235,200,75;
--yellow6-base: 215,158,46;
--yellow7-base: 182,121,31;
--yellow8-base: 151,90,23;
--yellow9-base: 116,65,16;
--green1-base: 240,255,244;
--green2-base: 198,246,213;
--green3-base: 155,230,180;
--green4-base: 104,211,145;
--green5-base: 72,187,129;
--green6-base: 56,161,105;
--green7-base: 47,132,90;
--green8-base: 39,104,73;
--green9-base: 33,84,61;
--teal1-base: 230,255,250;
--teal2-base: 177,245,234;
--teal3-base: 129,231,217;
--teal4-base: 78,209,197;
--teal5-base: 55,179,172;
--teal6-base: 49,151,149;
--teal7-base: 46,122,123;
--teal8-base: 39,94,97;
--teal9-base: 35,78,82;
--blue1-base: 235,248,255;
--blue2-base: 190,227,248;
--blue3-base: 144,205,244;
--blue4-base: 98,179,237;
--blue5-base: 66,153,225;
--blue6-base: 49,130,206;
--blue7-base: 43,109,176;
--blue8-base: 44,82,130;
--blue9-base: 43,67,101;
--indigo1-base: 236,244,255;
--indigo2-base: 195,218,254;
--indigo3-base: 162,191,250;
--indigo4-base: 127,156,244;
--indigo5-base: 102,126,234;
--indigo6-base: 89,104,216;
--indigo7-base: 76,82,191;
--indigo8-base: 67,64,144;
--indigo9-base: 60,54,107;
--purple1-base: 250,245,255;
--purple2-base: 233,217,253;
--purple3-base: 215,188,250;
--purple4-base: 182,147,244;
--purple5-base: 159,121,234;
--purple6-base: 128,90,213;
--purple7-base: 108,71,193;
--purple8-base: 85,60,154;
--purple9-base: 67,51,122;
--pink1-base: 255,245,247;
--pink2-base: 255,214,226;
--pink3-base: 251,182,206;
--pink4-base: 245,136,179;
--pink5-base: 237,99,166;
--pink6-base: 214,63,140;
--pink7-base: 184,50,128;
--pink8-base: 151,39,109;
--pink9-base: 112,35,89;
--light1-base: 255,255,255;
--light2-base: 250,250,250;
--light3-base: 245,245,245;
--light4-base: 240,240,240;
--light5-base: 233,233,233;
--light6-base: 227,227,227;
--light7-base: 220,220,220;
--light8-base: 215,215,215;
--light9-base: 209,209,209;
--dark1-base: 0,0,0;
--dark2-base: 31,31,31;
--dark3-base: 48,48,48;
--dark4-base: 60,60,60;
--dark5-base: 75,75,75;
--dark6-base: 92,92,92;
--dark7-base: 108,108,108;
--dark8-base: 122,122,122;
--dark9-base: 133,133,133;
${colors}
--shadow-px: 0 0 0 2px;
--shadow-out: 0 0 0 3px;
--shadow-xs: 0 1px 2px 0;
--shadow-sm: 0 4px 6px -1px;
--shadow-md: 0 10px 15px -3px;
--shadow-lg: 0 20px 25px -5px;
--shadow-xl: 0 25px 50px -12px;
--ease: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--serif: Georgia, Cambria, "Times New Roman", Times, serif;
--mono: Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
`;