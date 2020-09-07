import React from 'react';
import './contact.sass';

//@ts-ignore
import { ContactType } from '../state/state.ts';

export const Contact: React.FC<ContactType> = ({ firstName, lastName, phone, gender }) => {
  return (
    <div className="contact">
      <div className="contact-avatar">
        <div className="contact-avatar__inner">
          <p>{firstName.slice(0, 1)}</p>
        </div>
      </div>

      <div className="contact-name">{`${firstName} ${lastName}`}</div>
      <div className="contact-phone">{phone}</div>
    </div>
  );
};
