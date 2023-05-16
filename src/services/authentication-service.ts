export default class AuthenticationService {
    static isAuthenticated: boolean = false;

    static login(username: string, password: string) {
        const isAuthenticated = (username === 'pikachu' && password === 'pikachu');

        return new Promise(resolve => {
            setTimeout(() => {
                this.isAuthenticated = isAuthenticated;
                resolve(isAuthenticated);
            }, 500)
        })
    }
}