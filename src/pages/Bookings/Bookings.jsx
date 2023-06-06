import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                console.log(data)
            })
    }, [])


    // handle Delete
    const handleBookDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`,
                    {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }

    // Handle Booking Confrim Update

    const handleBookingUpdate = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Update This Booking!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`,
                    {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({status: 'confirm'})
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            const remaining = bookings.filter(booking => booking._id !== id);
                            const updated = bookings.find(booking => booking._id === id);
                            updated.status = 'confirm'
                            const newBookings = [updated, ...remaining];
                            setBookings(newBookings)
                            Swal.fire(
                                'Updated!',
                                'Booking has been Updated.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div>
            <h2>My Booking: {bookings.length}</h2>

            {/* Table List */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Service Date</th>
                            <th>Service Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleBookDelete={handleBookDelete}
                                handleBookingUpdate={handleBookingUpdate}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;