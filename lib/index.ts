import templateFn from "template-fn";

const cache = {} as any;

export function css(...args: any) {
  const txt = templateFn(...args);
  if (cache[txt]) {
    return;
  }
  cache[txt] = true;
  const ele = document.createElement("style");
  ele.innerHTML = txt;
  document.head.append(ele);
}

css.widthAndHeight = (str: string) => `
width:${str};
min-width:${str};
max-width:${str};
height:${str};
min-height:${str};
max-height:${str};
`;

const fm = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  between: "flex-between",
  around: "flex-around",
  auto: "auto",
  baseline: "baseline",
  stretch: "stretch",
} as any;

const colRow = {
  col: "column",
  row: "row",
} as any;

css.flex = (str: string) => {
  const [col, justify, align] = str.split("-");
  return `
  display:flex;
  flex-direction:${colRow[col]};
  justify-content: ${fm[justify]};
  align-items:${fm[align]};`;
};

css.removeDefaultStyle = () => `
margin: 0;
border-width: 0;
border-style: solid;
border-color: currentColor;
-webkit-tap-highlight-color: transparent;
outline:0;
text-decoration:none;
list-style: none;
`;

css.imageFitCover = () => `
object-fit: cover;
object-position: 50% 50%;
`;
