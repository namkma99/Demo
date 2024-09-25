import React, { Profiler } from 'react'
import { data } from './data'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { CButton } from '@coreui/react'
import { FixedSizeList as List } from 'react-window'

const simulateSlowLoadingImage = (src, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(src), delay);
    });
  };

const largeData = Array(5000)
  .fill(null)
  .map((_, index) => ({
    backgroundColor: index % 2 === 0 ? 'blue' : 'green',
    color: 'white',
    title: `Title ${index + 1}`,
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://i.pinimg.com/originals/d0/e3/05/d0e30570ca9da96da2911219687acccc.jpg', // Thêm ảnh lớn hơn nếu cần
  }))

const onRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions,
) => {
  console.log(`${id} (${phase}) - Actual duration: ${actualDuration}ms`)
}

const DataDisplayWithoutLazyLoad = () => {

   
  return (
    <Profiler id="WithoutLazyLoad" onRender={onRenderCallback}>
      <div className="d-flex flex-wrap mb-2 me-2">
        {largeData.map((item, index) => (
          <img
            key={index}
            className=" mb-2 me-2"
            src={item.image}
            alt={item.title}
            style={{ width: '100px', height: '50px' }}
          />
        ))}
      </div>
    </Profiler>
  )
}

const DataDisplayWithLazyLoad = () => {
  return (
    <Profiler id="WithLazyLoad" onRender={onRenderCallback}>
      <div className="d-flex flex-wrap">
        {largeData.map((item, index) => (
          <LazyLoadImage
            key={index}
            className="p-1"
            alt={item.title}
            effect="blur"
            src={item.image}
            width={100}
            height={50}
          />
        ))}
      </div>
    </Profiler>
  )
}

const LazyLoadImages = () => {
  return (
    <>
      <DataDisplayWithoutLazyLoad />
      {/* <DataDisplayWithLazyLoad /> */}
    </>
  )
}

export default LazyLoadImages
