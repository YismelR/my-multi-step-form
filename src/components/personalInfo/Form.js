export default function Form() {
  return (
    <form className="info-form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="e.g. Stephen King"></input>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
      ></input>
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" id="phone" placeholder="e.g. +1 234 567 890 "></input>
      <input type="submit" value={"Next Step"}></input>
    </form>
  );
}
