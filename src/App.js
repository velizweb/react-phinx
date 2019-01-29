import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
//import { Cars } from "./cars";
import SignIn from "./components/auth";
import Dashboard from "./components/dashboard/Dashboard";

class App extends React.Component {
  componentDidMount() {
    //EJEMPLO: login
    /*const ejUsuario = "phinxlab";
    const ejClave = "abc123";
    if (Cars.user === ejUsuario && Cars.pass === ejClave) {
      //LoginOK! redirecciono a la pagina de listado!!!
      console.log("login ok!");
    } else {
      console.log("login error");
      //Genero un error:
      //throw new Error("Usuario y pass invalido")
      //y muestro el mensaje
    }

    let cars = Cars.cars;
    console.log(cars, "CARS1");*/
    //EJEMPLO: alta de de automovil
    /* Cars.insertCar({
      brand: "ford",
      year: "2020",
      madein: "usa",
      maxspeed: "111"
    });
    console.log(cars, "CARS2");*/
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
