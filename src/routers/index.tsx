import React, { StatelessComponent } from 'react'
import {Route, Switch} from 'react-router-dom'
import {TodosContainer} from '../container/todos'

interface RoutesProps{}

export const Routes: StatelessComponent<RoutesProps> = () =>(
    <Switch>
        <Route path="/" exact={true} component={TodosContainer}/>
    </Switch>
);