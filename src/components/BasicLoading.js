import { Oval } from 'svg-loaders-react'

export default function BasicLoading(){
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.4)', height: '100%', width: '100%'}} >
            <Oval fill={"white"} width={100} height={100} />
        </div>
    )
}