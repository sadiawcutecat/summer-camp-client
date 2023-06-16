// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Instructor = () => {
    const [instructors, setInstructor] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://eduline-server.onrender.com/api/instructors`);
            if (response.ok) {
                const data = await response.json();
                setInstructor(data);
            } else {
                // Error occurred while fetching data
                console.error('Error fetching data!');
            }
        };

        fetchData();
    }, []);

    // useEffect(() => {
    //     fetch('https://eduline-server.onrender.com/instructors')
    //         .then(res => res.json())
    //         .then(data => {
    //             setInstructor(data);

    //         })
    //         .catch(error => console.log(error))
    // }, [])

    return (
        <div className="my-12 mx-auto container">
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    instructors?.map(instructor => <>

                        <div>

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={instructor.image} alt="Shoes" className="rounded-xl h-32" />
                                </figure>
                                <div className="card-body items-center text-center font-mono">
                                    <h2 className="card-title text-orange-500 font-mono font-bold">{instructor.name}</h2>
                                    <p>Country: {instructor.country}</p>
                                    <Link className="link-hover "><p>{instructor.email}</p></Link>
                                    <p>classes_taken: {instructor.classes_taken}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">See Classes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Instructor;