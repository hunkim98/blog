import { Dotting } from 'dotting'
import React from 'react'

interface DottingComponentProps {}

const DottingComponent: React.FC<DottingComponentProps> = () => {
  return <Dotting width={'100%'} height={300} />
}

export default DottingComponent
