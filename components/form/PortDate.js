import moment from "moment";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormGroup, Label } from "reactstrap";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    debugger;
    const formattedDate = date.format();
    this.setState({
      dateValue: date
    });
  }

  render() {
    const { label } = this.props;
    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          <DatePicker
            selected={this.state.dateValue}
            onChange={this.handleChange}
            pickNextMonth
            showMonthDropdown
            showYearDropdown
            maxDate={moment()}
            dropdownMode="select"
          />
        </div>
      </FormGroup>
    );
  }
}
