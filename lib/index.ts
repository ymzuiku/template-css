import templateFn from "template-fn";
import { cssValues } from "./cssValues";
import { normal } from "./normal";

const cache = {} as any;

function css(...args: any) {
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

css.flex = (
  str:
    | "col-start-start"
    | "col-start-center"
    | "col-start-end"
    | "col-center-start"
    | "col-center-center"
    | "col-center-end"
    | "col-end-start"
    | "col-end-center"
    | "col-end-end"
    | "col-between-start"
    | "col-between-center"
    | "col-between-end"
    | "col-around-start"
    | "col-around-center"
    | "col-around-end"
    | "col-stretch-start"
    | "col-stretch-center"
    | "col-stretch-end"
    | "row-start-start"
    | "row-start-center"
    | "row-start-end"
    | "row-center-start"
    | "row-center-center"
    | "row-center-end"
    | "row-end-start"
    | "row-end-center"
    | "row-end-end"
    | "row-between-start"
    | "row-between-center"
    | "row-between-end"
    | "row-around-start"
    | "row-around-center"
    | "row-around-end"
    | "row-stretch-start"
    | "row-stretch-center"
    | "row-stretch-end"
) => {
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

css.wordBreak = (line = 1) => {
  if (line === 1) {
    return `
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    `;
  }
  return `
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  line-clamp: ${line};
  -webkit-box-orient: vertical;
  `;
};

css.cssValues = cssValues;
css.normal = normal;

export default css;
