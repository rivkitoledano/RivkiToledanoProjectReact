import { observable, makeObservable, action, computed } from 'mobx';
import Swal from 'sweetalert2';

const meeting = {
    serviceName: "",
    serviceDescribtion: '',
    servicePrice: 0,
    dateTime: '',
    clientName: "",
    clientPhone: 1223456789,
    clientEmail: ""
}
class MeetingStore {
    meetingsList = [];
    constructor() {
        makeObservable(this, {
            meetingsList: observable,
            addMeeting: action,
            initialMeeting: action
        })
    }
    addMeeting = async (meeting) => {
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(meeting),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.status)
        if (response.status === 200) {
            console.log("hi")
            Swal.fire("!succed");
            this.meetingsList = ([...this.meetingsList, meeting])
        }
        else {
            console.log("by")

            Swal.fire({
                title: "!Error",
                text: " sorry, this dateTime not available",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "image"
            });
        }
    }
    initialMeeting = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();
        console.log(data);
        const sortedData = [...data].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        this.meetingsList = sortedData;

    }

}
export default new MeetingStore();