declare namespace Cypress {
    interface Chainable<Subject = any> {
        login(userData?: userData) : Chainable<Subject>;
    }
    interface userData{
        username: string;
        password: string;
    }
}
