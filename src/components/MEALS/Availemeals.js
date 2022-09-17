import './Mealslist.css'
import Mealslist from './Mealslist'

const Availemeals = () => {
    
    let mealarry = [
        {
            name: 'Sushi',
            desc: 'Finest fish and veggies',
            amt: 22.99
        },
        {
            name: 'Schnitzel',
            desc: 'Agerman speciality!',
            amt: 16.50
        },
        {
            name: 'Barbecue Burger',
            desc: 'American,raw,meaty',
            amt: 12.99
        },
        {
            name: 'Green Bowl',
            desc: 'Healthy... and green...',
            amt: 5.50
        }
    ]

    return (
        <>
            <Mealslist list={mealarry} />
        </>
    )
}
export default Availemeals;