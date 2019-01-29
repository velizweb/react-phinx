import React, { Component } from "react";
import { Table, Row, Col, Modal, Icon, Tooltip, Button, message } from "antd";

import { connect } from "react-redux";
import {
  deleteCar,
  createCar,
  activateCar,
  deactivateCar,
  fetch
} from "../../store/actions/carActions";
import CarForm from "./CarForm";
import DetailCar from "./DetailCar";
const confirm = Modal.confirm;

class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCreate: false,
      modalDetail: false,
      detail: "",
      loading: false
    };
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  showModalCreate = () => {
    this.setState({
      modalCreate: true
    });
  };

  showModalDetail = record => {
    this.setState({
      modalDetail: true,
      detail: record
    });
  };

  showDeleteConfirm = record => {
    const { deleteCar } = this.props;
    confirm({
      title: "Usted está seguro de eliminar el vehiculo?",
      content: record.brand,
      onOk() {
        message.loading("Eliminando vehiculo..", 2.5).then(() => {
          deleteCar(record);
          message.success("Vehiculo eliminado", 2.5);
        });
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  handleOk = () => {
    this.setState({
      modalDetail: false
    });
  };

  handleCreate = () => {
    const { createCar } = this.props;
    const form = this.formRef.props.form;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      const car = {
        brand: form.getFieldValue("brand"),
        year: form.getFieldValue("year"),
        madein: form.getFieldValue("madein"),
        maxspeed: form.getFieldValue("maxspeed"),
        state: form.getFieldValue("state"),
        description: form.getFieldValue("description"),
        colors: form.getFieldValue("colors"),
        quantity_doors: form.getFieldValue("quantity_doors")
      };

      createCar(car);

      form.resetFields();
      this.setState({ modalCreate: false });
    });
  };

  handleDeactivate = record => {
    const { deactivateCar } = this.props;
    message.loading("Desactivando vehiculo..", 2.5).then(() => {
      deactivateCar(record);
      message.success("Vehiculo desactivado", 2.5);
    });
  };

  handleActivate = record => {
    const { activateCar } = this.props;
    message.loading("Activando vehiculo..", 2.5).then(() => {
      activateCar(record);
      message.success("Vehiculo activado", 2.5);
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleCancel = () => {
    this.setState({
      modalCreate: false,
      modalDetail: false
    });
  };

  handleColumns = () => {
    return [
      {
        title: "Brand",
        dataIndex: "brand",
        sorter: (a, b) => a.brand.length - b.brand.length,
        sortDirections: ["descend"]
      },
      {
        title: "Year",
        dataIndex: "anio",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.year - b.year
      },
      {
        title: "Made In",
        dataIndex: "madein",
        sorter: (a, b) => a.madein.length - b.madein.length,
        sortDirections: ["descend", "ascend"]
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <Tooltip placement="top" title={"Activar"}>
              <Button
                type="primary"
                disabled={record.statu == 1}
                shape="circle"
                icon="check"
                style={{ marginRight: 10 }}
                onClick={() => this.handleActivate(record)}
              />
            </Tooltip>
            <Tooltip placement="top" title={"Desactivar"}>
              <Button
                type="danger"
                disabled={record.statu == 0}
                shape="circle"
                icon="close"
                style={{ marginRight: 10 }}
                onClick={() => this.handleDeactivate(record)}
              />
            </Tooltip>
            <Tooltip placement="top" title={"Detalle"}>
              <Button
                type="default"
                onClick={() => this.showModalDetail(record)}
                shape="circle"
                icon="eye"
                style={{ marginRight: 10 }}
              />
            </Tooltip>
            <Tooltip placement="top" title={"Eliminar"}>
              <Button
                type="danger"
                onClick={() => this.showDeleteConfirm(record)}
                shape="circle"
                icon="delete"
              />
            </Tooltip>
          </span>
        )
      }
    ];
  };

  render() {
    const { cars } = this.props;
    return (
      <div>
        <Row style={{ fontWeight: "bold", padding: 10 }}>
          <Col md={{ span: 4 }}>Listado de Vehiculos</Col>
          <Col md={{ span: 2, offset: 17 }}>
            <Button type="primary" onClick={() => this.showModalCreate()}>
              <Icon type="plus" />
              Crear Vehiculo
            </Button>
          </Col>
        </Row>
        <Table columns={this.handleColumns()} dataSource={cars.cars} />
        <CarForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.modalCreate}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />

        <DetailCar
          car={this.state.detail}
          visible={this.state.modalDetail}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetch()),
    createCar: car => dispatch(createCar(car)),
    activateCar: car => dispatch(activateCar(car)),
    deactivateCar: car => dispatch(deactivateCar(car)),
    deleteCar: car => dispatch(deleteCar(car))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarList);
