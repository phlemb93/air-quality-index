import React, { FormEvent, useState } from 'react'
import { TemplateProps } from './Template';



const Form = ({ handleFormSubmit }: {handleFormSubmit: (data:TemplateProps) => void}) => {

    
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [period, setPeriod] = useState<string>('')
    const [friday, setFriday] = useState<string>('')
    const [saturday, setSaturday] = useState<string>('')
    const [sunday, setSunday] = useState<string>('')
    const [monday, setMonday] = useState<string>('')
    const [tuesday, setTuesday] = useState<string>('')
    const [wednesday, setWednesday] = useState<string>('')
    const [thursday, setThursday] = useState<string>('')
    const [incidents, setIncidents] = useState<string>('')
    const [appointments, setAppointments] = useState<string>('')
    const [medicals, setMedicals] = useState<string>('')
    const [ongoing, setOngoing] = useState<string>('')
    const [resolved, setResolved] = useState<string>('')
    const [health, setHealth] = useState<string>('')
    const [food, setFood] = useState<string>('')
    const [engage, setEngage] = useState<string>('')
    const [onetoone, setOnetoone] = useState<string>('')
    const [house, setHouse] = useState<string>('')


    const handleSubmit = (e:FormEvent<Element>) => {
        e.preventDefault();
        const data = {name, address, date, period, friday, saturday, sunday, monday, tuesday, wednesday, thursday, incidents, appointments, medicals, ongoing, resolved, health, food, engage, onetoone, house}

       handleFormSubmit(data)
    }

  return (
    <div className='form'>
        <h2>Weekly Handover Form</h2>
        <form onSubmit={handleSubmit}>

            <div className="details">
                <p>Personal Details</p>
                <label htmlFor="name">Name</label>
                <input
                    name='name'
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <label htmlFor="address">Address</label>
                <input
                    name='address'
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                />

                <label htmlFor="date">Date</label>
                <input
                    name='date'
                    type="text"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />

                <label htmlFor="period">Period</label>
                <input
                    name='period'
                    type="text"
                    onChange={(e) => setPeriod(e.target.value)}
                    value={period}
                />
            </div>
            

            <div className="activities">
                <p>Appointment/Activities</p>
                <label htmlFor="friday">Friday</label>
                <textarea
                    name='friday'
                    onChange={(e) => setFriday(e.target.value)}
                    value={friday}
                />

                <label htmlFor="saturday">Saturday</label>
                <textarea
                    name='saturday'
                    onChange={(e) => setSaturday(e.target.value)}
                    value={saturday}
                />

                <label htmlFor="sunday">Sunday</label>
                <textarea
                    name='sunday'
                    onChange={(e) => setSunday(e.target.value)}
                    value={sunday}
                />

                <label htmlFor="monday">Monday</label>
                <textarea
                    name='monday'
                    onChange={(e) => setMonday(e.target.value)}
                    value={monday}
                />

                <label htmlFor="tuesday">Tuesday</label>
                <textarea
                    name='tuesday'
                    onChange={(e) => setTuesday(e.target.value)}
                    value={tuesday}
                />

                <label htmlFor="wednesday">Wednesday</label>
                <textarea
                    name='wednesday'
                    onChange={(e) => setWednesday(e.target.value)}
                    value={wednesday}
                />
                            
                <label htmlFor="thursday">Thursday</label>
                <textarea
                    name='thursday'
                    onChange={(e) => setThursday(e.target.value)}
                    value={thursday}
                />
            </div>

            <div className="other-activities">

                <label htmlFor="incidents">Incidents & ABC</label>
                <textarea
                    name='incidents'
                    onChange={(e) => setIncidents(e.target.value)}
                    value={incidents}
                />

                <label htmlFor="appointments">Professional Appointments</label>
                <textarea
                    name='appointments'
                    onChange={(e) => setAppointments(e.target.value)}
                    value={appointments}
                />

                <label htmlFor="medicals">Medication Reconciliation</label>
                <textarea
                    name='medicals'
                    onChange={(e) => setMedicals(e.target.value)}
                    value={medicals}
                />

                <label htmlFor="ongoing">New & Ongoing Issues</label>
                <textarea
                    name='ongoing'
                    onChange={(e) => setOngoing(e.target.value)}
                    value={ongoing}
                />

                <label htmlFor="resolved">Resolved Issues</label>
                <textarea
                    name='resolved'
                    onChange={(e) => setResolved(e.target.value)}
                    value={resolved}
                />

                <label htmlFor="health">Other Health & Safety Issues</label>
                <textarea
                    name='health'
                    onChange={(e) => setHealth(e.target.value)}
                    value={health}
                />

                <label htmlFor="food">Food Safety/ Expiration</label>
                <textarea
                    name='food'
                    onChange={(e) => setFood(e.target.value)}
                    value={food}
                />

                <label htmlFor="engage">Service User Engagement</label>
                <textarea
                    name='engage'
                    onChange={(e) => setEngage(e.target.value)}
                    value={engage}
                />

                <label htmlFor="onetoone">One to One Engagement</label>
                <textarea
                    name='onetoone'
                    onChange={(e) => setOnetoone(e.target.value)}
                    value={onetoone}
                />

                <label htmlFor="house">Safety & House Maintenances</label>
                <textarea
                    name='house'
                    onChange={(e) => setHouse(e.target.value)}
                    value={house}
                />
            </div>

            <button type='submit'>Preview</button>
        </form>
    </div>
  )
}

export default Form