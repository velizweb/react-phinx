import React from "react";
import { Modal, Form, Input, Select } from "antd";

const { TextArea } = Input;
const Option = Select.Option;

const CarForm = Form.create({ name: "form_in_modal" })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
          style={{ top: -10 }}
        >
          <Form layout="vertical">
            <Form.Item label="Marca">
              {getFieldDecorator("brand", {
                rules: [
                  {
                    required: true,
                    message: "Por favor ingrese la marca!"
                  }
                ]
              })(<Input placeholder="Marca" />)}
            </Form.Item>
            <Form.Item label="Año">
              {getFieldDecorator("year", {
                rules: [
                  {
                    required: true,
                    message: "Por favor ingrese el año!"
                  }
                ]
              })(<Input type="number" placeholder="Año" />)}
            </Form.Item>
            <Form.Item label="País origen">
              {getFieldDecorator("madein", {
                rules: [
                  {
                    required: true,
                    message: "Por favor ingrese el país origen!"
                  }
                ]
              })(<Input placeholder="País origen" />)}
            </Form.Item>
            <Form.Item label="Velocidad máxima">
              {getFieldDecorator("maxspeed", {
                rules: [
                  {
                    required: true,
                    message: "Por favor ingrese el velocidad máxima!"
                  }
                ]
              })(<Input type="number" placeholder="Velocidad máxima" />)}
            </Form.Item>
            <Form.Item label="Descripción">
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: true,
                    message: "Por favor ingrese la descripción!"
                  }
                ]
              })(<TextArea placeholder="Ingrese descripción" />)}
            </Form.Item>
            <Form.Item label="Cantidad de puertas">
              {getFieldDecorator("quantity_doors", {
                rules: [
                  {
                    required: true,
                    message: "Por favor ingrese cantidad de puertas!"
                  }
                ]
              })(<Input type="number" placeholder="Cantidad de puertas" />)}
            </Form.Item>
            <Form.Item label="Colores">
              {getFieldDecorator("colors", {
                rules: [
                  {
                    required: true,
                    message: "Por favor indique el color!"
                  }
                ]
              })(
                <Select>
                  <Option value="Blanco">Blanco</Option>
                  <Option value="Negreo">Negro</Option>
                  <Option value="Rojo">Rojo</Option>
                  <Option value="Azul">Azul</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Estado">
              {getFieldDecorator("state", {
                rules: [
                  {
                    required: true,
                    message: "Por favor indique un estado!"
                  }
                ]
              })(
                <Select>
                  <Option value="1">Activo</Option>
                  <Option value="0">Desactivado</Option>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export default CarForm;
