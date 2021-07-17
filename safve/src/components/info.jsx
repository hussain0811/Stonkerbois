import React , {Component} from 'react';
import {  Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from 'react-datepicker'

class Info extends Component {
	constructor(props) {
		super(props)

		this.state = {
			amount: '',
			comments: '',
			topic: 'groccery',
            date: undefined,
		}
	}

	handleAmountChange = event => {
		this.setState({
			amount: event.target.value
		})
	}

	handleCommentsChange = event => {
		this.setState({
			comments: event.target.value
		})
	}

	handleTopicChange = event => {
		this.setState({
			topic: event.target.value
		})
	}
    // handleDateChange = event => {
	// 	this.setState({
	// 		topic: event.target.value
	// 	})
	// }


	handleSubmit = event => {
		alert(`${this.state.amount} ${this.state.comments} ${this.state.topic}`)
		event.preventDefault()
	}

	render() {
		const { amount, comments, topic ,date} = this.state
		return (
            <div>
                <div className="col-12 col-md-5 m-1">
                <Card color='secondary'>
			<Form onSubmit={this.handleSubmit}>
				<FormGroup>
					<Label>Amount</Label>
					<Input
						type="text"
						value={amount}
						onChange={this.handleAmountChange}
					/>
				</FormGroup>

				<FormGroup>
					<Label>Topic</Label>
					<Input type="select" value={topic} onChange={this.handleTopicChange}>
						<option value="groccery">Groccery</option>
						<option value="shopping">Shopping</option>
						<option value="bills">Bills</option>
                        <option value="food">Food</option>
						<option value="drinks">Drinks</option>
                    </Input>
				</FormGroup>
                <FormGroup>
                    
                    {/* fix DATE */}


                {/* <DatePicker selected = {date} onChange={this.handleDateChange} />  */}
                </FormGroup>
                <FormGroup>
					<Label>Comments</Label>
					<Input type='textarea'
						value={comments}
						onChange={this.handleCommentsChange}
					/>
				</FormGroup>
				<Button color="success" type="submit">Submit</Button>
			</Form>
            </Card>
            </div>
            </div>
		)
	}
}

export default Info;