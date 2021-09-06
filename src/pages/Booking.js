import "../styles/booking.css"
import { BsFillCalendarFill } from "react-icons/bs";
import { IoMdTimer } from 'react-icons/io'
import { AiFillPushpin } from 'react-icons/ai'
import { useState } from "react";

export default function Booking(){

    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substring(0, 10));

    const onDateChange = (e) => {
        setSelectedDate(e.target.value)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', flex: 1}} >
            <div style={{padding: 15, paddingLeft: '5%', paddingRight: '5%' }} >
                {/* <label>حدد التاريخ:</label> */}
                <br /> 
                <div  style={{display: 'flex', position: 'relative', marginTop: 5}} >
                    <input style={{flex: 1}} value={selectedDate} type="date" onChange={onDateChange} />
                    <BsFillCalendarFill color={"darkgrey"} style={{position: 'absolute', left: 7, top: 8}} size={22} />
                </div>
            </div>

            {/* <div style={{padding: 15, paddingLeft: '5%', paddingRight: '5%' }} >
                <label>حدد الوقت:</label>
                <br /> 
                <div style={{position: 'relative'}} >
                    {/* <TimePicker title="من" />
                    <TimePicker title="إلى" /> }
                    <select style={{}} >
                        <option value="-1" >حدد الوقت</option>
                        <option value="07:00 - 07:00" >07:00 - 07:00</option>
                        <option value="07:00 - 07:00" >07:00 - 07:00</option>
                        <option value="07:00 - 07:00" >07:00 - 07:00</option>
                        <option value="07:00 - 07:00" >07:00 - 07:00</option>
                    </select>
                    <BsFillCalendarFill color={"darkgrey"} style={{position: 'absolute', left: 7, top: 8}} size={22} />
                </div>
                
                <button id="bookBtn" >
                    <span>&nbsp;</span>
                    حجز
                    <AiFillPushpin color={"white"} size={22} />
                </button>

            </div> */}

            <div style={{ padding: 15, marginTop: 15, display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >
                <div style={{width: '47%', height: 150, margin: 5, backgroundColor: 'red'}} />
                <div style={{width: '47%', height: 150, margin: 5, backgroundColor: 'green'}} />
                <div style={{width: '47%', height: 150, margin: 5, backgroundColor: 'red'}} />
                <div style={{width: '47%', height: 150, margin: 5, backgroundColor: 'green'}} />
                <div style={{width: '47%', height: 150, margin: 5, backgroundColor: 'green'}} />
                <div style={{width: '47%', height: 150, margin: 5, backgroundColor: 'red'}} />
                <div style={{width: '47%', height: 150, margin: 5, backgroundColor: 'red'}} />
                <div style={{width: '47%', height: 150, margin: 5, backgroundColor: 'green'}} />
                <div style={{width: '47%', height: 150, margin: 5, backgroundColor: 'red'}} />
            </div>


            <div /* spacer */ style={{paddingBottom: 45}} />
        </div>
    )

}

function TimePicker({ title }){
    return (
        <div style={{flex: 1, display: 'flex', alignItems: 'center'}} >
            <label>{title}</label>
            &nbsp;
            <div  style={{width: '75%', display: 'flex', position: 'relative', marginTop: 5}} >
                <input style={{flex: 1}} type="time" />
                <IoMdTimer color={"darkgrey"} style={{position: 'absolute', left: 7, top: 8}} size={22} />
            </div>
        </div>
    )
}