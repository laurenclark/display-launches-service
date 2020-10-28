import React from 'react'

function LoadingSpinner({ text = 'Loading...' }: { text: string }) {
  return (
    <div className="loading" aria-placeholder="Loading">
      <h3>{text}</h3>
      <div role="status" className="loading__ripple">
        <div role="presentation"></div>
        <div role="presentation"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
