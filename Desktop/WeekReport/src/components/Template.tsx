import { useNavigate } from "react-router-dom";

export type TemplateProps = {
    name: string, 
    address: string, 
    date: string, 
    period: string, 
    friday: string, 
    saturday: string, 
    sunday: string, 
    monday: string, 
    tuesday: string, 
    wednesday: string, 
    thursday: string, 
    incidents: string, 
    appointments: string, 
    medicals: string, 
    ongoing: string, 
    resolved: string, 
    health: string, 
    food: string, 
    engage: string, 
    onetoone: string, 
    house: string
}


const Template = ({ formData }: {formData: TemplateProps | null}) => {


    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/')
    }
    const handlePrint = () => {
        console.log(formData)
    }

  return (
    <div className='template'>
        <div className="btns">
            <button onClick={handleGoBack}>Go Back</button>
            <button onClick={handlePrint}>Print</button>
        </div>
        <h2>Weekly Handover Summary</h2>
        <table>
            <tbody>
                <tr>
                    <td className='company'>Symbiosis Care Ltd.</td>
                    <td>
                        <p>{formData ? `Name: ${formData.name}` : `Name: Service User Name`}</p>
                        <p>{formData ? `Address: ${formData.address}` : `Address: Service User Address`}</p>
                        <p>{formData ? `Date: ${formData.date}` : `Date: ${day}/${month}/${year}` }</p>
                        <p>{formData ? `Period: ${formData.period}` : `Period: ${day-7}/${month}/${year} - ${day}/${month}/${year}` }</p>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>


            <tbody className='heading'>
                <tr>
                    <th>WEEKLY ACTIVITIES</th>
                    <th>WEEKLY NOTE</th>
                </tr>
            </tbody>

            <tbody className='list'>
                <tr>
                    <td><span>1. </span>Appointment/Activities</td>
                    <td>
                        <p>Friday: {formData ? formData.friday : 'Friday'}</p>
                        <p>Saturday: {formData ? formData.saturday : 'Saturday'} </p>
                        <p>Sunday: {formData ? formData.sunday : 'Sunday'} </p>
                        <p>Monday: {formData ? formData.monday : 'Monday'}</p>
                        <p>Tuesday: {formData ? formData.tuesday : 'Tuesday'}</p>
                        <p>Wednesday: {formData ? formData.wednesday : 'Wednesday'} </p>
                        <p>Thursday: {formData ? formData.thursday : 'Thursday'}</p>
                    </td>
                </tr>
                <tr>
                    <td><span>2. </span>Incidents & ABC</td>
                    <td>{formData ? formData.incidents : 'Incidents & ABC'}</td>
                </tr>
                <tr>
                    <td><span>3. </span>Professional Appointments</td>
                    <td>{formData ? formData.appointments : 'Professional Appointments'}</td>
                </tr>
                <tr>
                    <td><span>4. </span>Medication Reconciliation</td>
                    <td>{formData ? formData.medicals : 'Medication Reconciliation'}</td>
                </tr>
                <tr>
                    <td><span>5. </span>New & Ongoing Issues</td>
                    <td>{formData ? formData.ongoing : 'New & Ongoing Issues'}</td>
                </tr>
                <tr>
                    <td><span>6. </span>Resolved Issues</td>
                    <td>{formData ? formData.resolved : 'Resolved Issues'}</td>
                </tr>
                <tr>
                    <td><span>7. </span>Other Health & Safety Issues</td>
                    <td>{formData ? formData.health : 'Other Health & Safety Issues'}</td>
                </tr>
                <tr>
                    <td><span>8. </span>Food Safety/Expiration</td>
                    <td>{formData ? formData.food : 'Food Safety/Expiration'}</td>
                </tr>
                <tr>
                    <td><span>9. </span>Service User Engagement</td>
                    <td>{formData ? formData.engage : 'Service User Engagement'}</td>
                </tr>
                <tr>
                    <td><span>10. </span>One to One Engagement</td>
                    <td>{formData ? formData.onetoone : 'One to One Engagement'}</td>
                </tr>
                <tr>
                    <td><span>11. </span>Safety & House Maintenance</td>
                    <td>{formData ? formData.house : 'Safety & House Maintenance'}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Template