import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { TodosContainer } from '../container/todos'
import { Sider } from '../container/MenuLeft'
import { Row, Col } from 'antd'

interface RoutesProps { }

export const Routes: FC<RoutesProps> = () => (
    <Row gutter={[0, 20]}  align="top" className="todos-container">
        <Col span={6}>
            <Sider />
        </Col>

        <Switch>
            <Route path="/" exact component={TodosContainer} />
            <Route path="/important" exact component={TodosContainer} />
            <Route path="/planned" exact component={TodosContainer} />
            <Route path="/:listId/:todoId?" component={TodosContainer} />
        </Switch>
    </Row>
);