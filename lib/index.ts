import "./base";
import templateFn from "template-fn";

const cache = {} as any;

function css(...args: any[]) {
  const txt = templateFn(...args);
  if (cache[txt]) {
    return;
  }
  cache[txt] = true;
  const ele = document.createElement("style");
  ele.innerHTML = txt;
  document.head.append(ele);
}

export default css;
