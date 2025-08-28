import { BaseExperienceTemplateProps } from './ExperienceTemplate/BaseExperienceTemplate'
import SimpleExperienceTemplate from './ExperienceTemplate/SimpleExperienceTemplate'
import ExperienceType from 'interfaces/experience'
import { Flex, Grid, Text } from '@mantine/core'
import React from 'react'

interface ExperienceProps {}

const ExperienceData: Array<ExperienceType> = [
  {
    company: 'Gensler',
    companyLink: 'https://www.gensler.com/',
    position: 'Data Researcher',
    description:
      'Created a spatial analysis pipeline using Arcpy and Geopandas to calculate 38 urban metrics (e.g park accessibility)',
    startDate: 'May 2025',
    endDate: 'Aug 2025',
  },
  {
    company: 'Dalpha',
    companyLink: 'https://dalpha.so/',
    position: 'Software Engineer',
    description: 'Led the development of advanced AI services for Dalpha and its B2B customers.',
    startDate: 'Mar 2024',
    endDate: 'Jul 2024',
  },
  {
    company: 'Seoul National University',
    companyLink: 'http://hcil.snu.ac.kr/',
    position: 'AI Research Assistant',
    description:
      'Created data visualization solutions for major tech companies and academic conferences.',
    startDate: 'Jul 2023',
    endDate: 'Dec 2023',
  },
  {
    company: 'NAVER Corporation',
    companyLink: 'https://www.navercorp.com/',
    position: 'Software Engineer',
    description:
      'Enhanced an open-source collaborative software SDK and developing document editors.',
    startDate: 'Jun 2022',
    endDate: 'Dec 2022',
  },
  // {
  //   company: 'Whoyaho',
  //   companyLink: 'https://www.fidget.town/',
  //   position: 'Software Engineer',
  //   description:
  //     'Built a 0 to 1 mobile app startup, whose app reached #1 in the App Store within 2 days of launch.',
  //   startDate: 'Jun 2021',
  //   endDate: 'Feb 2022',
  // },
]

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <Flex direction={'column'} gap={'sm'} flex={1}>
      <Text
        className="font-sans font-bold"
        c={'white'}
        size={'20px'}
        style={{
          letterSpacing: -0.6,
        }}
      >
        Experience
      </Text>
      <Grid gutter={'lg'}>
        {ExperienceData.map((experience) => {
          return <SimpleExperienceTemplate key={experience.company} experience={experience} />
        })}
      </Grid>
    </Flex>
  )
}

export default Experience
