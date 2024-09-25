import React from 'react'
import { CButton } from '@coreui/react'
// const ChildComponent = ({ onClick, count }) => {
//   console.log('ChildComponent render')
//   return (
//     <div>
//       <CButton color="primary" type="button" onClick={onClick}>
//         Increase
//       </CButton>
//       <p>Count: {count}</p>
//     </div>
//   )
// }

const ChildComponent = React.memo(({ onClick, count }) => {
  console.log('ChildComponent render')
  return (
    <div>
      <CButton color="primary" type="button" onClick={onClick}>
        Increase
      </CButton>
      <p>Count: {count}</p>
    </div>
  )
})

export default ChildComponent
