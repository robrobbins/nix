import Consumer from './consumer'
import Producer from './producer'

export default interface Filter extends Consumer, Producer {
  [propName: string]: any;
}
