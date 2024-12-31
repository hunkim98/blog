import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { Flex, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

interface NavigateToOtherProps {
  prevTitle?: string
  nextTitle?: string
  prevPath?: string
  nextPath?: string
}

const NavigateToOther: React.FC<NavigateToOtherProps> = ({
  prevTitle,
  nextTitle,
  prevPath,
  nextPath,
}) => {
  return (
    <Flex wrap={'wrap'} mb={20} justify={'space-between'} w={'100%'} c={'white'}>
      {prevTitle && (
        <Link
          href={prevPath}
          className="border border-white/20 rounded-lg md:hover:scale-[1.01] transition hover:shadow-lg duration-200 cursor-pointer drop-shadow-md p-3 mb-3"
          style={{
            backgroundImage: 'url(/assets/background/noise50.png)',
          }}
        >
          <Text className="font-sans">Previous</Text>
          <Flex align={'center'} gap={'sm'}>
            <IconArrowLeft size={15} />
            <Text className="text-sm font-sans font-bold text-left"> {prevTitle}</Text>
          </Flex>
        </Link>
      )}
      {nextTitle && (
        <Link
          href={nextPath}
          className="border border-white/20 ml-auto rounded-lg md:hover:scale-[1.01] transition hover:shadow-lg duration-200 cursor-pointer drop-shadow-md p-3 mb-3"
          style={{
            backgroundImage: 'url(/assets/background/noise50.png)',
          }}
        >
          <Text className="text-right font-sans">Next</Text>
          <Flex align={'center'} gap={'sm'}>
            <Text className="text-sm font-bold text-right font-sans">{nextTitle}</Text>
            <IconArrowRight size={15} />
          </Flex>
        </Link>
      )}
    </Flex>
  )
}

export default NavigateToOther
