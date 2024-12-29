import CallToActionSection from "./components/sections/CTA";
import { Hero } from "./components/sections/Hero";
import WhyOurClub from "./components/sections/Join";
import { Mission } from "./components/sections/Mission";
import { Roles } from "./components/sections/Roles";
import { ClubActivities } from "./components/sections/Activities";
import ContactForm  from "./components/ui/contact-form";

const Home = () => (
  <main>
    <Hero />
    <Mission />
    <Roles />
    <WhyOurClub />
    <ClubActivities />
    <CallToActionSection />
    <ContactForm />
  </main>
);

export default Home;
