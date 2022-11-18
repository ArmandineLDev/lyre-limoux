import React, { useState } from "react";
import ContactForm from "../../components/ContactForm";
import classes from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={classes.addressPhone}>
        <h2>Pour nous contacter :</h2>
        <div className={classes.contactInfo}>
          <div className={classes.contactPart}>
            <h3 className={classes.h3}>adresse :</h3>
            <p>14 rue du Maquis</p>
            <p>11300 Limoux</p>
          </div>
          <div className={classes.contactPart}>
            <h3 className={classes.h3}>Téléphone :</h3>
            <p>04 68 31 55 05</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
