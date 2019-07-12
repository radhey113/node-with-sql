class UserResponse {
    constructor({ id = '', name = '', email = '', accessToken = '' }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.accessToken = accessToken;
    }
}

module.exports =  { UserResponse };