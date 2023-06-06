
const BookingRow = ({ booking ,handleBookDelete , handleBookingUpdate}) => {
    const { img, date, price, customerName , _id , status } = booking;


    return (
        <tr>
            <th>
                <button onClick={() => handleBookDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
               {
                status === "confirm" ? <span className="bg-green-600 rounded-2xl p-2 text-white">Confirmed</span> :
                <button onClick={() => handleBookingUpdate(_id)} className="btn btn-ghost btn-xs">Confrim</button>
               }
            </th>
        </tr>
    );
};

export default BookingRow;