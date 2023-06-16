
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Classes = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [classes, setClasses] = useState([]);
    const [SelectedClasses, setSelectedClasses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://eduline-server.onrender.com/api/classes`);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                const filterClasses = data.filter( e =>{
                    if(e.chk=="approved"){
                        return e
                    }
                })
                console.log("filter ",filterClasses)
                setClasses(filterClasses);
            } else {
                // Error occurred while fetching data
                console.error('Error fetching data!');
            }
        };

        fetchData();
    }, []);


    

    // useEffect(() => {
    //     fetch('https://eduline-server.onrender.com/api/classes')
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data);

    //         })
    //         .catch(error => console.log(error))
    // }, [])
    const HandleClick = (c) => {
        // console.log("first")
        console.log("data ", c)
        const selectClass = {
            
            "name" : c.name,
            "photo": c.photo,
            "Instructor_name":c.Instructor_name,
            "Instructor_email":c.Instructor_email,
            "price":c.price,
            "Available_seat":c.Available_seat,
            "student_email":user.email
        }
        console.log("HELLO",selectClass)

        fetch('https://eduline-server.onrender.com/selectedClasses', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(selectClass)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

        })

    }

    return (

        <div>
            <div className="my-12 mx-auto container">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        classes?.map(c => <>

                            <div>

                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={c.photo} alt="Shoes" className="rounded-xl h-32" />
                                    </figure>
                                    <div className="card-body items-center text-center font-mono">
                                        <h2 className="card-title text-black-500 font-mono font-bold">{c.name}</h2>
                                        <h2 className="card-title text-orange-500 font-mono font-bold">{c.Instructor_name}</h2>
                                        <h2 className="card-title text-orange-500 font-mono font-bold">{c.Instructor_email}</h2>
                                        <h2 className="card-title  font-mono font-bold">Price: <span className="text-orange-500">{c.price}</span></h2>
                                        <h2 className="card-title font-mono font-bold">Available: <span className="text-orange-500">{c.Available_seat}</span></h2>

                                        <Link className="link-hover "><p>{c.Instructor_email}</p></Link>

                                    </div>
                                    <button className="btn" onClick={() => HandleClick(c)}>Select Class</button>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Classes;