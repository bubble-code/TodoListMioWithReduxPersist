import React, { FC } from 'react';
import { Col, DatePicker, Form } from 'antd';
import moment from 'moment'

interface Props{
    setDate(date:string):void;
}

export const Calendar:FC<Props> = ({setDate}) => (
  <Col>
    <Form.Item className="CalendarLabel" label="Select a date" >
      <DatePicker onChange={(_, dateString) => setDate(dateString)} />
    </Form.Item>
  </Col>
);