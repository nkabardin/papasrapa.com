import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const contactsRowClasses = "flex flex-col sm:flex-row";
const contactsLabelClasses = "basis-1/2 text-base mb-4 sm:mb-0 sm:text-xl";
const contactsEmailClasses = "text-white ml-2 self-end text-xl sm:text-2xl";
const formFieldClasses = "flex flex-col";
const formLabelClasses = "text-white/75 text-xl";
const formInputClasses =
  "w-full max-w-full p-4 rounded-xl border-[6px] border-solid border-[#aaa] bg-white text-black outline-none mt-2 mb-4 focus:border-[#777]";

export default function ContactPage() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [isError, setIsError] = useState(false);
  const form = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const items = {
    visible: {
      opacity: 1,
      x: 1,
      transition: { type: "spring", damping: 20 },
    },
    hidden: { opacity: 0, x: 400 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmited(false);
    setIsError(false);
    const myForm = document.getElementById("PapaSrapa");
    const formData = new FormData(myForm);

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    if (!res.ok) {
      setIsError(true);
      return;
    }

    setIsSubmited(true);
    return;
  };

  return (
    <div className="w-full h-full min-h-screen bg-black">
      <header className="text-white flex items-center p-4">
        <div className="flex items-center ml-4 text-2xl text-white/60">
          <Link href="/" legacyBehavior>
            <a>← back</a>
          </Link>
        </div>
        <h1 className="flex-auto text-xl mr-4 text-right sm:mr-0 sm:text-center uppercase">
          Contact us
        </h1>
      </header>

      <div className="flex flex-col text-white/75 max-w-[640px] w-full m-auto p-4 justify-center gap-4">
        <div className={contactsRowClasses}>
          <div className={contactsLabelClasses}>
            Screening and press enquiries:
          </div>
          <div className={contactsEmailClasses}>
            <a href="mailto:kabardinmedia@gmail.com">kabardinmedia@gmail.com</a>
          </div>
        </div>
        <div className={contactsRowClasses}>
          <div className={contactsLabelClasses}>General enquiries:</div>
          <div className={contactsEmailClasses}>
            <a href="mailto:nikita@kabardin.com">nikita@kabardin.com</a>
          </div>
        </div>
      </div>
      {isError && (
        <div className="flex items-center justify-center text-[#ff013c] max-w-full text-2xl px-4 flex-col drop-shadow-[3px_3px_#00e6f6]">
          <div>Error!</div>
          <div>Something went wrong, sorry.</div>
        </div>
      )}
      {isSubmited ? (
        <div className="flex items-center justify-center text-white text-2xl flex-col mt-8 px-4">
          <div>Thank you!</div>
          <div>We contact with you as soon as possible.</div>
        </div>
      ) : (
        <motion.div
          className="w-full flex flex-col p-4 m-auto max-w-[640px]"
          initial="hidden"
          animate="visible"
          variants={form}
        >
          <form
            id="PapaSrapa"
            name="PapaSrapa"
            method="POST"
            onSubmit={handleSubmit}
          >
            <fieldset className="m-0 p-0 border-none">
              <motion.div className={formFieldClasses} variants={items}>
                <label htmlFor="name" className={formLabelClasses}>
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className={clsx(formInputClasses)}
                />
              </motion.div>

              <motion.div className={formFieldClasses} variants={items}>
                <label htmlFor="email" className={formLabelClasses}>
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className={clsx(formInputClasses)}
                />
              </motion.div>

              <motion.div className={formFieldClasses} variants={items}>
                <label htmlFor="subject" className={formLabelClasses}>
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  className={clsx(formInputClasses)}
                />
              </motion.div>

              <motion.div className={formFieldClasses} variants={items}>
                <label htmlFor="message" className={formLabelClasses}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className={clsx(formInputClasses, "min-h-[200px]")}
                />
              </motion.div>
            </fieldset>

            <motion.div className="mb-4 mt-8" variants={items}>
              <button type="submit" className="contact_button">
                Submit
              </button>
            </motion.div>
          </form>
        </motion.div>
      )}
    </div>
  );
}
