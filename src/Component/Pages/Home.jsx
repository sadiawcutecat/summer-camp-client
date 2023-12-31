
import Banner from "./Banner";
import ClassesSection from "./ClassesSection/ClassesSection";
import Extra from "./Extra/Extra";
import PopularInstructor from "./PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ClassesSection></ClassesSection>
          <PopularInstructor></PopularInstructor>
          <Extra></Extra>
        </div>
    );
};

export default Home;