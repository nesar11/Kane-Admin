import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      "active user": 789,

    },
    {
      name: 'Feb',
      "active user": 2000,

    },
    {
      name: 'Mar',
      "active user": 951,

    },
    {
      name: 'Apr',
      "active user": 2000,

    },
    {
      name: 'May',
      "active user": 1785,

    },
    {
      name: 'Jun',
      "active user": 1520,

    },
    {
      name: 'Jul',
      "active user": 621,

    },
    {
      name: 'Aug',
      "active user": 1452,

    },
    {
      name: 'Sep',
      "active user": 852,

    },
    {
      name: 'Oct',
      "active user": 1820,

    },
    {
      name: 'nov',
      "active user": 1500,

    },
    {
      name: 'Dec',
      "active user": 2000,

    }

  ];
export default function Chart() {
  return (
    <div  className="chart">
        <h3 className="chartTitle">Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"></XAxis>
            <Line type="monotone" dataKey="active user"></Line>   
            <Tooltip/>
            <CartesianGrid stroke="#e0dfdf" /> 
            </LineChart>
        </ResponsiveContainer>
      
    </div>
  )
}
