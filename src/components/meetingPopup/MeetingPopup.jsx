import { useEffect, useState } from "react";
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import MeetingStore from '../../stores/managementOfMeetings.js';
import BusinessServices from "../../stores/businessServices.js";
import './MeetingPopup.css'
import Swal from 'sweetalert2'
import X from '../../assets/images/X.gif'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const MeetingPopup = observer(({ servNum = 0 }) => {
  useEffect(() => {
    BusinessServices.initialService();
    MeetingStore.initialMeeting();
  }, [])
  const serv = BusinessServices.businessServicesList.find(
    (serv) => serv.serviceId === String(servNum)
  );
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    serviceName: serv?.name,
    serviceDescription: serv?.serviceDescription,
    servicePrice: serv?.servicePrice,
    dateTime: '',
    clientName: '',
    clientPhone: '',
    clientEmail: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDateTimeChange = (dateTime) => {
    const formattedDateTime = dateTime.format('YYYY-MM-DDTHH:mm:ss');
    setFormData((prevData) => ({
      ...prevData,
      dateTime: formattedDateTime,
    }));
    handleInputChange({ target: { name: 'dateTime', value: formattedDateTime } });
  };
  const handleSubmit = (event) => {
    if (formData.clientName !== '' && formData.clientEmail !== '' && formData.clientPhone !== '' && formData.dateTime !== '') {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          event.preventDefault();
          MeetingStore.addMeeting(formData);

        } else {
          Swal.fire("data not avalable", "", "info");
        }
      });


    }
    else {
      Swal.fire({
        title: "Error!",
        text: "required filds",
        imageUrl: X,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "image"
      });

    }

    // Reset the form after submitting
    setFormData({
      serviceName: '',
      serviceDescription: 'מה זה הדמיות מוצר הדמיות מוצר הן הדמיות ממוחשבות, אשר משמשות לצורך בחינת היתכנות, בדיקת השוק הרלוונטי למוצר או הצגת הפוטנציאל הגלום בו למען מטרת גיוס משקיעים. יתרון ההדמיות הוא יכולתן לבחון את המוצר כאילו היה קיים מכל צדדיו ותוכנו. בסרטונים אף ניתן להציג את הפרופורציות, החומרים שממנו הוא עשוי, ואופן השימוש בו ואת מרכיבי המוצר בעת פעולה. בעבר, מי שרצו להציג רעיון או מוצר כלשהם באופן מוחשי היו צריכים לפנות למודליסט, צייר או פסל, לתאר את הרעיון ולקוות שיצליח להוציא תחת ידיו דבר מה שיהיה די דומה. היום, לעומת זאת, יצירת ההדמיות נעשית על ידי השענות על תוכנות ייעודיות ומתקדמות למידול והדמיות תלת מימד. מה שמיוחד בתוכנות האלה זזה שהן מאפשרות דיוק ופירוט מקיף ברמה בלתי מתפשרת – באופן הזה, התוצאה הסופית דומה לגמרי למוצר. יתרונות להדמיית מוצר הדמיות מוצר, אשר כוללות במסגרתן גם הדמיות ריהוט, נחשבות היום בתור דרך זולה יחסית ויעילה מאד להציג מוצרים וריהוט, כאשר החלופה לכך מסתכמת בעיצוב מחדש של חדר או דירה לצד יום צילומים מורכב. מי משתמשים בהדמיית מוצר?מגוון היתרונות של הדמיית מוצרים באמצעות השימוש בתוכנות מתקדמות הוביל לכך שאנשי מקצוע מהרבה תחומים ומיני עסקים כמו יצרנים, מעצבים, חברות סטארט אפ ואדריכלים מבצעים שימוש בכלי הדמיות המוצר בשביל לבדוק היתכנות למוצר, או בשביל להציג אותו ללקוח – מדובר היום בכלי פופולרי מאד. כיצד מתבצע התהליך? למעשה, הדמיות מוצר יכולות להיות מבוצעות עוד בשלב בו מדובר ברעיון בלבד שעוד לא התגבש למוצר של ממש. לצורך מטרת ההדמיה, כל מה שצריך זה לאסוף את כל החומרים הרלוונטיים עליהם יש לבסס בסופו של דבר את ההדמיה. אפשר ליצור הדמיה מתקדמת לכל סוגי המוצרים באשר הם, גם אם מדובר בהדמיות רהיטים, אפילו אם מדובר בפריטים מאד מורכבים – כל זאת הודות לטכנולוגיות חדשניות מאד. שלבי עבודה בתור התחלה, הלקוח מוסר את כל החומרים והתוכניות שברשותו אשר בכוחם לעזור ביצירת ההדמיות – שרטוטים, תמונות, סקיצות, מדריכים ועוד. בהמשך, סטודיו לאנימציה מונפשת יוצר על ידי שימוש בתוכנות ייעודיות משוכללות את הדמיית המוצר המבוקש. לאחר אישור מצד הלקוח לצד שינויים ותיקונים, אפשר להתקדם לשלב יצירת סרטון ההדמיה המוגמר והסופי. הלקוח הוא תמיד שותף פעיל בתהליך קבלת ההחלטות השונות כאשר כל הדגשים החשובים לו מקבלים ביטוי בהדמיה. לסיכום אנחנו בסטודיו וידה יודעים ליצור מודל והדמיות מוצר לכמעט כל חומר, כאשר די לנו אך ורק בסקיצה לצד אפיון של חומרי הגמר בשביל ליצור הדמיה מציאותית למדי של המוצר, ללא צורך בייצורו או בבנייתו. לפרטים נוספים, מומלצים בחום לפנות אלינו.',
      servicePrice: '',
      dateTime: '',
      clientName: '',
      clientPhone: '',
      clientEmail: ''
    });
    setIsOpen(false);
  };



  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>לקביעת פגישה</Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>  Set a meeting</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="Form">
            <div className="PopupsInput">
              <TextField
                fullWidth
                label="client Name"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                placeholder="client Name"
              />
            </div>
            <div className="PopupsInput">

              <TextField
                fullWidth
                label="client Phone"
                name="clientPhone"
                value={formData.clientPhone}
                onChange={handleInputChange}
                placeholder="client Phone"
              />
            </div>

            <div className="PopupsInput">

              <TextField
                fullWidth
                label=" client Email"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleInputChange}
                placeholder="clientEmail"
              />
            </div>

            <div className="PopupsInput">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      variant="outlined"
                      className="inputs"
                      name="dateTime"
                      label="Meeting Date and Time"
                    />
                  )}
                  value={formData.dateTime}
                  onChange={handleDateTimeChange}
                  disablePast
                  required
                />
              </LocalizationProvider>
            </div>

          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
})

export default MeetingPopup