
import BusinessServices from '../../stores/businessServices'
import './ServiceInAdmin.css'
import * as React from 'react';
import { observer } from 'mobx-react';
const ServiceInAdmin = observer(({ i }) => {
    
    return (
        <>
            <div className='single'>
                <div className='cardCard'>
                    <h2 className='name'>
                          {BusinessServices.businessServicesList[i].name}</h2>
                     <div>{BusinessServices.businessServicesList[i].serviceDescription}</div>
                    <div>מחיר: {BusinessServices.businessServicesList[i].servicePrice}</div>
                    <div>{BusinessServices.businessServicesList[i].dateTime}</div>
                </div>
            </div>
        </>
    )
}
)
export default ServiceInAdmin;