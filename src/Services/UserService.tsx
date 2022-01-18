import User from "../Models/User";
import axios from 'axios';
import appSettings from "../appSettings.json"

export default class UserService {

    public login(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            axios.post(appSettings.ServerGateway + "Users/authenticate", user)
                .then((res: any) => {
                    if (res.data.message == "") { 
                        reject("Invalid Credentials");
                    }

                    var user = new User();
                    user.id = res.data.message.id;
                    user.firstName = res.data.message.firstName;
                    user.photoPath = res.data.message.photoPath;
                    user.birthDate = res.data.message.birthDate;
                    user.address = res.data.message.address;
                    user.isOwner = res.data.message.isOwner;
                    user.role = res.data.message.role;
                    user.token = res.data.message.token;
                    user.username = res.data.username;
                    user.password = res.data.password;
                    resolve(user);
                }).
                catch(err => {
                    reject(err);
                });
        });
    }

    public signUp(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            axios.post(appSettings.ServerGateway + "Users/Register", user)
                .then((res: any) => {
                    if (!res.data.success) { 
                        reject(res.data.message);
                    }

                    resolve(res.data.message);
                }).
                catch(err => {
                    reject(err);
                });
        });
    }
}