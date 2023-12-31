
import './SingleAppointment.css'
import MeetingStore from '../../stores/managementOfMeetings.js';
import { observer } from 'mobx-react';

const SingleAppointment = observer(({ i }) => {
  const getMeetingColor = (dateTime) => {
    const today = new Date();
    const meetingDate = new Date(dateTime);

    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays < 0)
      return 'non'
    else
      if (diffDays === 1) {
        return 'red'; // היום
      } else if (diffDays <= 7) {
        return 'orange'; //השבוע
      }
      else if (diffDays >= 7) {
        return 'green'; // עתיד

      }

  };

  return (
    <>
      <div className={`SingleMeeting-date ${getMeetingColor(MeetingStore.meetingsList[i].dateTime)}`}>
        <div className='single'>
          <div className='card'>
            <h2 className='name'>
              {MeetingStore.meetingsList[i].serviceName}</h2>
            <div>שם:     {MeetingStore.meetingsList[i].clientName}</div>
            <div>פלאפון: {MeetingStore.meetingsList[i].clientPhone}</div>
            <div>אימייל: {MeetingStore.meetingsList[i].clientEmail}</div>
            <div >שעה:
              {MeetingStore.meetingsList[i].dateTime}</div>
          </div>
        </div>
      </div>
    </>
  )
})

export default SingleAppointment;