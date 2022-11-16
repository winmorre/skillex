import React from "react";
import {AxisOptions, Chart} from "react-charts";


interface DynamicChart {
    days?: string;
    points?: number;
}

type Series = {
    label: string,
    data: DynamicChart[]
}

const data: Series[] = [
    {
        label: '01-06 May',
        data: [
            {
                days: 'Mon',
                points: 12
            },
            {
                days: 'Tue',
                points: 88
            },
            {
                days: 'Wed',
                points: 10
            },
            {
                days: 'Thur',
                points: 46
            },
            {
                days: 'Fri',
                points: 80
            },
            {
                days: 'Sat',
                points: 35
            },
            {
                days: 'Sun',
                points: 120
            }
        ]
    },
    {
        label: '07-14 May',
        data: [
            {
                days: 'Mon',
                points: 10
            },
            {
                days: 'Tue',
                points: 20
            },
            {
                days: 'Wed',
                points: 59
            },
            {
                days: 'Thur',
                points: 6
            },
            {
                days: 'Fri',
                points: 89
            },
            {
                days: 'Sat',
                points: 60
            },
            {
                days: 'Sun',
                points: 77
            }
        ]
    },
    {
        label: '015-21 May',
        data: [
            {
                days: 'Mon',
                points: 20
            },
            {
                days: 'Tue',
                points: 28
            },
            {
                days: 'Wed',
                points: 15
            },
            {
                days: 'Thur',
                points: 170
            },
            {
                days: 'Fri',
                points: 45
            },
            {
                days: 'Sat',
                points: 50
            },
            {
                days: 'Sun',
                points: 8
            }
        ]
    },
]

export function DynamicChart({}: DynamicChart): React.ReactNode {
    const primaryAxis= React.useMemo(
        ():AxisOptions<DynamicChart> => ({
            getValue: datum => datum.days,
        }),
        []
    )

    const secondaryAxes= React.useMemo(
        ():AxisOptions<DynamicChart>[] => [
            {
                getValue: datum => datum.points,
                elementType: 'bar',
            },
        ],
        []
    )

    return (
        <div className="Chart-container">
            <Chart options={{
                data,
                primaryAxis,
                secondaryAxes,
            }}
            />
        </div>
    )
}