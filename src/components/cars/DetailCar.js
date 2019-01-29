import React from "react";
import { Modal } from "antd";

const DetailCar = props => {
  const { visible, onCancel, onOk, car } = props;

  return (
    <Modal
      visible={visible}
      title="Detalle del vehiculo"
      onCancel={onCancel}
      onOk={onOk}
      style={{ top: -10 }}
    >
      <p>
        <strong>Marca:</strong> {car.brand}
      </p>
      <p>
        <strong>Año fabrica:</strong> {car.anio}
      </p>
      <p>
        <strong>Origen:</strong> {car.madein}
      </p>
      <p>
        <strong>Velocidad máxima:</strong> {car.maxspeed} km/h
      </p>
      <p>
        <strong>Estado:</strong>
        {car.statu == 1 ? " Activo" : " Desactivado"}
      </p>
      <p>
        <strong>Descripción:</strong> {car.descrip}
      </p>
      <p>
        <strong>Colores:</strong> {car.color}
      </p>
      <p>
        <strong>Cantidad puertas:</strong>
        {car.quantity_doors}
      </p>
    </Modal>
  );
};

export default DetailCar;
