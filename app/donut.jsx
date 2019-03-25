// assets/js/index.jsx
import React from 'react';
import uuid from 'uuid/v4';
import c3 from 'c3';


class Donut extends React.Component {
    constructor(props) {
        super(props);

        // All ids must begin with a alphanumeric character
        this.id = 'donut-' + uuid();
        this._update = this._update.bind(this);
    }

    _update() {
        const data = this.props.data;
        const height = this.props.height;
        const width = this.props.width;

        this.chart = c3.generate({
            bindto: `#${this.id}`,
            data: {
                columns: [
                    ['Male', 0],
                    ['Female', 0],
                    ['Brand', 0]
                ],
                type: 'donut',
                colors: {
                    Male: '#0066CC',
                    Female: '#FF6666',
                    Brand: '#808080'
                },
                groups: [
                    ['Male', 'Female', 'Brand']
                ],
                order: null
            },
            donut: {
                width: 8,
                label: {
                    show: false
                }
            },
            transition: {
                duration: 500
            },
            tooltip: {
                show: false
            },
            size: { width, height },
            legend: {
                show: false
            }
        });

        setTimeout(() => {
            this.chart.load({
                columns: [
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
            <div id={this.id} className="donut"></div>
        );
    }
}


export default Donut;
