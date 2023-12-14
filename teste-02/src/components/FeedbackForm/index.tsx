import { useState } from 'react';
import styles from './styles.module.css';
import Button from '../Button';

interface FeedbackFormProps {
  onSubmit: (name: string, rating: number, message: string) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const handleRatingClick = (value: number) => {
    setRating(value);
  };
  console.log(rating);
  const handleSubmit = () => {
    onSubmit(name, rating, message);
  };

  return (
    <div id="form">
      <div className={styles.formGroup}>
        <label>Seu nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Sua nota:</label>
        <div className={styles.rating}>
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              data-value={value}
              className={`rate fa fa-star${
                value <= rating ? ` ${styles.checked}` : ''
              }`}
              onClick={() => handleRatingClick(value)}
            ></span>
          ))}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Sua mensagem:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <Button
        onClick={handleSubmit}
        text="Enviar"
        ariaLabel="Botão para enviar feedback"
      />
    </div>
  );
};

export default FeedbackForm;
