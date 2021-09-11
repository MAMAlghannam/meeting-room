import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { getRequest } from "../actions/mainActions";
import { Oval } from 'svg-loaders-react'

export default function ListOfBookings({ userInfo }){

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        
        const myBookings = async () => {
            setIsLoading(true)
            const response = await getRequest("/api/Values/getMyListOfBookings", userInfo.token)

            setTimeout(() => {
                setList(response.listOfBookings)
                setIsLoading(false)
            }, 500)
        }
        
        myBookings();
        // eslint-disable-next-line
    }, [])
    
    if(isLoading)
        return( 
            <div style={{textAlign: 'center'}}  > 
                <Oval stroke={"darkgrey"} width={30} height={30} />
            </div>
        )

    if(list.length === 0)
        return( 
            <div style={{textAlign: 'center'}}  > 
                لا يوجد حجوزات سابقة
            </div>
        )

    return (
      <Table responsive dir={"rtl"} >
        <thead>
          <tr>
            <th>#</th>
            <th>التاريخ</th>
            <th>الوقت</th>
          </tr>
        </thead>
        <tbody>
        {
            list.map((item, index) =>
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                </tr>
            )
        }
        </tbody>
      </Table>
    )
  
  }