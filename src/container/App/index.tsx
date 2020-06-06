import React, { StatelessComponent } from 'react'
// import {HashRouter} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Routes } from '../../routers'
import {Store} from 'redux'
import { Persistor } from 'redux-persist'

interface AppProps{
    store: Store;
    storePersistor: Persistor;
}

export const App: StatelessComponent<AppProps> = ({store, storePersistor}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loading...</div>} persistor={storePersistor}>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};  