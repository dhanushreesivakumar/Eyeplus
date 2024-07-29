import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, Power } from 'lucide-react'

const Leftbar = () => {
  const AdminLinks = [
    {
      title: 'Dashboard',
      link: '/admin/dashboard',
      icon: LayoutDashboard
    },
    {
      title: 'Users',
      link: '/admin/users',
      icon: Users
    }
  ]
  const navigate = useNavigate()

  // Function to handle navigation based on category
  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    
    <div style={{ height: '100vh', width: '16.6667%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
      <div style={{ height: '5%', color: '#3b82f6', fontWeight: 'bold', fontSize: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        iamneo
      </div>
      <div style={{ height: '90%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', gap: '0.5rem' }}>
        {
          AdminLinks.map((data, index) => (
            <NavLink key={index} to={data.link} style={{ padding: '1.25rem', backgroundColor: 'rgba(59, 130, 246, 0.05)', hover: 'background-color: rgba(59, 130, 246, 0.1)', fontWeight: 'bold', marginTop: '0.5rem', width: '100%' }}>
              <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', height: '100%', width: '100%', gap: '0.5rem' }}>
                {React.createElement(data.icon, { size: 20 })}
                {data.title}
              </span>
            </NavLink>
          ))
        }
      </div>
      <div style={{ height: '5%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={() => handleNavigation("/")} style={{ padding: '1.25rem', backgroundColor: 'rgba(239, 68, 68, 0.05)', hover: 'background-color: rgba(239, 68, 68, 0.1)', fontWeight: 'bold', width: '100%', border: 'none', cursor: 'pointer' }}>
          <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', height: '100%', width: '100%', gap: '0.5rem', color: '#ef4444' }}>
            <Power size={20} /> Logout
          </span>
        </button>
      </div>
    </div>
  )
}

export default Leftbar