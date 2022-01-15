import User from "../Models/User";
import UserService from "../Services/UserService";

export default class UserUseCase {
    public login(user:User): Promise<User> {
        return new Promise((resolve, reject) => {
            new UserService().login(user).then((result) =>{
                resolve(result);
            }).
            catch(err => {
                reject(err);
            });;
        });
    }
  }