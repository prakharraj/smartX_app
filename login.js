import LoginScreen from "react-native-login-screen";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import { authentication } from "./firebase";
import { useState } from "react";
 
const LoginPage = ({navigation}) => {

  ///const [email, setEmail] = useState(""); 
  //const [password, setPassword] = useState("");
  let username = '';
  let pass = '';
  const [loggedIn, setLoggedIn] = useState(false);

  const auth = getAuth();

  const handleLogin= () => {
    console.log(" handleLogin----- "+loggedIn+username);
    signInWithEmailAndPassword(authentication, username, pass)
    .then((userCredential) => {
      //user = userCredential.user;
       setLoggedIn(true);
       console.log(" handleLogin success----- "+username);
       navigation.navigate('Home',{username: username.split('@')[0], password: ""})
    })
    .catch(error => {
      setLoggedIn(false);
      console.log(" handleLogin fail----- "+error+error.message);
      alert(error.message)})
  };

  return (
    <LoginScreen
      disableSignup="true"
      emailPlaceholder="Username"
      disableSocialButtons="true"
      logoImageSource={require("./assets/icon.png")}
      onEmailChange={(email)=>username=email}
      onPasswordChange={password=>pass=password}
      onLoginPress={() => {
        console.log(" before----- "+username+pass);
        handleLogin();
        console.log(" after----- "+loggedIn+username+pass);
      }}
    />
  );
};

export default LoginPage;
