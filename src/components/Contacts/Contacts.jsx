import {Component} from 'react';
// import css from './Contacts.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import {Title, Section, Container, Message} from './Contacts.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class Contacts extends Component{
    state = {
         contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }

    addContact = (e) => {
        const { contacts } = this.state;
        e.preventDefault();
        const form = e.currentTarget;
        const newContactName = form.elements.name.value;
        const newContactNumber = form.elements.number.value;

        if (contacts.find(item => item.name.toLowerCase() === newContactName.toLowerCase()))
            {
                return Notify.warning(`${newContactName} is alrady in contacts`,
                { timeout: 4000, position: 'center-top', width: '400px', fontSize: '28px' })
            };
        const newContact = { id: nanoid(), name: newContactName, number: newContactNumber, };
        this.setState(prew => ({ contacts: [...prew.contacts, newContact], }));
        form.reset();
    }

    removeContact = (e) => {
        const { contacts } = this.state;

        const deletedContact = e.target.id;
        const newContactList = contacts.filter(contact => contact.id !== deletedContact);
        this.setState({
            contacts: newContactList,
        })
    }

    findContact = (e) => {
        const serchName = e.target.value;
        this.setState({
        filter: serchName,           
        })        
    }

    filtredList = () => {
        const { contacts, filter } = this.state
        return filter ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())): '';
        
    }
    
    render() {
        const { contacts, filter } = this.state;
        console.log("this.filtredList()",  this.filtredList().length)
        console.log(contacts.length);

        return <Container>
            <Section>
                <Title>Phonebook</Title>
                <ContactForm addContact={this.addContact} />
            </Section>
            <Section>
                <Title>Contacts</Title>
                <Filter findContact={this.findContact} serchName={filter} />

                {(filter && (this.filtredList().length !== 0 
                ? <ContactList contacts={this.filtredList()} removeContact={this.removeContact} />
                : <Message>Сontact was not found</Message>)) ||
                (contacts.length === 0 ? <Message>You don't have any contact</Message>
                : <ContactList contacts={contacts} removeContact={this.removeContact}/>)
                }
            </Section>
        </Container>
        
    };
}


//    render() {
//         const { contacts, filter } = this.state;

//         return <Container>

//         <Section>
//             <Title>Phonebook</Title>
//             <ContactForm addContact={this.addContact} />
//         </Section>
//         <Section>
//             <Title>Contacts</Title>
//             <Filter findContact={this.findContact} serchName={this.filter} />
//             <ContactList contacts={contacts} filtredList={filtredList} removeContact={this.removeContact}/>
//         </Section>

//         </Container>
        