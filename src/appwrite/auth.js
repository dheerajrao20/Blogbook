import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);  // make an account whenever an an object is made
    }

    async createAccount({email, password, name}){      // CREATE
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({email, password});
            }else{
                return userAccount;
            }
        } catch (error){
            console.log(error);
        }
    }

    async login({email, password}){                     // LOGIN
        try{
            return await this.account.createEmailSession(email, password);
        }catch(error){
            console.log(error);
        }
    }

    async getCurrentUser() {                         // GET_CURRENT_USER
        try{
            return await this.account.get()
        }catch(error){
            console.log(error);
        }

        return null;
    }

    async logout(){                                     //LOGOUT
        try{
            await this.account.deleteSessions();
        }catch(error){
            console.log(error);
        }
    }

}

const authService = new AuthService();  // making an object

export default authService;  // exporting the object