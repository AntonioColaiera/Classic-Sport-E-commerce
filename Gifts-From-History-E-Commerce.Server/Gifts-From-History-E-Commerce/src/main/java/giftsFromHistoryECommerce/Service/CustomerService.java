package giftsFromHistoryECommerce.Service;

import java.util.List;

import giftsFromHistoryECommerce.Model.Customer;

public interface CustomerService {

    // Creates a new customer record in the system
    Customer createCustomer(Customer customer);

    // Retrieves a customer by their unique identifier
    Customer getCustomerById(Long id);

    // Retrieves all customers existing in the system
    List<Customer> getAllCustomers();
    
    // Retrieves a customer by their email address
    Customer getCustomerByEmail(String email);

    // Other specific business operations related to customers
  
}
