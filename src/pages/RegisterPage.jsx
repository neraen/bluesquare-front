import React, {useState} from "react";
import Field from "../components/forms/Field";
import {Link} from "react-router-dom";
import UsersAPI from "../services/UsersAPI";

const RegisterPage = ({history}) => {

    const [user, setUser] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget
        setUser({...user, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const apiErrors = {};
        if(user.password !== user.passwordConfirm){
            apiErrors.passwordConfirm = "Les deux mots de passes ne sont pas identiques";
            setErrors(apiErrors);
            return;
        }

        try {
            const data = await UsersAPI.register(user);
            setErrors({});
            history.replace("/connexion");
        }catch(error){

        }
    }

    return (<>
        <h1>Inscription</h1>
        <form onSubmit={handleSubmit}>
            <Field name="email" label="Email" placeholder="Votre email" onChange={handleChange} value={user.email} error={errors.email} type="email"/>
            <Field name="password" label="Mot de passe" placeholder="Votre mot de passe" onChange={handleChange} value={user.password} error={errors.password} type="password"/>
            <Field name="passwordConfirm" label="Confirmation du mot de passe" placeholder="Repetez le mot de passe" onChange={handleChange} value={user.passwordConfirm} error={errors.passwordConfirm} type="password"/>

            <div className="form-group">
                <button type="submit" className="btn btn-success">Inscription</button>
                <Link to='/connexion' className="btn btn-link">J'ai déjà un compte</Link>
            </div>
        </form>
    </>)
}

export default RegisterPage