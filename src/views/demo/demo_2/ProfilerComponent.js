import React, { Profiler } from 'react'
import VirtualScroll from './VirtualScroll'

const ProfilerComponent = () => {
  const onRender = (id, phase, actualDuration) => {
    console.log(`Rendered ${id} during ${phase} phase. Actual duration: ${actualDuration} ms`)
  }

  return (
    <Profiler id="demo_2" onRender={onRender}>
      <VirtualScroll />
    </Profiler>
  )
}

export default ProfilerComponent
