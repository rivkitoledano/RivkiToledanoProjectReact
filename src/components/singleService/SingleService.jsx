import React from "react";
import BusinessServices from '../../stores/businessServices.js'
import { useOutletContext } from "react-router-dom";
import { observer } from "mobx-react";
import MeetingPopup from '../meetingPopup/MeetingPopup.jsx';
import "./SingleService.css";
import { useEffect } from "react";
import MeetingStore from '../../stores/managementOfMeetings.js'
const SingleService = observer(() => {
  const serviceId = useOutletContext()|0;
  const serv = BusinessServices.businessServicesList.find(
    (serv) => serv.serviceId === String(serviceId)
  );
  useEffect(() => {
    MeetingStore.initialMeeting();
  },[])
  return (
    <>
      <div className="singleservicediv">
        <div className="details">
          {serv && <h2>{serv.name}</h2>}
          {serv && <div>{serv.serviceDescription}</div>}
          {serv && <div>מחיר: {serv.servicePrice}</div>}

        <div className="addmeet">
        <MeetingPopup servNum={serviceId}></MeetingPopup>

        </div>
        </div>

        <div className="image">
            {serv && <img className="oneimage" src={serv.serviceImage} alt="Service Image" />}
          </div>
      </div>

    </>
  )
}
)
export default SingleService