import { BaseSkillTemplateProps } from './BaseSkillTemplate'
import { Flex, Grid, Text } from '@mantine/core'
import React from 'react'

interface SimpleSkillTemplateProps extends BaseSkillTemplateProps {}

const SimpleSkillTemplate: React.FC<SimpleSkillTemplateProps> = ({ skill }) => {
  return (
    <>
      <Grid.Col
        span={{
          base: 12,
          xs: 12,
          sm: 3,
        }}
      >
        <Text
          className="font-sans font-semibold"
          style={{
            lineHeight: 1,
          }}
        >
          {skill.name}
        </Text>
      </Grid.Col>
      <Grid.Col
        span={{
          base: 12,
          xs: 12,
          sm: 9,
        }}
      >
        <Flex wrap="wrap" gap={6}>
          {skill.subSkills.map((subSkill) => {
            const isLast = skill.subSkills.indexOf(subSkill) === skill.subSkills.length - 1
            if (!isLast) {
              return (
                <Text
                  className="font-sans font-thin"
                  style={{
                    lineHeight: 'normal',
                    letterSpacing: -0.1,
                    transition: 'all 0.3s ease-in-out',
                  }}
                  key={subSkill}
                >
                  {subSkill},
                </Text>
              )
            }
            return (
              <Text
                className="font-sans font-thin"
                style={{
                  lineHeight: 1.5,
                  letterSpacing: -0.1,
                  transition: 'all 0.3s ease-in-out',
                }}
                key={subSkill}
              >
                {subSkill}
              </Text>
            )
          })}
        </Flex>
      </Grid.Col>
    </>
  )
}

export default SimpleSkillTemplate
