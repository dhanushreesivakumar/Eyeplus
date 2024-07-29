import React from 'react'

const Topbar = () => {
  return (
    <div style={{
      height: '6vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        width: '95%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        gap: '1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#ccc'
        }}>
          <img
            src="https://via.placeholder.com/150"
            alt="@avatar"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <span style={{
            position: 'absolute',
            display: 'none'
          }}>MM</span>
        </div>
      </div>
    </div>
  )
}

export default Topbar