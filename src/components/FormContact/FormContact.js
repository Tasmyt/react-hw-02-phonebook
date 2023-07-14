import { Component } from "react";
import { Form, Lable, Input, Button } from "./FormContact.styled";
export class FormContact extends Component {
    state = {
        name: '',
        number: '',
    }
    InputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({[name]: value});
    }

    ResetInput = e => {
        e.preventDefault();  
        this.props.onAddContact(this.state);
        this.setState({name: '', number: ''});
    }
    render() {
        const { name, number } = this.state;
    return (
      <Form onSubmit={this.ResetInput}>
        <Lable> Name
            <Input
                type="text"
                name="name"
                value={name}
                onChange={this.InputChange}
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </Lable>
        
        <Lable>Number
            <Input
                type="tel"
                name="number"
                value={number}
                onChange={this.InputChange}
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </Lable>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}