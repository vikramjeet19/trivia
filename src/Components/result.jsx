import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './Display/display.css'

class Result  extends Component {
  
    render() {
        console.log(this.props)      
        return (<div className='main-section'>
            <div className='question'>
                <div className='chart'>
                    <Bar
                        height={30}
                        width={100}
                        data={this.props.updatedData}
                        options={{
                            title: {
                                display: true,
                                text: 'Result',
                                fontSize: 25
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Marks Scored'
                                    }
                                }],

                            }
                        }} />
                </div>
        
            </div>
        </div>)

    }
}

export default Result;