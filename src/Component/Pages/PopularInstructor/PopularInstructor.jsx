import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const PopularInstructor = () => {
    const [instructors, setInstructor] = useState([]);

    useEffect(() => {
        fetch('https://eduline-server-it14.onrender.com/api/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructor(data);

            })
            .catch(error => console.log(error))
    }, [])
const selectInstructor = instructors?.slice(0,6);

    return (
      <section className=" container mx-auto">
          <div className="my-12 mx-auto container">
            <div className="font-mono text-center  my-9">
                <h1 className="text-primary text-opacity-70 font-bold  text-4xl ">Popular Instructors Section</h1>
                <p className="my-4 "><span className="text-orange-500">As language instructors</span>, you hold a significant role in shaping the language <br /> skills and cultural understanding of your students. Your dedication and expertise <br />
                 are key in creating an effective and inspiring learning environment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    selectInstructor?.map(instructor => <>

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
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
      </section>

    );
};

export default PopularInstructor;