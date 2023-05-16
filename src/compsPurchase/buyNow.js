import React,{ useState } from 'react'





export default function BuyNow() {
   
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [address, setAddress] = useState('');
        const [quantity, setQuantity] = useState(1);
        const [totalPrice, setTotalPrice] = useState(10);
      
        const handleNameChange = (event) => {
          setName(event.target.value);
        };
      
        const handleEmailChange = (event) => {
          setEmail(event.target.value);
        };
      
        const handleAddressChange = (event) => {
          setAddress(event.target.value);
        };
      
        const handleQuantityChange = (event) => {
          const newQuantity = parseInt(event.target.value, 10);
          setQuantity(newQuantity);
          const newTotalPrice = newQuantity * 10; // Assuming each item costs $10
          setTotalPrice(newTotalPrice);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
      
          // Perform purchase logic here
      
          // Clear form fields
          setName('');
          setEmail('');
          setAddress('');
          setQuantity(1);
          setTotalPrice(10);
      
          // Display success message or redirect to another page
          alert('Purchase successful!');
        };




  return (
    <React.Fragment>
       <div>

      <h1>Purchase Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Address:</label>
          <textarea value={address} onChange={handleAddressChange} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            required
          />
        </div>
        <div>
          <label>Total Price:</label>
          <span>${totalPrice}</span>
        </div>
        <button type="submit">Purchase</button>
      </form>
    </div>
    </React.Fragment>
  )
}

