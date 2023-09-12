import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Button, Form } from './AddContactForm.styled';

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  InputChange = event => {
    if (event.currentTarget.name === 'name') {
      this.setState({ name: event.currentTarget.value });
    } else if (event.currentTarget.name === 'number') {
      this.setState({ number: event.currentTarget.value });
    }
  };

  SubmitHandle = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.AddContact(name, number, nanoid());
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form autoComplete="off" onSubmit={this.SubmitHandle}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.InputChange}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            value={this.state.number}
            onChange={this.InputChange}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
export default AddContactForm;
