import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import classes from "./ContactForm.module.css";
import { useRouter } from "next/router";

const ContactForm = () => {
  const router = useRouter();
  const {
    register,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", criteriaMode: "all" });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("e", e.target);

    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE,
        process.env.EMAIL_TEMPLATE,
        e.target,
        process.env.EMAIL_USER
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form className={classes.form} onSubmit={sendEmail}>
        <div className={classes.formGroup}>
          <label htmlFor="identiy">Votre nom et prénom</label>
          <input
            type="text"
            name="identity"
            placeholder="Saisir votre nom et prénom"
            defaultValue={""}
            className={classes.formControl}
            {...register("identity", { defaultValue: "", required: true })}
          />
          <span className={classes.error}>
            {errors.identity?.type === "required" &&
              "Merci de préciser vos noms et prénoms"}
          </span>
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="email">Votre email</label>
          <input
            type="text"
            name="email"
            placeholder="Saisir votre adresse"
            defaultValue={""}
            className={classes.formControl}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">{errors.email?.message}</span>
          )}
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="phone">Votre téléphone</label>
          <input
            type="text"
            name="phone"
            defaultValue={""}
            className={classes.formControl}
            {...register("phone", {
              minLength: { value: 10, message: "10 caractères svp" },
            })}
          />
          {errors.phone && (
            <span className="error">{errors.phone?.message}</span>
          )}
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="comment">Votre message</label>
          <textarea
            name="comment"
            rows="10"
            cols="30"
            placeholder="Votre message"
            className={classes.formTextarea}
            {...register("comment", {
              required: true,
              maxLength: 2500,
            })}
          />

          {errors.comment && (
            <span className="error">{errors.comment?.message}</span>
          )}
        </div>
        <button className={classes.button} type="submit">
          Envoyer
        </button>
      </form>
    </>
  );
};
export default ContactForm;
