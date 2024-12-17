import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minLength: [3, "First name must contain 3 charecter"],
  },
  lastname: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain 3 charecter"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Provide a valid Email"],
  },
  phone: {
    type: String,
    required: true,
    validate: [validator.isMobilePhone, "Provide a valid phone number"],
    minLength: [10, "Phone number must b1 11 digits"],
    maxLength: [10, "Phone number must b1 11 digits"],
  },
  date: { type: Date, required: true },
  time: { type: String, required: true },

});

export const Reservation = mongoose.model("Reservation", reservationSchema);


