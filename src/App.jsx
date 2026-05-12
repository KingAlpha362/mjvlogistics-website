import { Header } from './components/ui/header-2.jsx';
import { Hero } from './components/Hero.jsx';
import { Values } from './components/Values.jsx';
import { Services } from './components/Services.jsx';
import { Mission } from './components/Mission.jsx';
import { Coverage } from './components/Coverage.jsx';
import { FleetStrip } from './components/FleetStrip.jsx';
import { Leadership } from './components/Leadership.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { WhatsAppFloat } from './components/WhatsAppFloat.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Values />
        <Services />
        <Mission />
        <Coverage />
        <FleetStrip />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
