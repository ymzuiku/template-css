declare function css(...args: any): void;
declare namespace css {
    var widthAndHeight: (str: string) => string;
    var flex: (str: "col-start-start" | "col-start-center" | "col-start-end" | "col-center-start" | "col-center-center" | "col-center-end" | "col-end-start" | "col-end-center" | "col-end-end" | "col-between-start" | "col-between-center" | "col-between-end" | "col-around-start" | "col-around-center" | "col-around-end" | "col-stretch-start" | "col-stretch-center" | "col-stretch-end" | "row-start-start" | "row-start-center" | "row-start-end" | "row-center-start" | "row-center-center" | "row-center-end" | "row-end-start" | "row-end-center" | "row-end-end" | "row-between-start" | "row-between-center" | "row-between-end" | "row-around-start" | "row-around-center" | "row-around-end" | "row-stretch-start" | "row-stretch-center" | "row-stretch-end") => string;
    var removeDefaultStyle: () => string;
    var imageFitCover: () => string;
}
export default css;
