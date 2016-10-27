/**
 * Created by faris on 10/27/2016.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemUserService implements InMemoryDbService {
    createDb() {
        let createuser = [
            {
                id:1,
                name:"john",
                email:"john@gmail.com"
            }
        ];
        console.log("going to create db");
        return {createuser};
    }
}