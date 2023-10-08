import { Card } from './card';
import firstCard from './img/feat1_icon.png';
import secondCard from './img/feat2_icon.png';
import thirdCard from './img/feat3_icon.png';
import fourthCard from './img/feat4_icon.png';

const cardsContent = [
  {
    image: firstCard,
    title: 'Keep your true identity private',
    text: 'When youre browsing, disguise your online behaviours so no one can tell its you.'
  },
  {
    image: secondCard,
    title: 'Know when youre being tracked',
    text: 'When youre browsing, disguise your online behaviours so no one can tell its you.'
  },
  {
    image: thirdCard,
    title: 'Stop targeted advertising',
    text: 'When youre browsing, disguise your online behaviours so no one can tell its you.'
  },
  {
    image: fourthCard,
    title: 'Keep vour operating system private',
    text: 'When youre browsing, disguise your online behaviours so no one can tell its you.'
  },
]

export const CardsSection: React.FC = () => {
  return (
    <div className="cards-section">
      <h3 className="cards-section__title">
        Enjoy 1 year of freedom from online trackers
      </h3>

      <div className="cards-section__cards">
        {cardsContent.map((item) => (
          <Card
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};
