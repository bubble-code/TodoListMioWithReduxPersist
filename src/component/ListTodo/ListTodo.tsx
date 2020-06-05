import React from 'react'
import { connect } from 'react-redux'
import { Datas } from '../../utils/Interfaces/Interface.d';
import { Row, Col, Table } from 'antd';
import { FORM_COLUMNS } from '../../utils/constants/FORM_COLUMN';
import TodoForm from '../Form/Form.Component'

const mapStateToProps = (state:Datas[])=>({
    data: state
});

type ToggleProps = ReturnType<typeof mapStateToProps>;

const Toggle:React.FC<ToggleProps> = ({data}) =>(
   <>
   <Row typeof='flex' justify='center'>
       <Col xs={24} sm={24} md={24} lg={12} xl={12}>
       <Table dataSource={data} columns={FORM_COLUMNS} />
       </Col>
   </Row>
   <Row typeof="flex" justify="center">
   <Col xs={24} sm={24} md={24} lg={12} xl={12}>
     <TodoForm />
   </Col>
 </Row>
 </>
)
export default connect(mapStateToProps)(Toggle)