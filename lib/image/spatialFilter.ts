import { Filter } from './Filter'
import { Image } from './Image'

const get1DGaussianFilterValues = (sigma: number, truncate: number) => {
  const offset = Math.ceil(truncate * sigma)
  const kernelSize = 2 * offset + 1
  const filterValues = new Array(kernelSize).fill(0) // vector
  let sum = 0
  for (let x = 0; x < kernelSize; x++) {
    const dx = x - offset
    const value = Math.exp(-(dx * dx) / (2 * sigma * sigma))
    filterValues[x] = value
    sum += value
  }
  return filterValues.map((value) => value / sum) // we later use this for constructing kernel
}

export const lowPassSpatialFilter = (imageData: Image, sigma: number, truncate: number) => {
  // we use gaussian
  const filterValues = get1DGaussianFilterValues(sigma, truncate)
  const filterXKernel = new Filter(
    filterValues.length,
    1,
    filterValues.map((value) => [value])
  )

  return imageData
}

export const highPassSpatialFilter = (imageData: Image, sigma: number, truncate: number) => {
  // we don't need to calculate again
  const lowPassImage = lowPassSpatialFilter(imageData, sigma, truncate)
  const highPassImage = new Image({
    width: imageData.width,
    height: imageData.height,
    channels: imageData.channels,
  })
  highPassImage.setAll(1)
  return highPassImage.sub(lowPassImage) // we just need to subtract
}
