import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <section className={`${styles.container}` }>
      <div className={`${styles.contact_form}`}>
        <div className={styles.top_btn}>
          <Button text="Chat with us" icon={<MdMessage fontSize="24px"/>}/>
          <Button text="Call us" icon={<IoCall fontSize="24px"/>}/>
        </div>
        <Button 
          isOutlined={true}
          text="Submit an email form" 
          icon={<HiMail fontSize="24px"/>}/>
        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name'  />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name='Email'  />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="Text">Text</label>
            <textarea name='text' rows={8} />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end"}}>
            <Button 
              text="Submit" />
          </div>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="./images/contact.svg" alt="Contact Image" />
      </div>
    </section>
  )
}

export default ContactForm