
import axios from 'axios';

const PaymentInstances = axios.create({
  baseURL: "http://localhost:8080/payment", 
});

export { PaymentInstances };
