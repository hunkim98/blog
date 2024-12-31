import { BaseExperienceTemplateProps } from './BaseExperienceTemplate'
import { Box, Flex, Grid, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

interface SimpleExperienceTemplateProps extends BaseExperienceTemplateProps {}

const SimpleExperienceTemplate: React.FC<SimpleExperienceTemplateProps> = ({ experience }) => {
  return (
    <>
      <Grid.Col span={6}>
        <Flex gap={'sm'}>
          <Box
            style={{
              lineHeight: 'normal',
              letterSpacing: -0.1,
              transition: 'all 0.3s ease-in-out',
            }}
          >
            -
          </Box>
          <Flex direction={'column'} gap={8}>
            <Link href={experience.companyLink}>
              <Text
                className="font-sans font-normal"
                td="underline"
                style={{
                  lineHeight: 'normal',
                  letterSpacing: -0.1,
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                {experience.company}
              </Text>
            </Link>
            <Text
              className="font-sans font-semibold"
              style={{
                lineHeight: 'normal',
                letterSpacing: -0.1,
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {experience.position}
            </Text>
          </Flex>
        </Flex>
      </Grid.Col>
      <Grid.Col span={6}>
        <Text
          className="font-sans font-thin"
          style={{
            lineHeight: 1.5,
            letterSpacing: -0.1,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          {experience.description}
        </Text>
      </Grid.Col>
    </>
  )
}

export default SimpleExperienceTemplate
