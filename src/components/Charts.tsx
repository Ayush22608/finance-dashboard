import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, Legend
} from 'recharts';

interface ChartProps {
  data: any[];
  type: 'bar' | 'pie' | 'line' | 'area';
  dataKey: string;
  nameKey?: string;
  height?: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export const Chart: React.FC<ChartProps> = ({ data, type, dataKey, nameKey, height = 300 }) => {
  const tooltipStyle = {
    backgroundColor: 'hsl(var(--card))',
    borderColor: 'hsl(var(--border))',
    color: 'hsl(var(--card-foreground))',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
  };

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: 'hsl(var(--foreground))' }} />
            <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }} />
            <Bar dataKey={dataKey} fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey={dataKey}
              nameKey={nameKey}
              label={({ name, percent }) => percent !== undefined ? `${name} ${(percent * 100).toFixed(0)}%` : name}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: 'hsl(var(--foreground))' }} />
            <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }} />
          </PieChart>
        );
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: 'hsl(var(--foreground))' }} />
            <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }} />
            <Line type="monotone" dataKey={dataKey} stroke="#4f46e5" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        );
      case 'area':
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: 'hsl(var(--foreground))' }} />
            <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }} />
            <Area type="monotone" dataKey={dataKey} stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.1} />
          </AreaChart>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        {renderChart() || <div>No chart type specified</div>}
      </ResponsiveContainer>
    </div>
  );
};
