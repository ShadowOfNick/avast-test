import {
  AntiTrack,
  AntiTrackBig,
  CardsSection,
  HeroBanner,
  Navbar
} from '../../components';
import { MainLayout } from '../main-layout';

export const HomePageLayout: React.FC = () => {
  return (
    <MainLayout>
      <Navbar />
      <HeroBanner />
      <AntiTrack />
      <CardsSection />
      <AntiTrackBig />
      <div className="question-section">
        <strong>Have any questions?</strong> Just visit our <a href="https://support.avast.com/">Support Center.</a>
      </div>

      <p className="anotation-text">
        *After the first term, your subscription will automatically continue for the renewal
        price every year and you will automatically be charged for a one-year period
        every year. If this price changes, we'll let vou know before you're charged. Up to
        60 days before your subscription ends, we'll send you an email reminder. Cancel
        your subscription renewal at least 30 days before your current period ends if you do not
        want to be charged.
      </p>

      <hr />

      <div className="footer">
        <div>
          <strong>Avast Software s.r.o  </strong>
          <a href='https://www.avast.com/'>
            www.avast.com
          </a>
        </div>

        <a href='https://www.avast.com/privacy-policy'>
          Privacy Policy
        </a>
      </div>
    </MainLayout>
  );
};
