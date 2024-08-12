'use client'
import { ResponsiveCalendar } from '@nivo/calendar';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// Function to generate dummy data
const generateDummyData = () => {
    const startDate = new Date(2015, 2, 1); // March 1, 2015
    const endDate = new Date(2016, 6, 12); // July 12, 2016

    const data = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        data.push({
            day: currentDate.toISOString().slice(0, 10),
            value: Math.floor(Math.random() * 4) + 1 // Random value between 1 and 4
        });
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
};

const MyResponsiveCalendar = () => {
    const data = generateDummyData();

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Calendar
                </CardTitle>
                <CardDescription>
                    A calendar component to display data over time.
                </CardDescription>
            </CardHeader>
            <CardContent className='h-[160px] flex items-center w-full'>
                <ResponsiveCalendar
                    data={data}
                    from="2015-03-01"
                    to="2016-07-12"
                    emptyColor="#eeeeee"
                    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                    monthBorderColor="#ffffff"
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                />
            </CardContent>
        </Card>
    );
};

export default MyResponsiveCalendar;
