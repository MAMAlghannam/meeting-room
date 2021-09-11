import "../styles/booking.css"
import { MdCancel } from "react-icons/md" 
import { BsFillCalendarFill } from "react-icons/bs" 
import { useEffect, useState } from "react";
import { getRequest, postRequest } from "../actions/mainActions";
import BasicLoading from "../components/BasicLoading";

export default function Booking({ userInfo, toast }){

    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substring(0, 10));
    const [isLoading, setIsLoading] = useState(false);
    const [list, setList] = useState([])

    useEffect(() => {
        // console.log(selectedDate)
        
        getList();
        
    // eslint-disable-next-line
    }, [selectedDate])

    const getList = async () => {
        try {
            setIsLoading(true)
            const result = await getRequest(`/api/Values/getTimes/${selectedDate}`, userInfo.token)
            setTimeout(() => {
                setIsLoading(false)
                setList(result.times)
                if(result.times.length === 0)
                    toast.error("لا توجد أوقات متاحة للحجز")
            }, 500)
        } catch (error) {
            alert(error)
        }
    }

    const book = async (at) => {
        try {
            setIsLoading(true)
            const result = await postRequest(`/api/Values/book`, { time: at, date: selectedDate }, userInfo.token)
            
            if(!result.isBooked){
                switch(result.reason){
                    case "not-available":
                        toast.error("محجوز مسبقًا")
                        break;
                    case "exceeded-bookings":
                        toast.error("تجاوزت العدد المسموح به من الحجوزات لهذا اليوم")
                        break;
                    case "passed-day":
                        toast.error("لا يمكن حجز وقت في يوم ماضي")
                        break;
                    default:
                        toast.error("حدث خطأ غير معروف")
                        break;
                }
            }
                
            getList()
        
        } catch (error) {
            console.log(error)
        }
    }

    const cancelBook = async (at) => {
        try {
            setIsLoading(true)
            const result = await postRequest(`/api/Values/cancelBook`, { time: at, date: selectedDate }, userInfo.token)
            
            if(!result.isCanceled)
                toast.error("لم يتم الإلغاء !")
                
            getList()
        
        } catch (error) {
            console.log(error)
        }
    }

    const onDateChange = (e) => {
        setSelectedDate(e.target.value)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', flex: 1}} >
            <div style={{padding: 15, paddingLeft: '5%', paddingRight: '5%' }} >
                <br /> 
                <div  style={{display: 'flex', position: 'relative', marginTop: 5}} >
                    <input style={{flex: 1}} value={selectedDate} min={new Date().toISOString().substring(0, 10)} type="date" onChange={onDateChange} />
                    <BsFillCalendarFill color={"darkgrey"} style={{position: 'absolute', left: 7, top: 8}} size={22} />
                </div>
            </div>


            <div className={"time-card-container"}>
                {
                    list.map((item, index) =>
                    <button 
                        key={item.at}   
                        className={`time-card ${item.isBooked ? "booked" : "available" } ${(item.userName === userInfo.email) && "owner"}`}
                        // style={{ backgroundColor: item.isBooked ? '#B12028' : '#2AA55C' }}
                        onClick={() => item.isBooked ? cancelBook(item.at) : book(item.at) } 
                        disabled={item.isBooked && (item.userName !== userInfo.email)}
                    >
                        <span> {item.at.split(" - ")[0]} </span>
                        { // cancel icon
                        (item.userName === userInfo.email) &&
                            <span className="cancelBadge"> 
                                <MdCancel color={"#9E772B"} size={25}/>
                            </span>
                        }
                        {
                            item.userName && 
                            <span style={{alignSelf: 'center'}} >  
                                {item.userName}
                            </span> 
                        }
                        <span style={{alignSelf: 'flex-end'}} > {item.at.split(" - ")[1]} </span>
                    </button>
                )
            }
            </div>

            { isLoading && <BasicLoading /> }

            <div /* spacer */ style={{paddingBottom: 45}} />
        </div>
    )

}