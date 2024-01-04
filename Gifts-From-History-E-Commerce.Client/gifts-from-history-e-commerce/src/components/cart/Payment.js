import React from "react";
import { Login } from "../../authentication/Login.js";

export default function Payment() {
  return (
    <div>
      <h2>Quick checkout</h2>
      <h3>OR</h3>

      <h2>Contact details</h2>
      <p>Do you already have an account? Log in</p>

      <label htmlFor='email'>E-mail</label>
      <input type='email' id='email' name='email' required />

      <div>
        <input type='checkbox' id='newsOffers' name='newsOffers' />
        <label htmlFor='newsOffers'>Email me with news and offers</label>
      </div>

      <h2>Shipment</h2>
      <label htmlFor='country'>Italy</label>
      <label htmlFor='firstName'>First name</label>
      <input type='text' id='firstName' name='firstName' required />

      <label htmlFor='lastName'>Last name</label>
      <input type='text' id='lastName' name='lastName' required />

      <label htmlFor='company'>Company (optional)</label>
      <input type='text' id='company' name='company' />

      <label htmlFor='address'>Address</label>
      <input type='text' id='address' name='address' required />

      <label htmlFor='postalCode'>POSTAL CODE</label>
      <input type='text' id='postalCode' name='postalCode' required />

      <label htmlFor='city'>City</label>
      <input type='text' id='city' name='city' required />

      <label htmlFor='telephone'>Telephone (optional)</label>
      <input type='tel' id='telephone' name='telephone' />

      <label htmlFor='countryCode'>IT</label>

      <h2>Shipping methods</h2>
      <p>Enter your shipping address to view available shipping methods.</p>
    </div>
  );
}
