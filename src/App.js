import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Form from "./components/form/Form.jsx";
import { useState, useEffect } from "react";
import { useLocation, Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./components/detail/Detail.jsx";
import Favorites from "./components/Favorites/Favorites";

function App() {

  //defino el estado characters, el cual sera un array vacio donde se iran almacenando los personajes,
  //(será un arreglo de objetos)

  const [characters, setCharacters] = useState([]);
  //console.log(characters)

  //el codigo de abajo es parte del ejercicio 5 de forms para simular una autenticacion de un usuario por medio de un correo y una contraseña y usando la funcion useNavigate para dirigir al usuario hacia /home

  const [access,setAccess]=useState([]);
  const username = "oscar@tautenet.com"
  const password = "Oscar1234"
  const navigate = useNavigate()

  function login (userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
    else{
      alert("Usuario o contraseña incorrecta")
    }
 }

    // de la siguiente forma uso el hook de useLocation, como es un objeto debo traer la propiedad location
    // para este caso que quiero renderizar la nav en todo momento excepto en la pagina de login

    const location = useLocation();

  //esta funcion de abajo es un llamado a una API mediante promesas, como aun no estudiamos promesas sino hasta el m3, no es
  //obligatorio entender al cien la parte de abajo

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  // funcion onClose, que cierra la tarjeta al momento de dar clic en x
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  // Esto hara que no nos deje navegar por la aplicación, al menos que ingresemos la información correcta
  useEffect(() => {
    !access && navigate('/');
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [access]);

  //aqui abajo viene lo que se renderizará

  return (
    <div className="App" style={{ padding: "25px" }}>

      {/* con el useLocation pregunto,si la ruta es diferente a “/” entonces && (operador logico)
      renderiza la barra de navegación nav */}

      {/* se renderiza el componente Nav y se le pasa la funcion onSearch como props */}
     
      <div>{location.pathname !== "/" && <Nav onSearch={onSearch} />}</div>
     
      {/* defino las rutas y el componente que se renderizara segun las rutas */}

      <Routes>

        <Route path="/" element={<Form login={login} />} />
        
        <Route
          path="/home"
          element={
            <div>
        
              {/* se renderiza el componente Cards y se le pasa el arreglo characters ademas de la funcion onClose como props */}

              <Cards characters={characters} onClose={onClose} />
            </div>
          }
        />
        {
        /*
        Respecto al componente `<Detail />`, que es el siguiente
        Su ruta recibirá el parámetro **detailId**
        el argumento que recibe viene del componente Card (<Link to={`/detail/${props.id}`}></Link>) 
        */
        }

        <Route path="/detail/:detailId" element={<Detail />} />


        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        
      </Routes>
    </div>
  );
}

export default App;
