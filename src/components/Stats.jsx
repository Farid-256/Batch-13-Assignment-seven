import React from 'react'
import { useOutletContext } from 'react-router'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

const Stats = () => {

    const { timeline } = useOutletContext()

    const data = [
        { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
        { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
        { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
    ];

    const COLORS = ['#22c55e', '#3b82f6', '#f59e0b']

    return (
        <div className='text-center py-10'>
            <h2 className='text-3xl font-bold mb-6'>Friendship Analytics</h2>

            <div className='flex justify-center'>
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                    >
                        {
                            data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Stats