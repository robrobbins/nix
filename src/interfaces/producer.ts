export default interface Producer {
  out: Function;
  [propName: string]: any;
}
