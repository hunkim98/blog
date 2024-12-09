import babyData from './baby.json' assert { type: 'json' }
import React from 'react'

interface TestImageProps {}

const TestImage: React.FC<TestImageProps> = () => {
  // import json
  console.log(babyData['data'])
  return (
    <div>
      <h1>Test Image</h1>
    </div>
  )
}
export default TestImage
