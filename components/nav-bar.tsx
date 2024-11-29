import { Flex, Text, Title } from '@mantine/core'
import SocialIcon from './social-icons'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

const NavBar = ({ selectedCategory }: { selectedCategory: string }) => {
  const router = useRouter()
  return (
    <Flex
      gap={{
        xs: 'xs',
        md: 'md',
      }}
      direction={'row'}
      className="mt-16 mb-6 md:mb-7 select-none"
      align={'center'}
    >
      <Flex direction={'column'}>
        <Flex gap="lg" align={'center'}>
          <Text
            // order={1}
            size="lg"
            className="font-bold cursor-pointer"
            onClick={() => {
              router.push('/')
            }}
          >
            Donghun Kim
          </Text>
        </Flex>
        <Text>
          <Text opacity={0.5} span>
            Software Engineer engineering
          </Text>{' '}
          <Text opacity={0.8} span>
            {' '}
            Computer Graphics
          </Text>{' '}
          <Text opacity={0.8} span>
            &
          </Text>
          <Text opacity={0.8} span>
            {' '}
            AI{' '}
          </Text>
          <Text opacity={0.5} span>
            at Graduate School of Design
          </Text>
        </Text>
        <Flex gap={'xs'} mt={8}>
          <SocialIcon kind="github" href={`https://github.com/hunkim98`} size={18} />
          <SocialIcon kind="mail" href={`mailto:hunkim98@gmail.com`} size={18} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default NavBar
