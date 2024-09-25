import React, { Profiler, useRef, useEffect } from 'react'
import ParentComponent from './ParentComponent'

const ProfilerComponent = () => {
    const profilerRef = useRef(null);

  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  ) => {
    console.log({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions,
      })
  }

  return (
    <div>
      <Profiler id="Profile_1" onRender={onRender}>
        <ParentComponent />
      </Profiler>

      {/* Hiển thị thông tin profiler dưới dạng JSON */}
      {/* <pre>{JSON.stringify(profiler, null, 2)}</pre> */}
    </div>
  )
}

export default ProfilerComponent
