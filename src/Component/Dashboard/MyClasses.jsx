import { useState } from "react";
import { useEffect } from "react";

const MyClasses = () => {

    const [classes, setClasses] = useState([]);
    // const [SelectedClasses, setSelectedClasses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://eduline-server-it14.onrender.com/api/classes`);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                const filterClasses = data.filter(e => {
                    if (e.chk == "approved") {
                        return e
                    }
                })
                console.log("filter ", filterClasses)
                setClasses(filterClasses);
                
            } else {
                // Error occurred while fetching data
                console.error('Error fetching data!');
            }
        };

        fetchData();
    }, []);



    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">My Classes</h1>
                </div>
                <div className="flex flex-wrap">
                    {
                        classes.map(c => 
                            <div 
                            key={c._id}>

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

                                        {/* <Link className="link-hover "><p>{c.Instructor_email}</p></Link> */}

                                    </div>
                                    {/* <button className="btn" onClick={() => HandleClick(c)}>Select Class</button> */}
                                </div>
                            </div>
                        

                        )
                    }


                </div>
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
        </section>
    );
};

export default MyClasses;