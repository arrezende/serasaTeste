import { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import FeedbackForm from './components/FeedbackForm';
import './App.css'; // Certifique-se de importar o arquivo de estilo

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const sendFeedback = (name: string, rating: number, message: string) => {

    const body = {
      name,
      rating,
      message,
    };

    fetch('https://5f4b11f341cb390016de37aa.mockapi.io/api/v1/feedback', {
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormCompleted(true)
      });

    closeModal();
  };

  return (
    <div>
      
      <table className="container">
        <tr>
          <td>
            <Button onClick={openModal} text='Open Modal' ariaLabel='Botão para abrir modal de feedback'/>
            {formCompleted && (
            <h1 className='msgSucess'>Obrigado pela sua Opinião</h1>
      )}
          </td>
        </tr>
      </table>

      <Modal visible={modalVisible} onClose={closeModal}>
        <>
          <div className="title">Deixa seu feedback</div>
          <FeedbackForm onSubmit={sendFeedback} />
        </>
      </Modal>
    </div>
  );
};

export default App;
