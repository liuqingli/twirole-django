// assets/js/index.jsx
import React from 'react';
import uuid from 'uuid/v4';
import c3 from 'c3';


class Chart extends React.Component {
    constructor(props) {
        super(props);

        // All ids must begin with a alphanumeric character
        this.id = 'chart-' + uuid();
        this._update = this._update.bind(this);
    }

    _update() {
        const data = this.props.data;
        const height = this.props.height || 30;
        const width = this.props.width;

        this.chart = c3.generate({
            bindto: `#${this.id}`,
            data: {
                columns: [
                    ['Null', 100],
                    ['Male', 0],
                    ['Female', 0],
                    ['Brand', 0]
                ],
                type: 'bar',
                colors: {
                    Null: '#f9f9f9',
                    Male: '#0066CC',
                    Female: '#FF6666',
                    Brand: '#808080'
                },
                groups: [
                    ['Null', 'Male', 'Female', 'Brand']
                ],
                order: 'desc'
            },
            bar: {
                width: {
                    ratio: 1.0
                }
            },
            transition: {
                duration: 500
            },
            tooltip: {
                show: false
            },
            axis: {
                x: { show: false },
                y: { show: false },
                rotated: true,
            },
            size: { width, height },
            grid: {
                x: { show: false }
            },
            legend: {
                show: false
            }
        });

        setTimeout(() => {
            this.chart.load({
                columns: [
                    ['Null', 0],
                    ['Male', data.male],
                    ['Female', data.female],
                    ['Brand', data.brand]
                ]
            });
        }, 500);
    }

    componentDidMount() {
        this._update();
    }

    render() {
        return (
            <div id={this.id} className="chart"></div>
        );
    }
}


export default Chart;
