import { useMediaQuery } from '@mantine/hooks'
import { em } from '@mantine/core'

export const useMantineMediaQuery = () => {
  const isSmallerThanXs = useMediaQuery(`(max-width: ${em(576)})`)
  const isSmallerThanSm = useMediaQuery(`(max-width: ${em(768)})`)
  const isSmallerThanMd = useMediaQuery(`(max-width: ${em(992)})`)
  return { isSmallerThanSm, isSmallerThanMd, isSmallerThanXs }
}
