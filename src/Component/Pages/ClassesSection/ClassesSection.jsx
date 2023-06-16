import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ClassesSection = () => {
    const [popularClasses, setPopularClasses] = useState([]);

    useEffect(() => {
        fetch('https://eduline-server-it14.onrender.com/api/classes')
            .then(res => res.json())
            .then(data => {
                setPopularClasses(data);

            })
            .catch(error => console.log(error))
    }, [])
const selectClasses = popularClasses?.slice(0,6);
    return (
        <div className="my-12 mx-auto container">
        <div className="font-mono text-center  my-9">
            <h1 className="text-primary text-opacity-70 font-bold  text-4xl ">Popular Classes Section</h1>
           
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                selectClasses?.map(selectClass => <>

                    <div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={selectClass.photo} alt="Shoes" className="rounded-xl h-32" />
                            </figure>
                            <div className="card-body items-center text-center font-mono">
                                <h2 className="card-title text-orange-500 font-mono font-bold">{selectClass.name}</h2>
                             <p>Instructor-name: {selectClass.Instructor_name}</p>
                             <p>Available-seat: {selectClass.Available_seat}</p>
                             <p>Price: {selectClass.price}</p>
                                <Link className="link-hover "><p>{selectClass.email}</p></Link>
                               
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    </div>
    );
};

export default ClassesSection;