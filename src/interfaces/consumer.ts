export default interface Consumer {
  in: Function;
  [propName: string]: any;
}
