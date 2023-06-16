// import React from 'react';

import { useState } from "react";
import { useEffect } from "react";

const MySelectedClasses = () => {

    const [SelectedClasses, setSelectedClasses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://eduline-server-it14.onrender.com/selectedClasses`);
            if (response.ok) {
                const data = await response.json();
                setSelectedClasses(data);
            } else {
                // Error occurred while fetching data
                console.error('Error fetching data!');
            }
        };

        fetchData();
    })
    // const [classes, setClasses] = useState([]);
    // // const [SelectedClasses, setSelectedClasses] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`https://eduline-server.onrender.com/api/classes`);
    //         if (response.ok) {
    //             const data = await response.json();
    //             setClasses(data);
    //         } else {
    //             // Error occurred while fetching data
    //             console.error('Error fetching data!');
    //         }
    //     };

    //     fetchData();
    // }, []);

    console.log(SelectedClasses)
    return (
        <div>
            <h1 className="text-center ">My selected classes</h1>

            <section className="text-gray-600 m-5 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {
                            SelectedClasses?.map(c =>
                              <div key={c._id}>
                                  <div className="p-4 md:w-1/3 sm:mb-0 mb-6 lg:w-80">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={c.photo} />

                                    </div>
                                    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{c.name}</h2>
                                    <p className="text-base leading-relaxed mt-2">instructor name: {c.Instructor_name}</p>
                                    <p className="text-base leading-relaxed mt-2">instructor email : {c.Instructor_email}</p>

                                </div>
                              </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MySelectedClasses;