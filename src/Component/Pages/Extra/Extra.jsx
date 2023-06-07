import certification from '../../../assets/images/cartification.jpg'
import teaching from '../../../assets/images/teaching.png'
import career from '../../../assets/images/career.png'
import superior from '../../../assets/images/superior.png'

const Extra = () => {
    return (
        <div>
            <div className='text-center font-mono font-bold'>
                <h1 className='text-5xl text-primary text-opacity-70'>Welcome, Folks!</h1>
                <p className='text-2xl text-orange-500'>
                    Why Study With Us
                </p>
            </div>
            <div className='flex justify-center gap-32'>
                <div>
                    <img className='h-[200px] w-[200] rounded-full' src={certification} alt="" />
                    <h3>Certification</h3>
                    <p>Get certification from a respected organization

                    </p>
                </div>
                <div>
                    <img className='h-[200px] w-[200] rounded-full' src={teaching} alt="" />
                    <h3>Teaching Materials</h3>
                    <p>Use modern learning materials for over 15 language courses

                    </p>
                </div>
                <div>
                    <img className='h-[200px] w-[200] rounded-full' src={career} alt="" />
                    <h3>Career Upgrade
                    </h3>
                    <p>Enhance your professional and academic CV as you travel the world</p>
                </div>
                <div>
                    <img className='h-[200px] w-[200] rounded-full' src={superior} alt="" />
                    <h3>Superior Accomodation</h3>
                    <p>Over 100 rooms in premium residences and welcoming homestays

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Extra;