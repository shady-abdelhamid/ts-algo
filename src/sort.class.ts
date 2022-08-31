export abstract class Sort {
  constructor() {}

  /**
   * swap function for two element in an array of T
   * @param array array of T
   * @param firstIndex index of first element
   * @param secondIndex index of second element
   */
  protected swap<T>(array: Array<T>, firstIndex: number, secondIndex: number): Array<T> {
    let temp: T = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    return array;
  }

  abstract sort<T>(array: Array<T>): Array<T>;
}
