import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {
    const service = useLoaderData()
    const { title , _id , price  ,img} = service;
    const {user} = useContext(AuthContext)

    const handleBookServiceOrder = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const bookingInfo = {
            customerName: name,
            email,
            img,
            date,
            serviceID: _id ,
            price: price
        } 
        console.log(bookingInfo)
        fetch('http://localhost:5000/bookings' , {
            method: 'POST' , 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            console.log(data)
        })
    }
    return (
        <div>
            <h2>Book Service : {title} </h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body ">
                            <form onSubmit={handleBookServiceOrder} >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" defaultValue={user?.name} name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" placeholder="Data" name="date" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" readOnly  placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Amount</span>
                                    </label>
                                    <input type="number" defaultValue={price} placeholder="Amount" required readOnly className="input input-bordered" />
                                </div>
                                </div>
                            <div className="form-control w-full mt-6">
                                    <input type="submit" className="btn btn-primary" value="Confrim Order" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;