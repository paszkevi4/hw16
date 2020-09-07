import React from 'react';
// @ts-ignore
import { contacts, ContactType } from '../state/state.ts';
import { Contact } from './Contact/Contact';

interface IState {
  showMale: boolean;
  searchValue: string | null;
  contacts: Array<ContactType>;
}

class Contacts extends React.Component<{}, IState> {
  state = { showMale: false, searchValue: '', contacts: contacts };

  pushNewContact = (newContact: ContactType): void => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  inputHandler = (e: any): void => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  contToSet: ContactType = {
    firstName: 'Анонімний',
    lastName: 'Анонімус',
    phone: '+380666666666',
  };

  arrange = (arr: Array<ContactType>) => {
    let result: any = [];
    const sortByFirstName = (arr: Array<ContactType>): Array<ContactType> => {
      return arr.sort((a: ContactType, b: ContactType) => (a.firstName > b.firstName ? 1 : -1));
    };
    const showMale = (arr: Array<ContactType>): Array<ContactType> => {
      return arr.filter((contact) => contact.gender === 'male');
    };
    const showFemale = (arr: Array<ContactType>): Array<ContactType> => {
      return arr.filter((contact) => contact.gender === 'female');
    };
    const showNotGiven = (arr: Array<ContactType>): Array<ContactType> => {
      return arr.filter((contact) => !contact.gender);
    };

    this.state.showMale ? (result = [...result, ...showMale(arr)]) : (result = result);
    result = [...result, ...showFemale(arr)];
    result = [...result, ...showNotGiven(arr)];
    result = sortByFirstName(result);
    return result;
  };

  render() {
    return (
      <div>
        <input value={this.state.searchValue} onChange={this.inputHandler} />
        {this.arrange(this.state.contacts).map((el: ContactType, i: number) => {
          return <Contact key={i} {...el} />;
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
