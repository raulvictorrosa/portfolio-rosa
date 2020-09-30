import moment from "moment";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, FormGroup, Label } from "reactstrap";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: moment(),
      isHidden: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.toogleDate = this.toogleDate.bind(this);
  }

  handleChange(date) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    this.setState({
      dateValue: date
    });

    setFieldValue(name, date, true);
    setFieldTouched(name, true, true);
  }

  toogleDate() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    const {
      canBeDisabled,
      label,
      field,
      form: { touched, errors }
    } = this.props;
    const { isHidden } = this.state;

    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          {!isHidden && (
            <DatePicker
              selected={this.state.dateValue}
              onChange={this.handleChange}
              pickNextMonth
              showMonthDropdown
              showYearDropdown
              maxDate={moment()}
              dropdownMode="select"
            />
          )}
        </div>
        {canBeDisabled && !isHidden && (
          <Button onClick={() => this.toogleDate()}>Still working here</Button>
        )}

        {canBeDisabled && isHidden}

        {touched[field.name] && errors[field.name] && (
          <div className="error">{errors[field.name]}</div>
        )}
      </FormGroup>
    );
  }
}
