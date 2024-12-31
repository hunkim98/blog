import SimpleSkillTemplate from './SkillTemplate/SimpleSkillTemplate'
import { Flex, Grid, Text } from '@mantine/core'
import SkillType from 'interfaces/skill'
import React from 'react'

interface SkillsProps {}

const SkillsData: Array<SkillType> = [
  {
    name: 'Software',
    subSkills: ['Python', 'FastAPI', 'Django', 'Typescript', 'Node.js', 'Vite', 'React', 'Kotlin'],
  },
  {
    name: 'Machine Learning',
    subSkills: ['pandas', 'scikit-learn', 'Pytorch', 'Transformers.js', 'R', 'Tensorflow'],
  },
  {
    name: 'Database',
    subSkills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Elasticsearch'],
  },
  {
    name: 'Cloud Services',
    subSkills: ['AWS S3', 'AWS VPC', 'AWS Lambda', 'Serverless', 'Supabase', 'Vercel', 'Netlify'],
  },
  {
    name: 'Visualization',
    subSkills: ['Tableau', 'Matplotlib', 'D3.js', 'P5.js', 'Three.js'],
  },
]

const Skills: React.FC<SkillsProps> = () => {
  return (
    <Flex
      direction={'column'}
      gap={'sm'}
      flex={1}
      display={{
        base: 'none',
        sm: 'none',
        md: 'block',
      }}
    >
      <Text
        className="font-sans font-bold"
        c={'white'}
        size={'20px'}
        style={{
          letterSpacing: -0.6,
        }}
      >
        Skills
      </Text>
      <Grid gutter={'lg'} pt={10}>
        {SkillsData.map((skill) => {
          return <SimpleSkillTemplate key={skill.name} skill={skill} />
        })}
      </Grid>
    </Flex>
  )
}

export default Skills
