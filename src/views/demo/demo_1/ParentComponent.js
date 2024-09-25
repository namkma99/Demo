import React, { useState, useCallback, useRef, useEffect } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const previousCallbackRef = useRef()

  const handleClick = () => {
    console.log('handleClick')
    setCount((prev) => prev + 1)
  }

  // const handleClick = useCallback(() => {
  //   console.log('handleClick: useCallback')
  //   setCount((prev) => prev + 1)
  // }, [])

  useEffect(() => {
    // Kiểm tra xem onButtonClick có thay đổi tham chiếu không
    if (previousCallbackRef.current !== handleClick) {
      console.log('handleClick is created again')
    }
    previousCallbackRef.current = handleClick
  }, [handleClick])

  return (
    <div className="d-flex gap-2">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <ChildComponent onClick={handleClick} count={count} />
    </div>
  )
}
// const ParentComponent = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   // Lưu trữ hàm onButtonClick trong một ref
//   const previousCallbackRef = useRef();

//   const onButtonClick = useCallback(() => {
//     console.log("onButtonClick");
//     setCount((prev) => prev + 1);
//   }, []);

// useEffect(() => {
//   // Kiểm tra xem onButtonClick có thay đổi tham chiếu không
//   if (previousCallbackRef.current !== onButtonClick) {
//     console.log('onButtonClick is created again')
//   }
//   previousCallbackRef.current = onButtonClick
// }, [onButtonClick])
//
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <ChildComponent onButtonClick={onButtonClick} count={count}/>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something"
//       />
//     </div>
//   );
// };

export default ParentComponent
