import React from 'react'
import { DollarSign, ShoppingBag, Users } from 'lucide-react'
import Topbar from './Topbar'
import Leftbar from './Leftbar'

const cardStyle = {
    width: '25%',
    border: '1px solid var(--primary-color)', // Adjust this according to your primary color variable
    padding: '0.5rem',
    marginBottom: '1rem'
}

const cardHeaderStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0',
    paddingBottom: '0.5rem'
}

const cardTitleStyle = {
    fontSize: '0.875rem',
    fontWeight: '500'
}

const iconStyle = {
    height: '1.5rem',
    width: '1.5rem',
    color: 'var(--primary-color)' // Adjust this according to your primary color variable
}

const cardContentStyle = {
    fontSize: '1.5rem',
    fontWeight: '700'
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    margin: '0',
    padding: '0',
    overflow: 'hidden'
}

const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%'
}

const mainContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '1rem',
    overflowY: 'auto'
}

const AdminDashboard = () => {
    return (
        <div style={containerStyle}>
            <Topbar />
            <div style={contentWrapperStyle}>
                <Leftbar />
                <div style={mainContentStyle}>
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>
                            <div style={cardTitleStyle}>Total Users</div>
                            <Users style={iconStyle} />
                        </div>
                        <div style={cardContentStyle}>
                            10000
                        </div>
                    </div>
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>
                            <div style={cardTitleStyle}>Active Users</div>
                            <Users style={iconStyle} />
                        </div>
                        <div style={cardContentStyle}>
                            9999
                        </div>
                    </div>
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>
                            <div style={cardTitleStyle}>Total Orders</div>
                            <ShoppingBag style={iconStyle} />
                        </div>
                        <div style={cardContentStyle}>
                            10,000
                        </div>
                    </div>
                    <div style={cardStyle}>
                        <div style={cardHeaderStyle}>
                            <div style={cardTitleStyle}>Revenue</div>
                            <DollarSign style={iconStyle} />
                        </div>
                        <div style={cardContentStyle}>
                            10,000,00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard