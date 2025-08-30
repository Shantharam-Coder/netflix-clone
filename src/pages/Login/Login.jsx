import react, {useState} from "react";
import './Login.css';
import logo from '../../assets/logo.png';
import {login , signup} from "../../firebase";

const Login = () => {
    const [formstate,setformstate] = useState('Sign Up');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user_auth = async (event) => {
        event.preventDefault();
        try {
            if (formstate === "Sign In") {
                await login(email, password);
            } else {
                await signup(name, email, password);
            }

            // Clear inputs after success
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={"login"}>
            <img src={logo} className="login-logo" alt="logo" />
            <div className={"login-form"}>
                <h1>{formstate}</h1>
                <form autoComplete="off">
                    {formstate === 'Sign In' ? <></> :<input type={"text"} placeholder={"Enter your name"} value={name}
                       onChange={(e) => setName(e.target.value)} />}
                    <input type={"text"} placeholder={"Enter your email"} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete={"off"} />
                    <input type={"password"} placeholder={"Enter your password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={user_auth} type={'submit'}>{formstate}</button>
                    <div className={"form-help"}>
                        <div className={"remember"}>
                            <input type={"checkbox"}/>
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <p>Need help?</p>
                    </div>
                </form>
                <div className={"form-switch"}>
                    {formstate === 'Sign In' ? <p>New to Netflix?<span onClick={() => {
                            setformstate("Sign Up");
                            setName("");
                            setEmail("");
                            setPassword("");
                        }}>Sign Up Now</span></p> :
                        <p>Already have account?<span onClick={() => {
                            setformstate("Sign In");
                            setName("");
                            setEmail("");
                            setPassword("");
                        }}>Sign In Now</span></p> }
                </div>
            </div>
        </div>
    )
}
export default Login;