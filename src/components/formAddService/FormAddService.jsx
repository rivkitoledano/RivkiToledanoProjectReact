import { useState } from "react";
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import BusinessServices from "../../stores/businessServices.js";
import Swal from 'sweetalert2'
import X from '../../assets/images/X.gif'
import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const FormAddService = observer(() => {

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        serviceId: String(BusinessServices.businessServicesList.length),
        name: '',
        serviceDescription: '',
        servicePrice: '',
        serviceImage: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        if (formData.name !== '' && formData.serviceDescription !== '' && formData.servicePrice !== '') {
            BusinessServices.addService(formData);
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
            serviceId: String(BusinessServices.businessServicesList.length),
            name: '',
            serviceDescription: '',
            servicePrice: '',
            serviceImage: ''
        });
        setIsOpen(false);
    };



    return (
        <>
            <Fab color="primary" aria-label="add">
        <AddIcon  variant="contained" onClick={() => setIsOpen(true)} />
      </Fab>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle>  Set service</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="Form">
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="service Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder=" service Name"
                            />
                        </div>
                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label=" service Description"
                                name="serviceDescription"
                                value={formData.serviceDescription}
                                onChange={handleInputChange}
                                placeholder="service Description"
                            />
                        </div>

                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label="  service Price"
                                name="servicePrice"
                                value={formData.servicePrice}
                                onChange={handleInputChange}
                                placeholder="service Price"
                            />
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

export default FormAddService