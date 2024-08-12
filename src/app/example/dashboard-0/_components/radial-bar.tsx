'use client'
import { ResponsiveRadialBar } from '@nivo/radial-bar';

const generateDummyData = () => {
    return [
        {
            "id": "Supermarket",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 127
                },
                {
                    "x": "Fruits",
                    "y": 202
                },
                {
                    "x": "Meat",
                    "y": 86
                }
            ]
        },
        {
            "id": "Combini",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 125
                },
                {
                    "x": "Fruits",
                    "y": 277
                },
                {
                    "x": "Meat",
                    "y": 32
                }
            ]
        },
        {
            "id": "Online",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 81
                },
                {
                    "x": "Fruits",
                    "y": 58
                },
                {
                    "x": "Meat",
                    "y": 285
                }
            ]
        }
    ]
};


const MyResponsiveRadialBar = () => {
    const data = generateDummyData();

    return (
        <ResponsiveRadialBar
            data={data}
            valueFormat=">-.2f"
            padding={0.4}
            cornerRadius={2}
            margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
            radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
            circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
            // legends={[
            //     {
            //         anchor: 'right',
            //         direction: 'column',
            //         justify: false,
            //         translateX: 80,
            //         translateY: 0,
            //         itemsSpacing: 6,
            //         itemDirection: 'left-to-right',
            //         itemWidth: 100,
            //         itemHeight: 18,
            //         itemTextColor: '#999',
            //         symbolSize: 18,
            //         symbolShape: 'square',
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemTextColor: '#000'
            //                 }
            //             }
            //         ]
            //     }
            // ]}
        />
    );
};

export default MyResponsiveRadialBar;
