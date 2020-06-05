import React, { FC } from 'react';
import { Col, Form, Input } from 'antd';
import { TagsOutlined } from '@ant-design/icons';

interface Props{
    setForm(dato:string):void
}

export const FormInput:FC<Props> = ({setForm}) => (
  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
    <Form.Item label="Title">
      <Input
        prefix={
          <TagsOutlined /> // Icon
        }
        onChange={e => {
          setForm(e.target.value);
        }}
      />
    </Form.Item>
  </Col>
);