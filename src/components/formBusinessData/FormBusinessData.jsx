import { useState} from "react";
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
import { useEffect } from "react";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
const FormBusinessData = observer(() => {
    useEffect(() => {
        BusinessServices.initialBusinessData();
      }, []);
      
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: BusinessServices.business.name,
        address: BusinessServices.business.address,
        phone: BusinessServices.business.phone,
        email: BusinessServices.business.email,
        owner: BusinessServices.business.owner,
        logo: BusinessServices.business.logo,
        description: BusinessServices.business.description,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        if (formData.name !== '' && formData.address !== '' && formData.phone !== '' && formData.email !== '' && formData.owner !== '' && formData.description !== '') {
            BusinessServices.setBusinessData(formData);

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
            name: BusinessServices.business.name,
            address: BusinessServices.business.address,
            phone: BusinessServices.business.phone,
            email: BusinessServices.business.email,
            owner: BusinessServices.business.owner,
            logo: BusinessServices.business.logo,
            description: BusinessServices.business.description,
        });
        setIsOpen(false);
    };



    return (
        <>
            <Fab color="secondary" aria-label="edit">
        <EditIcon variant="contained" onClick={() => setIsOpen(true)}/>
      </Fab>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} >
                <DialogTitle> Set Business Details</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="Form">
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                            />
                        </div>
                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label="  address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="address"
                            />
                        </div>

                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label="   phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder=" phone"
                            />
                        </div>
                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label="  email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="email"
                            />
                        </div>
                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label="   owner"
                                name="owner"
                                value={formData.owner}
                                onChange={handleInputChange}
                                placeholder="owner"
                            />
                        </div>
                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label="   description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="description"
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

export default FormBusinessData