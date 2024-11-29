export class Image {
  width: number
  height: number
  channels: number
  data: Uint8Array

  constructor({ width, height, channels }) {
    this.width = width
    this.height = height
    this.channels = channels
    this.data = new Uint8Array(width * height * channels)
  }

  updateData(data: Uint8Array) {
    if (data.length !== this.data.length) {
      throw new Error('Data length does not match the image size')
    }
    this.data = data
  }

  setAll(value: number) {
    this.data.fill(value)
  }

  set(x: number, y: number, c: number, value: number) {
    if (this.channels === 1) {
      c = 0
    }
    if (x < 0 || x >= this.width || y < 0 || y >= this.height || c < 0 || c >= this.channels) {
      throw new Error('Index out of bounds')
    }
    this.data[y * this.width * this.channels + x * this.channels + c] = value
  }

  get(x: number, y: number, c?: number) {
    if (this.channels === 1) {
      c = 0
    } else if (c === undefined) {
      throw new Error('Channel is not specified')
    }
    if (x < 0) {
      x = 0
    }
    if (x >= this.width) {
      x = this.width - 1
    }
    if (y < 0) {
      y = 0
    }
    if (y >= this.height) {
      y = this.height - 1
    }
    if (c < 0) {
      c = 0
    }
    if (c >= this.channels) {
      c = this.channels - 1
    }
    return this.data[y * this.width * this.channels + x * this.channels + c]
  }

  // operator +
  add(image: Image) {
    if (
      this.width !== image.width ||
      this.height !== image.height ||
      this.channels !== image.channels
    ) {
      throw new Error('Image size does not match')
    }
    const newImage = new Image({ width: this.width, height: this.height, channels: this.channels })
    for (let i = 0; i < this.data.length; i++) {
      newImage.data[i] = this.data[i] + image.data[i]
    }
    return newImage
  }

  // operator -
  sub(image: Image) {
    if (
      this.width !== image.width ||
      this.height !== image.height ||
      this.channels !== image.channels
    ) {
      throw new Error('Image size does not match')
    }
    const newImage = new Image({ width: this.width, height: this.height, channels: this.channels })
    for (let i = 0; i < this.data.length; i++) {
      newImage.data[i] = this.data[i] - image.data[i]
    }
    return newImage
  }

  // operator *
  mul(image: Image) {
    if (
      this.width !== image.width ||
      this.height !== image.height ||
      this.channels !== image.channels
    ) {
      throw new Error('Image size does not match')
    }
    const newImage = new Image({ width: this.width, height: this.height, channels: this.channels })
    for (let i = 0; i < this.data.length; i++) {
      newImage.data[i] = this.data[i] * image.data[i]
    }
    return newImage
  }

  min() {
    let min = Infinity
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] < min) {
        min = this.data[i]
      }
    }
    return min
  }

  max() {
    let max = -Infinity
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] > max) {
        max = this.data[i]
      }
    }
    return max
  }

  save() {
    const canvas = document.createElement('canvas')
    canvas.width = this.width
    canvas.height = this.height
    const ctx = canvas.getContext('2d')
    if (ctx === null) {
      throw new Error('Failed to get 2d context')
    }
    const imageData = ctx.createImageData(this.width, this.height)
    imageData.data.set(this.data)
    ctx.putImageData(imageData, 0, 0)
    const url = canvas.toDataURL()
    const a = document.createElement('a')
    a.href = url
    a.download = 'image.png'
    a.click()
  }
}
