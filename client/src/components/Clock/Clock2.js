import {useState, useEffect} from "react"

const Clock2 = () => {
    const [date,setDate] = useState(new Date())
    useEffect(() => {
        let timer= setInterval(()=>{
            setDate(new Date())
            console.log(date)
        },3000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Clock2
