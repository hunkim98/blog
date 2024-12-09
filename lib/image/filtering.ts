import { Filter } from './Filter'
import { Image } from './Image'

/**
 *
 * @description Compute the values of a 1D Gaussian filter (This is used for faster Gaussian blur)
 * @param sigma
 * @param truncate
 * @returns
 */
export const gauss1DFilterValues = (sigma: number, truncate: number) => {
  const offset = Math.ceil(truncate * sigma)
  const filterSize = 2 * offset + 1

  const filterValues = new Array(filterSize).fill(0)

  // compute unnormalized value of guassian
  let sum = 0
  for (let x = 0; x < filterSize; x++) {
    const dx = x - offset
    const value = Math.exp(-(dx * dx) / (2 * sigma * sigma))
    filterValues[x] = value
    sum += value
  }

  // normalize
  return filterValues.map((value) => value / sum)
}

/**
 * @description Apply a 2D Gaussian blur to an image (This is a faster version of the Gaussian blur)
 * @param image
 * @param sigma
 * @param truncate
 * @param clamp
 * @returns
 */
export const gaussianBlurSeperable = (
  image: Image,
  sigma: number,
  truncate: number,
  clamp = true
) => {
  const fData = gauss1DFilterValues(sigma, truncate)
  const gaussX = new Filter(fData.length, 1, fData)
  const gaussY = new Filter(1, fData.length, fData)
  const filteredX = gaussX.convolve(image, clamp)
  const filteredY = gaussY.convolve(filteredX, clamp)
  return filteredY
}
