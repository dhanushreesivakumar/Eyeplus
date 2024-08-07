import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import '../Admin/DashboardPage.css';
import Sidebar from '../Admin/Sidebar';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Products Sold',
      data: [12, 19, 3, 5, 2, 3, 7, 10, 15, 20, 30, 45],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const pieData = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
  datasets: [
    {
      label: 'Product Distribution',
      data: [300, 50, 100, 40, 120],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
    },
  ],
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const DashboardPage = () => {
  const [sales, setSales] = useState(0);
  const [orders, setOrders] = useState(0);
  const [products, setProducts] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [returns, setReturns] = useState(0);

  useEffect(() => {
    const updateTotals = () => {
      setSales(getRandomNumber(1000, 5000));
      setOrders(getRandomNumber(200, 1000));
      setProducts(getRandomNumber(50, 500));
      setCustomers(getRandomNumber(300, 2000));
      setReturns(getRandomNumber(10, 100));
    };

    updateTotals();
    const intervalId = setInterval(updateTotals, 5000); // Update totals every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar/>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dashboard-cards">
          <div className="dashboard-card">Sales: {sales}</div>
          <div className="dashboard-card">Orders: {orders}</div>
          <div className="dashboard-card">Products: {products}</div>
          <div className="dashboard-card">Customers: {customers}</div>
          <div className="dashboard-card">Returns: {returns}</div>
        </div>
        <div className="charts">
          <div className="chart-container">
            <h2>Sales Overview</h2>
            <Line data={lineData} />
          </div>
          <div className="chart-container">
            <h2>Product Distribution</h2>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;