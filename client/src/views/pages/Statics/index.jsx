import { useState } from 'react';
import Chart from 'react-apexcharts';

const Statics = () => {
    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useState({
        options: {
            chart: {
                id: 'apexchart-example',
            },
            xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            },
        },
        series: [
            {
                name: 'series-1',
                data: [2001, 2003, 2006, 3004, 2004, 2000, 1000],
            },
        ],
    });

    return (
        <div className="row">
            <div className="col-10">
                <Chart options={state.options} series={state.series} type="bar" width={500} height={320} />
            </div>
        </div>
    );
};

export default Statics;
