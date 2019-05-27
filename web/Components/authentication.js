import config from '../../Gstore/config/secret';
import jwt from 'jsonwebtoken';


export default function Authenticate() {

    const token = sessionStorage.getItem('TokenKey');
    const secret = config.secret.value;

    try {
        const decoded = jwt.verify(token, secret);
        if (decoded) {



            return JSON.stringify(decoded);


        };


    } catch (err) {
        sessionStorage.clear();
        return null;
    }


    return null;

}