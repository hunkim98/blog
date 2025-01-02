import { useMediaQuery } from '@mantine/hooks'
import { em } from '@mantine/core'

export const useMantineMediaQuery = () => {
  const isSmallerThanSm = useMediaQuery(`(max-width: ${em(576)})`)
  const isSmallerThanMd = useMediaQuery(`(max-width: ${em(768)})`)
  return { isSmallerThanSm, isSmallerThanMd }
}
