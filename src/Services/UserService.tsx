import User from "../Models/User";
import axios from 'axios';

export default class UserService {

    public login(user:User): Promise<User> {
        return new Promise((resolve, reject) => {
            axios.post(`https://localhost:44399/Gateway/Users/authenticate`, user)
                .then((res:any) => {

                    debugger;
                    var user = new User();

                    user.id = res.data.id;
                    user.firstName = res.data.username;
                    user.photoPath = res.data.username;
                    user.birthDate = res.data.username;
                    user.address = res.data.username;
                    user.isOwner = res.data.username;
                    user.role = res.data.username;
                    user.token = res.data.token;

                    user.username = res.data.username;
                    user.password = res.data.password;
                    
                    resolve(user);
                }).
                catch(err => {
                    reject(err);
                });
        });
    }
  }