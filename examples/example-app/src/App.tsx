import React from 'react';
import './App.css';
import {Button, Hello} from "my-react-package";

function App() {
    return (
        <div className="App">
            <Hello name={"datpd"}/>
            <Button>
                datpd
            </Button>
        </div>
    );
}

export default App;
