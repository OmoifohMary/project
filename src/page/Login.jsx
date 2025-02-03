const Login = () => {
  return (
    <div>
      <div className="container">
        <h2>Contact</h2>
        <form>
          <label>Email</label>
          <input type="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
