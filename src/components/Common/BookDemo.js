import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import axios from 'axios'
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import modalStyle from "../../assets/jss/modalStyle.js";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import * as moment from 'moment'
import "react-datepicker/dist/react-datepicker.css"
import {BOOK_DEMO_API} from "../../utils/API"

const FormSchema =  Yup.object({

  feName: Yup.string()
    .min(2).max(30).required('Required'),

  feDob: Yup.date('Invalid Date').required('Required'),

  feEmail: Yup.string().email('Email is not valid').required('Required'),

  fePhone: Yup.number('Enter a valid Phone').required('Required').positive().integer(),

})

const DatePickerField = ({ name, value, onChange }) => {

    return (
        <DatePicker
            selected={(value && new Date(value)) || null}
            dateFormat="dd-MMM-yyyy"
            className="form-control"
            minDate={new Date()}
            maxDate= {new Date().setMonth(new Date().getMonth()+2)}
            disabledKeyboardNavigation
            showYearDropdown
            showMonthDropdown
            isClearable
            placeholderText="Pick a day"
            onChange={val => {
                onChange(name, val);
            }}
        />
    );
  };

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(modalStyle)

export default function BookDemo (props){
    const {caption}=props
    const [modal, setModal] = React.useState(false);
    const classes = useStyles();
    const [formData, setFormData]= React.useState({
        feName:'',
        feEmail:'',
        fePhone:'',
        feDob:''
    })

    const handleClose=()=>{
        setFormData({
            feName:'',
            feEmail:'',
            fePhone:'',
            feDob:''
        })
        setModal(false)
    }

    return(
        <div className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-sm-9">
                    <div dangerouslySetInnerHTML = {{__html: caption }}/>
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <Button color="primary"
                                aria-label="book a demo"
                                onClick={()=> setModal(true)}>Book a Demo</Button>
                    </div>
                </div>
            </div>
            <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Book a Demo</h4>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >
          <p>Fill out this form and we will get back to you as soon as possible</p>
          <Formik initialValues={formData}
                 validationSchema={FormSchema}
                 onSubmit={(values, actions)=>{
                    actions.setSubmitting(true)
                    //Prepare form data to be sent over by Post request
                    const data= new FormData()
                    data.append('feName', values.feName)
                    data.append('fePhone',values.fePhone)
                    data.append('feEmail', values.feEmail)
                    data.append('feDob', moment(values.feDob).format('LL'))
                    
                    axios.post(BOOK_DEMO_API,data,
                      {headers:{'CONTENT-TYPE':'multipart/form-data; boundary=<calculated when request is sent>'}}
                    )
                    .then(res=>{
                      actions.setStatus({msg:res.data.message})
                      actions.setSubmitting(false)
                    }
                    )
                    .catch(err => console.log(err))
                  }}>
            {({ values, status, handleSubmit,setFieldValue, isSubmitting, errors})=>(
                <Form id="personal_details" onSubmit={handleSubmit}>
                        <Field name="feName" 
                                value={values.feName}
                                className="form-control mt-4"
                                aria-label="Full name"
                                placeholder="Full Name"/>
                        <ErrorMessage name="feName" component="div" />
                        <Field name="feEmail" 
                                value={values.feEmail} 
                                className="form-control mt-4"
                                aria-label="Email address"
                                placeholder="Email address"/>
                          <ErrorMessage name="feEmail" component="div"/>
                          <Field name="fePhone" 
                                value={values.fePhone} 
                                className="form-control mt-4"
                                aria-label="Contact number"
                                placeholder="Contact number"/>
                          <ErrorMessage name="fePhone" component="div"/>
                          <label htmlFor="feDob" className="mt-4">Pick a day for demo within 2 months from today</label>
                          <br/>
                          <DatePickerField name="feDob" 
                                aria-label="date of booking"
                                value={values.feDob}
                                onChange={setFieldValue}/>
                          <ErrorMessage name="feDob" component="div"/>
                          <DialogActions className={classes.modalFooter + " " + classes.modalFooterCenter}>
                                {status && status.msg && <p>{status.msg}</p>}
                                <Button color='success' disabled={isSubmitting} type="submit" aria-label="send">Send</Button>
                          </DialogActions>
                </Form>
            )}
            </Formik>
        </DialogContent>
      </Dialog>
    </div>
    )
}

BookDemo.propTypes = {
    caption: PropTypes.string
}

BookDemo.defaultProps={
    caption:"Find anything interesting? Book your demo to see our offerings in action."
}