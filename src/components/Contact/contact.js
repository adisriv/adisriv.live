/* eslint-disable func-names */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './style.scss';
// import jQuery from 'jquery';

// (function ($) {
//   // jQuery code using $
//   let $input;

//   function onInputFocus(event) {
//     const $target = $(event.target);
//     const $parent = $target.parent();
//     $parent.addClass('input--filled');
//   }

//   function onInputBlur(event) {
//     const $target = $(event.target);
//     const $parent = $target.parent();

//     if (event.target.value.trim() === '') {
//       $parent.removeClass('input--filled');
//     }
//   }

//   $(document).ready(() => {
//     $input = $('.input__field');

//     // in case there is any value already
//     $input.each(() => {
//       if ($input.val().trim() !== '') {
//         const $parent = $input.parent();
//         $parent.addClass('input--filled');
//       }
//     });

//     $input.on('focus', onInputFocus);
//     $input.on('blur', onInputBlur);
//   });
// }(jQuery));

const Contact = (props) => {
  return (
    <div className="contact">
      <div><h2 className="work">Contact Me</h2></div>
      <div id="container">

        <span className="input">
          <input type="text" className="input__field" id="input-1" />
          <label htmlFor="input-1" className="input__label">
            <span className="input__label-content">First Name</span>
          </label>
        </span>

        <span className="input">
          <input type="text" className="input__field" id="input-2" />
          <label htmlFor="input-2" className="input__label">
            <span className="input__label-content">Last Name</span>
          </label>
        </span>

        <span className="input">
          <input type="text" className="input__field" id="input-3" />
          <label htmlFor="input-3" className="input__label">
            <span className="input__label-content">Phone Number</span>
          </label>
        </span>

        <span className="input">
          <input type="text" className="input__field" id="input-4" />
          <label htmlFor="input-4" className="input__label">
            <span className="input__label-content">Email Address</span>
          </label>
        </span>

        <span className="input message">
          <textarea className="input__field" id="input-5" />
          <label htmlFor="input-5" className="input__label">
            <span className="input__label-content">Message</span>
          </label>
        </span>

        <button id="send-button" type="button">Send</button>

      </div>
    </div>
  );
};

export default Contact;
