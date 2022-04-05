import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';
const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='dash-root'>
            <h4>Investment Vs Revenue</h4>
            <div className='dash-root2'>
                <div className='investment-revenue'>
                    <h5>LineChart</h5>
                    <LineChart width={730} height={300} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="green" />
                        <Line type="monotone" dataKey="revenue" stroke="red" />
                    </LineChart>
                </div>
                <div className='sell-per-month'>
                <h5>BarChart</h5>
                    <BarChart
                        width={730}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" minPointSize={5}>
                            <LabelList dataKey="name"  />
                        </Bar>
                        <Bar dataKey="revenue" fill="#82ca9d" minPointSize={10} />
                    </BarChart>

                </div>

            </div>

        </div>

    );
};

export default Dashboard;