import "../styles/booking.css"
import { BsFillCalendarFill } from "react-icons/bs";
import { IoMdTimer } from 'react-icons/io'
import { AiFillPushpin } from 'react-icons/ai'

export default function Booking(){

    return (
        <div style={{display: 'flex', flexDirection: 'column', flex: 1}} >
            <div style={{padding: 15, paddingLeft: '5%', paddingRight: '5%' }} >
                <label>حدد التاريخ:</label>
                <br /> 
                <div  style={{display: 'flex', position: 'relative', marginTop: 5}} >
                    <input style={{flex: 1}} type="date" />
                    <BsFillCalendarFill color={"darkgrey"} style={{position: 'absolute', left: 7, top: 8}} size={22} />
                </div>
            </div>

            <div style={{padding: 15, paddingLeft: '5%', paddingRight: '5%' }} >
                <label>حدد الوقت:</label>
                <br /> 
                <div style={{display: 'flex', paddingRight: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                    <TimePicker title="من" />
                    <TimePicker title="إلى" />
                </div>
                
                <button id="bookBtn" >
                    <span>&nbsp;</span>
                    حجز
                    <AiFillPushpin color={"white"} size={22} />
                </button>

            </div>

            <div style={{padding: 15, marginTop: 15}} >
                <label>الاوقات المحجوز فيها:</label>
                <table id="booked-times-table" >
                    <tr>
                        <td>من الى</td>
                        <td>ايميل الحاجز</td>
                    </tr>
                    <tr>
                        <td>من الى</td>
                        <td>ايميل الحاجز</td>
                    </tr>
                    <tr>
                        <td>من الى</td>
                        <td>ايميل الحاجز</td>
                    </tr>
                    <tr>
                        <td>من الى</td>
                        <td>ايميل الحاجز</td>
                    </tr>
                    <tr>
                        <td>من الى</td>
                        <td>ايميل الحاجز</td>
                    </tr>
                    <tr>
                        <td>من الى</td>
                        <td>ايميل الحاجز</td>
                    </tr>
                    <tr>
                        <td>من الى</td>
                        <td>ايميل الحاجز</td>
                    </tr>
                    <tr>
                        <td>من الى</td>
                        <td>ايميل الحاجز</td>
                    </tr>
                    <tr>
                        <td>من الى</td>
                        <td>ايميل الحاجز</td>
                    </tr>
                    <tr>
                        <td>من الى</td>
                        <td>ايميل الحاجز</td>
                    </tr>
                </table>

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