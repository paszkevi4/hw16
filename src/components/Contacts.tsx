import React from 'react';
// @ts-ignore
import { contacts, ContactType } from '../state/state.ts';
import { Contact } from './Contact/Contact';

interface IState {
  showMale: boolean;
  showFemale: boolean;
  showNotGiven: boolean;
  searchValue: string | null;
  contacts: Array<ContactType>;
}

class Contacts extends React.Component<{}, IState> {
  state = {
    showMale: true,
    showFemale: true,
    showNotGiven: false,
    searchValue: '',
    contacts: contacts,
  };

  inputHandler = (e: any): void => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  arrange = (arr: Array<ContactType>): Array<ContactType> => {
    let result: Array<ContactType> = [];
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

    if (this.state.showMale) result = [...result, ...showMale(arr)];
    if (this.state.showFemale) result = [...result, ...showFemale(arr)];
    if (this.state.showNotGiven) result = result = [...result, ...showNotGiven(arr)];

    result = sortByFirstName(result);
    return result;
  };

  filterItself = (contact: ContactType): boolean => {
    const checkLastName = (): boolean => {
      return contact.lastName.toLowerCase().includes(this.state.searchValue.toLowerCase()) > 0;
    };
    const checkFirstName = (): boolean => {
      return contact.firstName.toLowerCase().includes(this.state.searchValue.toLowerCase()) > 0;
    };
    const checkPhone = (): boolean => {
      return contact.phone.includes(this.state.searchValue) > 0;
    };
    return checkLastName() || checkFirstName() || checkPhone();
  };

  searchFilter = (arr: Array<ContactType>): Array<ContactType> => {
    return arr.filter((contact) => {
      return this.filterItself(contact);
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.searchValue} onChange={this.inputHandler} />
        <div>
          <input
            type="checkbox"
            id="showMale"
            checked={this.state.showMale}
            onClick={() => {
              this.setState({
                showMale: !this.state.showMale,
              });
            }}
          />
          <label htmlFor="showMale">show male</label>
          <input
            type="checkbox"
            id="showFemale"
            checked={this.state.showFemale}
            onClick={() => {
              this.setState({
                showFemale: !this.state.showFemale,
              });
            }}
          />
          <label htmlFor="showFemale">show female</label>
          <input
            type="checkbox"
            id="showNotGiven"
            checked={this.state.showNotGiven}
            onClick={() => {
              this.setState({
                showNotGiven: !this.state.showNotGiven,
              });
            }}
          />
          <label htmlFor="showNotGiven">show not given</label>
        </div>
        {this.searchFilter(this.arrange(this.state.contacts)).map((el: ContactType, i: number) => {
          return <Contact key={i} {...el} />;
        })}
      </div>
    );
  }
}

export default Contacts;
