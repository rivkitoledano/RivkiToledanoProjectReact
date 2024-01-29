import { observable, makeObservable, action, computed } from 'mobx';
import logoRT from '../assets/images/logoRT.png'
import two from '../assets/images/two.jpg'
import zero from '../assets/images/zero.jpg'
import three from '../assets/images/three.jpg'
import five from '../assets/images/five.png'
import four from '../assets/images/four.jpg'
import one from '../assets/images/one.png'
import nadlan from '../assets/images/nadlan.jpg'
import Swal from 'sweetalert2';
import all from '../assets/images/all.jpg'
import X from '../assets/images/X.gif'
const service = {
  serviceId: '',
  name: "",
  serviceDescription: '',
  servicePrice: '',
  serviceImage: ''
}
class BusinessServices {
  business = { }

  businessServicesList = [
    {
      serviceId: '0',
      name: " הדמיות מוצר",
      serviceDescription: "הדמיות מוצר הן הדמיות ממוחשבות, אשר משמשות לצורך בחינת היתכנות, בדיקת השוק הרלוונטי למוצר או הצגת הפוטנציאל הגלום בו למען מטרת גיוס משקיעים. יתרון ההדמיות הוא יכולתן לבחון את המוצר כאילו היה קיים מכל צדדיו ותוכנו. בסרטונים אף ניתן להציג את הפרופורציות, החומרים שממנו הוא עשוי, ואופן השימוש בו ואת מרכיבי המוצר בעת פעולה.  ",
      servicePrice: '2500',
      serviceImage: zero
    },
    {
      serviceId: '1',
      name: "סרטי אנימציה אדריכליים",
      serviceDescription: 'בזכות סרטי אנימציה אדריכליים, ניתן יהיה להציג את פרויקט הבניה כראוי ובאופן המדויק ביותר. השנים האחרונות הביאו עמן בשורה של ממש בתחום הנדל"ן, כאשר בערים רבות ברחבי הארץ ניתן לראות פרויקטים שונים בתהליכי בניה מתקדמים. כאשר מגיעה העת לשווק את הפרויקט או להמחיש את התכנית שלו לגורמים הרלוונטיים, רצוי להכין סרט אנימציה אדריכלי. למענה מקצועי בנושא, ניתן לפנות אל סטודיו וידה. סטודיו זה הינו צעיר ודינמי, ומורכב מצוות עובדים מוכשר, מנוסה ומקצועי.         ',
      servicePrice: '8000',
      serviceImage: three
    },
    {
      serviceId: '2',
      name: "הפקת הדמיות פנים וחוץ- פוטו ריאליסטיות",
      serviceDescription: 'הדמיות פוטוריאליסטיות אשר יוצר סטודיו וידה מתגאות ברמת גימור גבוהה כל כך, עד כי נדמה וההדמיה הינה למעשה צילום של המבנה מבפנים או מבחוץ. הסטודיו פועל תחת ניצוחו של יוסי אורנשטיין, בוגר המסלול האקדמי המכללה למנהל, בעל תואר ראשון בעיצוב פנים (B.DESIGN (INT וצלם אדריכלות, ומעניק את שירותיו המקצועיים בתחום התלת מימד, הדמיות אדריכליות, סרטוני תדמית ושיווק, זאת בהתאמה מדויקת לכל העדפות ודרישות הלקוח. באמצעות הדמיות פנים וחוץ פוטו-ריאליסטיות, ניתן יהיה לסייע בתהליך הבניה כמו גם בעיצוב הפנים.',
      servicePrice: '5000',
      serviceImage: one
    },
    {
      serviceId: '3',
      name: "מיתוג נדלן",
      serviceDescription: 'אחד השלבים העיקריים במיתוג נדלן הוא הדמיה של הנדלן עצמו. בסופו של דבר גם אם יהיה לכם לוגו יפה או אתר מרהיב, אם לא תוכלו לתת ללקוחות תמונות (או אפילו מידע מתקדם יותר) על הנכס, אתם בעצם מציעים להם לבצע קנייה עיוורת ובגלל שמדובר בסכומי כסף גבוהים מאוד, כנראה שאף אחד לא ירצה לעשות זאת. לאחר שיש לכם את התוכניות הבסיסיות, ייצרו לכם הדמיה ריאליסטית של הנכס שמאפשרת להקים לתחייה את התכנונים ההנדסיים. ',
      servicePrice: '3000',
      serviceImage: nadlan
    },

    {
      serviceId: '4',
      name: "תוכנית מכירה בדו מימד ותלת מימד ",
      serviceDescription: 'תכנית מכר דו ממדית – תכנית זו תציג את הדירה בצורה המסודרת ביותר. היתרון המשמעותי של תכנית זו יהיה באופן ההתאמה שלה לתכנית האדריכלית עצמה ולעמידה בקנה המידה של השרטוט המקורי. תכנית מכר דו ממדית יכולה להשתלב בצורה נהדרת לתצוגה על כל מדיום מודפס. תכנית מכר תלת ממדית – תכנית זו תציג את המבנה בצורה ברורה ומעניינת. היתרון המשמעותי שלה טמון בעובדה כי היא מאפשרת לכל אדם, גם במישה ואינו מתמחה בשרטוטים אדריכליים, להבין בצורה פשוטה וקלה את החלוקה של המבנה ואת המרחבים השונים בו.',
      servicePrice: '4500',
      serviceImage: four
    },
    {
      serviceId: '5',
      name: " הדמיות לצפייה במשקפי תלת מימד",
      serviceDescription: 'ביצוע הדמיות לצפייה במשקפי תלת מימד הינו שירות שמספק סטודיו וידה. מענה זה מספק סיור וירטואלי בזמן אמת – כאשר ניתן להתרשם מהנכס המדובר באופן המציאותי ביותר. בין אם אתם מתעניינים בבית פרטי או שמא מדובר בדירה בקומה גבוהה, באמצעות ההדמיה לצפייה במשקפי תלת המימד ניתן יהיה לסקור את השטח כהלכה. למענה נוסף בנושא, יש ליצור קשר עם סטודיו וידה. סטודיו זה הוקם על ידי יוסי אורנשטיין, בוגר המסלול האקדמי המכללה למנהל, ובעל תואר ראשון בעיצוב פנים B.Design (INT). כמו כן, יוסי אורנשטיין הינו צלם אדריכלות. ',
      servicePrice: '4000',
      serviceImage: five
    },
  ];
  isLogin = false;
  setIsLogin = (val) => {
    this.isLogin = val;
  }
  constructor() {
    makeObservable(this, {
      businessServicesList: observable,
      isLogin: observable,
      business: observable,
      addService: action,
      setIsLogin: action,
      initialService: action,
      setBusinessData: action,
      initialBusinessData: action,

    })
    if (this.businessServicesList.length === 6)
      this.businessServicesList.map(s => this.addService(s))
  }
  initialService = async () => {
    const response = await fetch("http://localhost:8787/services");
    const data = await response.json();
    console.log(data);
    this.businessServicesList = ([...data]);
  }
  initialBusinessData = async () => {
    const response = await fetch("http://localhost:8787/businessData");
    const data = await response.json();
    this.business = data;
  }
  setBusinessData = async (bussinessData) => {
    const response = await fetch("http://localhost:8787/businessData", {

      method: "POST",
      body: JSON.stringify(bussinessData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (response.status === 200) {
      console.log(response.status)
      Swal.fire("!succed");
      this.business = bussinessData;
      console.log(this.business)
    } else {
      Swal.fire({
        title: "Error!",
        text: "required filds",
        imageUrl: X,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "image"
      });

    
  }
  };
  addService = async (service) => {
    if (this.businessServicesList.length > 6) {
      service.serviceId = String(this.businessServicesList.length)
      service.serviceImage=all
    }
    const response = await fetch("http://localhost:8787/service", {

      method: "POST",
      body: JSON.stringify(service),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status)
    if (this.businessServicesList.length > 6)
      if (response.status === 200)
        Swal.fire("!succed");
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
    if (response.status === 200) {
      this.businessServicesList = ([...this.businessServicesList, service])
    }
  }



  
   

}
export default new BusinessServices();