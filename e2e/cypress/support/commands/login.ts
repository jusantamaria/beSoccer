import {validUser} from '../constants/data_cy';
import Timeout from '../enums/timeouts';

interface UserData {
    username: string;
    password: string;
}

Cypress.Commands.add('login', (userData?) => {
    
    const user : UserData = {
        username: userData?.username || validUser.username,
        password: userData?.password || validUser.password,
    };

    cy.findByRole('link', {
        name: 'Enter',
        timeout: Timeout.SHORT,
    })
    .should('be.enabled')
    .click();

    cy.url().should('contain', 'login')

    cy.contains('div').should('contain.test', 'Log in to access')
    
    cy.get('input [placeholder="Name"]').type(user.username)

    cy.get('input [placeholder = "Password"]').type(user.password)

    cy.findByRole('link', {
        name: 'Login',
        timeout: Timeout.SHORT,
    })
    .click();

});