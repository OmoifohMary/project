const Consultation = () => {
  return (
    <div>
      <section>
        <div>
          <h2>Contact</h2>
          <p>
            If like to work together or just want to connect, feel free to reach
            out!
          </p>

          <form>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
