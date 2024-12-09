import { Image } from './Image'

export class Filter {
  private _height: number
  private _width: number
  private _size: number
  private _data: number[][]

  constructor(width: number, height: number, data?: number[]) {
    this._width = width
    this._height = height
    if (data) {
      // check if dimensions match
      if (data.length != height * width) {
        throw new Error('Data dimensions do not match the kernel size')
      }
      this._data = new Array(height).fill(0).map((_, y) => data.slice(y * width, (y + 1) * width))
      for (let y = 0; y < height; y++) {
        if (this._data[y].length != width) {
          throw new Error('Data dimensions do not match the kernel size')
        }
      }
    } else {
      this._data = new Array(height).fill(0).map(() => new Array(width).fill(0))
    }
  }

  public convolve(imageData: Image, clamp = true) {
    // create new image
    const newImageData = new Image({
      width: imageData.width,
      height: imageData.height,
      channels: imageData.channels,
    })
    newImageData.setAll(0)
    const kernelHalfWidth = Math.floor(this._width / 2)
    const kernelHalfHeight = Math.floor(this._height / 2)
    for (let y = 0; y < imageData.height; y++) {
      for (let x = 0; x < imageData.width; x++) {
        for (let c = 0; c < imageData.channels; c++) {
          let value = 0
          for (let ky = -kernelHalfHeight; ky <= kernelHalfHeight; ky++) {
            for (let kx = -kernelHalfWidth; kx <= kernelHalfWidth; kx++) {
              const pixelValue = imageData.get(x + kx, y + ky, c)
              const kernelValue = this.get(kx - kernelHalfWidth, ky - kernelHalfHeight)
              value += pixelValue * kernelValue
            }
          }
          newImageData.set(x, y, c, value)
        }
      }
    }
    return newImageData
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
