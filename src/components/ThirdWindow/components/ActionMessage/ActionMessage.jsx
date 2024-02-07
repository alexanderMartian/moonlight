import styles from './ActionMessage.module.scss';

function ActionMessage({isTextCopied}) {

  if (!isTextCopied) {
    return null;
  }

  if (isTextCopied) {
    return (
      <div className={styles.successful}>
        <p>Адресу серверу скопійовано в буфер обміну</p>
      </div>
    );
  }
}

export default ActionMessage;