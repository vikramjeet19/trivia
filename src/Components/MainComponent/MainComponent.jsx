import React, { Component } from "react";
import Display from '../Display/display';
import './MainComponent.css';
import axios from 'axios';
import Spinner from '../Loder';
import Result from '../result';



class MainComponent extends Component {
    state = {
        step: 0,
        questions: [],
        loading: true,
        result: false,
        rightAnswer: 0,
        updatedData:null

    }
    async componentDidMount() {
        this.setState({ loading: true });
        try {
            const { data: { results } } = await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
            let random = 0;
            results.map(q => {
                random = Math.floor(Math.random() * 4)
                if (q.incorrect_answers.length === 4) {
                    return q;
                }
                q.incorrect_answers.splice(random, 0, q.correct_answer);
                return q;
            });
            this.setState({ questions: results, loading: false });
        } catch (error) {
            console.log({ error });
        }
    }

    incrementHandler = (e) => {
        let count = this.state.step;
        let res = this.state.result;
        if (e === 'correct') {
            let rightCount = this.state.rightAnswer;
            rightCount = rightCount + 1;
            this.setState({ rightAnswer: rightCount });

        }
        if (count <= 8) {
            count = count + 1;
            this.setState({ step: count, result: res });
        }
        else {
      
            let data={labels: ['Right', 'Wrong'],
            datasets: [
                {
                    label: 'Right',
                    data: [this.state.rightAnswer, 10-this.state.rightAnswer, 10],
                    backgroundColor: [
                        
                        'rgba(0, 255, 0, 0.3)',
                        'rgba(255, 0, 0, 0.3)'
                    ],
                }]}

            this.setState({ result: true ,updatedData:data})
        }

    }
    render() {

        if (this.state.result) {
            return <Result 
            rightAnswer={this.state.rightAnswer}
            updatedData={this.state.updatedData}/>
        }

        return (
            <div>
                {this.state.loading ? <Spinner /> : (
                    <Display
                        question={this.state.questions[this.state.step]}
                        incrementHandler={this.incrementHandler}
                    />
                )}

            </div>
        )
    }
}
export default MainComponent;