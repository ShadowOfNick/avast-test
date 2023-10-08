interface CardProps {
  image: string;
  title: string;
  text: string;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  text,
}) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt="Card" />

      <h4 className="card__title">
        {title}
      </h4>

      <p className="card__text">
        {text}
      </p>
    </div>
  );
};
