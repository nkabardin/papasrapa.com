import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function ContactPage() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log("api key", process.env.NEXT_WEB3_FORM_API_KEY);

  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("PapaSrapa");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setIsSubmited(true))
      .catch((error) => setIsError(error));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.back}>
          <Link href="/" legacyBehavior>
            <a>← back</a>
          </Link>
        </div>
        <h1 className={styles.title}>Contact us</h1>
      </header>

      <div className={styles.contacts}>
        <div className={styles.contacts_item}>
          <div>Screening and press enquiries:</div>

          <div className={styles.email}>
            <a href="mailto:kabardinmedia@gmail.com">kabardinmedia@gmail.com</a>
          </div>
        </div>
        <div className={styles.contacts_item}>
          <div>General enquiries:</div>

          <div className={styles.email}>
            <a href="mailto:nikita@kabardin.com">nikita@kabardin.com</a>
          </div>
        </div>
      </div>
      {isError && (
        <div className="error">
          <div>Error!</div>
          <div>Something went wrong, sorry.</div>
        </div>
      )}
      {isSubmited ? (
        <div className={styles.thanks}>
          <div>Thank you!</div>
          <div>We contact with you as soon as possible.</div>
        </div>
      ) : (
        <div className={styles.form}>
          <form
            id="PapaSrapa"
            name="PapaSrapa"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="PapaSrapa" />
            <fieldset>
              <div className={styles.form_field}>
                <label htmlFor="name">Name *</label>
                <input id="name" type="text" name="name" required />
              </div>

              <div className={styles.form_field}>
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" name="email" required />
              </div>

              <div className={styles.form_field}>
                <label htmlFor="subject">Subject *</label>
                <input id="subject" type="text" name="subject" required />
              </div>

              <div className={styles.form_field}>
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" required></textarea>
              </div>
            </fieldset>

            <div className={styles.submit_button}>
              <button type="submit" className="contact_button">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
