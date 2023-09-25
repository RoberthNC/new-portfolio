import Cryptocurrency from "../assets/img/CryptocurrencyReact.png"
import CustomerManager from "../assets/img/CustomerManagerReact.png"
import GuitarLA from "../assets/img/GuitarLANextJs.png"
import ReduxCRUD from "../assets/img/ReduxCRUD.png"
import TodoListConsole from "../assets/img/TodoListConsoleApp.png"
import WeatherConsole from "../assets/img/WeatherConsoleApp.png"

const lang = navigator.language.split('-')[0]

const projects = [
    {
        name:lang === 'es' ? "Criptomonedas React" : "Cryptocurrency React",
        img:Cryptocurrency,
        repository:"https://github.com/RoberthNC/Cotizador-Cryptomonedas-React"
    },
    {
        name:lang === 'es' ? "Administrador de Clientes React" : "Customer Manager React",
        img:CustomerManager,
        repository:"https://github.com/RoberthNC/Administrador-de-Clientes"
    },
    {
        name:"GuitarLA NextJs",
        img:GuitarLA,
        repository:"https://github.com/RoberthNC/GuitarLA-Nextjs"
    },
    {
        name:"Redux CRUD",
        img:ReduxCRUD,
        repository:"https://github.com/RoberthNC/Redux-CRUD"
    },
    {
        name:lang === 'es' ? "Consola de Tareas NodeJs" : "Todo List Console NodeJs",
        img:TodoListConsole,
        repository:"https://github.com/RoberthNC/Todo-List"
    },
    {
        name:lang === 'es' ? "Consola de Clima NodeJs" : "Weather Console NodeJs",
        img:WeatherConsole,
        repository:"https://github.com/RoberthNC/Consola-de-Clima"
    }
]

export {
    projects
}