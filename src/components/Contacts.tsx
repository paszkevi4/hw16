import React from 'react';
// @ts-ignore
import { contacts } from '../state/state.ts';

type ContactType = {
  firstName: string;
  lastName: string;
  phone: string;
  gender?: string;
};
interface IState {
  searchValue: string | null;
  contacts: Array<ContactType>;
}

class Contacts extends React.Component<{}, IState> {
  state = { searchValue: '', contacts: contacts };

  pushNewContact = (newContact: ContactType): void => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    console.log(this.state);
  };

  inputHandler = (e): void => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  contToSet: ContactType | null = {
    firstName: 'Анонімний',
    lastName: 'Анонімус',
    phone: '+380666666666',
  };

  render() {
    return (
      <div>
        <input value={this.state.searchValue} onChange={this.inputHandler} />
        {this.state.contacts.map((el) => {
          return <div>{el.firstName}</div>;
        })}
        <button
          onClick={() => {
            this.pushNewContact(this.contToSet);
          }}>
          123
        </button>
      </div>
    );
  }
}

export default Contacts;
