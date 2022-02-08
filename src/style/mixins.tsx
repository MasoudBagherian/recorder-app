interface Size{
  width?: string;
  height?: string
}
export const size = (sizeObj: Size) => ({
    width: sizeObj.width,
    height: sizeObj.height
})