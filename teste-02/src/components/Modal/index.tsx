import styles from './styles.module.css';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: any;
}

const Modal = ({ visible, onClose, children }: ModalProps) => {
  return (
    <>
      {visible && (
        <div
          id="myModal"
          className={styles.modal}
          onClick={(event) => {
            event.target.id == 'myModal' ? onClose() : '';
          }}
        >
          <div className={styles.content}>
            <span className={styles.close} onClick={onClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
