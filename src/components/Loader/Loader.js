import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{
      position: "absolute",
      top: "50%",
      right: "50%",
      transform: "translate(50%,-50%)",
    }} >
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#8d0ed9" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  )
}

export default Loader;