
import banner1 from '../../assets/images/banner2.jpg'


const Banner = () => {
    return (
        <div className="hero h-[600px] font-mono font-bold" style={{ backgroundImage: `url(${banner1})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Apply to teach Anytime.Earn money.Anywhere.</h1>
                    <p className="mb-5">Hold an online language class with your favorite teacher!
                        Find your teacher, choose the time and start learning the language.</p>
                    <div className='flex justify-center gap-5'>
                        <button className="btn btn-primary">Apply Now!</button>
                        <button className="btn btn-accent">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;