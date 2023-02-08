import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar"

const App = () => {
    return (
        <div>
            <h1 className="text-center text-success"><ItemListContainer greeting={"Bienvenidos a mi tienda"}/></h1>
        <NavBar/>

        </div>
    );
};

export default App;