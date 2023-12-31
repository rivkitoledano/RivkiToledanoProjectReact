import { Outlet, useParams } from 'react-router-dom'
import ShowingBusinessDetails from '../showingBusinessDetails/ShowingBusinessDetails'
import BusinessServices from '../../stores/businessServices'
import SingleService from '../singleService/SingleService'
import './ArchitecturalSimulations.css'
import { useEffect } from 'react'
import { observer } from 'mobx-react'
const ArchitecturalSimulations = observer(() => {
  useEffect(() => {
   localStorage.removeItem('isLogin'); 
   BusinessServices.initialBusinessData();
}, [])

const { service } = useParams()
  return (
    <>
      <ShowingBusinessDetails></ShowingBusinessDetails>
      <div className="container">
        <div className="sidebar">
          {BusinessServices.businessServicesList.map((service, ind) => (
            <a href={ind} key={ind}>
              <div>{service.name}</div>
            </a>))}

        </div>
        <div className="content">
           {service ? <Outlet context={[service]} /> : <SingleService context={[0]}></SingleService>}

        </div>
      </div>

    </>
  )
}
)
export default ArchitecturalSimulations