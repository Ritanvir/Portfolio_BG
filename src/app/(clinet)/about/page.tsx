import React from 'react'
import SelfSummary from '../../Components/AboutPage/SelfSummary';
import ExperienceEducation from '@/app/Components/AboutPage/ExperienceEducation';
import WorkTogether from '@/app/Components/AboutPage/WorkTogether';



export default function About() {
  return (
    <div>
      <SelfSummary />
      <ExperienceEducation />
      <WorkTogether />
    </div>
  )
}