export class Filter {
  private _height: number
  private _width: number
  private _size: number
  private _data: number[][]

  constructor(width: number, height: number, data?: number[][]) {
    this._width = width
    this._height = height
    if (data) {
      // check if dimensions match
      if (data.length !== height || data[0].length !== width) {
        throw new Error('Data dimensions do not match the kernel size')
      }
      this._data = data
    } else {
      this._data = new Array(height).fill(0).map(() => new Array(width).fill(0))
    }
  }

  public set(x: number, y: number, value: number) {
    this._data[y][x] = value
  }

  public get(x: number, y: number) {
    return this._data[y][x]
  }

  public get width() {
    return this._width
  }

  public get height() {
    return this._height
  }
}
