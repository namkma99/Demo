import React from 'react'
import { FixedSizeList as List } from 'react-window'
const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`)

const ListWithoutWindow = () => {
  return (
    <div>
      {items.map((item) => (
        <div key={item} style={{ padding: '10px', border: '1px solid #ccc' }}>
          {item}
        </div>
      ))}
    </div>
  )
}

// Virtualized List
const Row = ({ index, style }) => <div style={style}>{items[index]}</div>

const ListWithWindow = () => {
  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={35} // chiều cao mỗi item
      width={300}
    >
      {Row}
    </List>
  )
}

const VirtualScroll = () => {
  return (
    <>
      {/* <ListWithoutWindow /> */}
      <ListWithWindow />
    </>
  )
}

export default VirtualScroll
