import Link from "next/link";
import { useState } from "react";
import Reveal from "react-reveal/Reveal";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    let myForm = document.getElementById("PapaSrapa");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => setIsSubmited(true))
      .catch(error => setIsError(error));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Reveal effect="fade-in-top" duration={600} delay={200}>
          <div className={styles.back}>
            <Reveal effect="fade-in-right" delay={750}>
              <Link href="/">
                <a>← back</a>
              </Link>
            </Reveal>
          </div>
          <h1 className={styles.title}>Contact us</h1>
        </Reveal>
      </header>

      <div className={styles.contacts}>
        <div className={styles.contacts_item}>
          <div>Screening and press enquiries:</div>
          <Reveal effect="fade-in-right" duration={600} delay={500}>
            <div className={styles.email}>
              <a href="mailto:kabardinmedia@gmail.com">
                kabardinmedia@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
        <div className={styles.contacts_item}>
          <div>General enquiries:</div>
          <Reveal effect="fade-in-right" duration={600} delay={800}>
            <div className={styles.email}>
              <a href="mailto:nikita@kabardin.com">nikita@kabardin.com</a>
            </div>
          </Reveal>
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
          <Reveal effect="fade-in-bottom" duration={600} delay={1600}>
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
                <Reveal effect="fade-in-bottom" duration={600} delay={1600}>
                  <div className={styles.form_field}>
                    <label htmlFor="name">Name *</label>
                    <input id="name" type="text" name="name" required />
                  </div>
                </Reveal>
                <Reveal effect="fade-in-bottom" duration={600} delay={1800}>
                  <div className={styles.form_field}>
                    <label htmlFor="email">Email *</label>
                    <input id="email" type="email" name="email" required />
                  </div>
                </Reveal>
                <Reveal effect="fade-in-bottom" duration={600} delay={2000}>
                  <div className={styles.form_field}>
                    <label htmlFor="subject">Subject *</label>
                    <input id="subject" type="text" name="subject" required />
                  </div>
                </Reveal>
                <Reveal effect="fade-in-bottom" duration={600} delay={2200}>
                  <div className={styles.form_field}>
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                </Reveal>
              </fieldset>

              <div className={styles.submit_button}>
                <Reveal effect="fade-in-bottom" duration={600} delay={200}>
                  <button type="submit" className="contact_button">
                    Submit
                  </button>
                </Reveal>
              </div>
            </form>
          </Reveal>
        </div>
      )}
    </div>
  );
}
