
import React from 'react';
import { observer } from 'mobx-react';
import BusinessServices from '../../stores/businessServices';
import './ServiceBusinessList.css';
import ServiceInAdmin from '../serviceInAdmin/ServiceInAdmin';
import FormAddService from '../formAddService/FormAddService';
import { useEffect } from 'react';
const ServiceBusinessList = observer(() => {
  // useEffect(() => {
  //   BusinessServices.initialService();
  // }, [])
  return (
    <>
    <div className='addService'>
      <FormAddService></FormAddService>
      </div>
      <div className="container">
        {BusinessServices.businessServicesList.map((_, ind) => <ServiceInAdmin key={ind} i={ind}></ServiceInAdmin>)}
      </div>
    </>
  );
});

export default ServiceBusinessList;
//
