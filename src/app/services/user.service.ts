import { User } from '../models/User.models';
import { Subject } from 'rxjs';

export class Userservice {
    private users: User[] = [
        {
            firstname: 'Yvan',
            lastname: 'Yanova',
            email: 'jijinoubicier@jngconsulting.com',
            drinkpreference: "Pamplemousse",
            hobbies: ['coder', 'lire']
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}