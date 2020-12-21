declare function css(...args: any): void;
declare namespace css {
    var widthAndHeight: (str: string) => string;
    var flex: (str: string) => string;
    var removeDefaultStyle: () => string;
    var imageFitCover: () => string;
}
export default css;
