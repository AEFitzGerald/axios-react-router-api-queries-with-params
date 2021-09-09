import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    return (
        
        <BrowserRouter>
            <div className="App d-flex flex-column mt-5">
                <h1 className="display-4 mx-auto">Star Wars Query</h1>
                <Form/>
                <Switch>
                    <Route exact path ="/:category/:id">
                    <Display/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>    
    );
}

export default App;
