import { rentalData } from "../../data/rentalData"
const RentalCard = () => {

  return (      
    <div className="p-6 flex gap-4">
      {rentalData.map((rental, index) => (
        <div key={index} className="p-4 border-2 border-[#006633] shadow-md rounded-md">
          <img src={rental.image} alt="house"  className=" h-32"/>
          <h3 className="text-sm mb-2 italic">{rental.title}</h3>
          <p>{rental.Description}</p>
        </div>
      ))}
    </div>
  
  )
}

export default RentalCard
