import Navbar from "./components/Header/Navbar";
import {HomeLayout} from "./components/Layouts/HomeLayout.jsx";
import {MeetPartnerLayout} from "./components/Layouts/MeetPartnerLayout.jsx";
import AboutUsLayout from "./components/Layouts/AboutUsLayout.jsx";
import OurServiceLayout from "./components/Layouts/OurServiceLayout.jsx";
import ClientReview from "./components/Layouts/ClientReview.jsx";

function App() {
  return (
    <>
        <Navbar />
        <HomeLayout />
        <MeetPartnerLayout />
        <AboutUsLayout />
        <OurServiceLayout />
        <ClientReview />
    </>
  );
}

export default App;
