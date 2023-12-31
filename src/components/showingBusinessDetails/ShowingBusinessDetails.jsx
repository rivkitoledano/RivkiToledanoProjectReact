import { useState } from "react";
import { observable, makeObservable, action, computed } from 'mobx';
import { observer } from 'mobx-react';
import BusinessServices from "../../stores/businessServices";
import './ShowingBusinessDetails.css';
import FormBusinessData from "../formBusinessData/FormBusinessData";
import { useEffect } from "react";
const ShowingBusinessDetails = observer(() => {

  useEffect(() => {
    BusinessServices.initialBusinessData();
  }, []);

  return (
    <div className="flex-container" >
      <div className="logo-container">
        <img className="logo-image" src={BusinessServices.business.logo} alt="Logo" />

      </div>
      <div className="details-container">
        <h1 className="business-name">{BusinessServices.business.name}</h1>

        <div className="business-owner">{BusinessServices.business.owner}</div>
        <p className="business-description">{BusinessServices.business.description}</p>
        <h2 className="business-address">{BusinessServices.business.address}</h2>
        <h3 className="business-phone">{BusinessServices.business.phone}</h3>
        <div className="business-phone">{BusinessServices.business.email}</div>

      </div>
      <div className="butAdd" >
        {BusinessServices.isLogin ? <FormBusinessData></FormBusinessData> : <></>}
      </div>

    </div>

  );
});

export default ShowingBusinessDetails;
