import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(''); // State for feedback message
  const [isSuccess, setIsSuccess] = useState(true); // State for message type (success/error)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(''); // Clear previous messages

    const myForm = event.target;
    const formData = new FormData(myForm);

    try {
      // Replace "YOUR_FORMSPREE_ENDPOINT_URL" with your actual Formspree endpoint
      const response = await fetch("YOUR_FORMSPREE_ENDPOINT_URL", {
        method: "POST",
        body: formData, // Formspree can handle FormData directly
        headers: {
          'Accept': 'application/json' // Recommended by Formspree
        }
      });

      if (response.ok) {
        setMessage("Thank you! Your message has been sent. I will get back to you ASAP.");
        setIsSuccess(true);
        myForm.reset(); // Clear the form fields
      } else {
        const data = await response.json();
        let errorMessage = "Oops! There was an error submitting your form.";
        if (data.errors) {
          errorMessage = data.errors.map(error => error.message).join(", ");
        }
        setMessage(errorMessage);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage("Oops! There was a network error. Please try again later.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Feedback Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-md mb-6 ${isSuccess ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}
            >
              <p>{message}</p>
            </motion.div>
          )}

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            // Removed data-netlify="true" as we are using Formspree
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? 'Sending...' : 'Let\'s talk'}
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
