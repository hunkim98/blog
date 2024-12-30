import { BaseExperienceTemplateProps } from './BaseExperienceTemplate'
import React from 'react'

interface SimpleExperienceTemplateProps extends BaseExperienceTemplateProps {}

const SimpleExperienceTemplate: React.FC<SimpleExperienceTemplateProps> = ({
  company,
  companyLink,
  position,
  description,
  startDate,
  endDate,
}) => {
  return <div>SimpleExperienceTemplate</div>
}

export default SimpleExperienceTemplate
