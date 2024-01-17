package giftsFromHistoryECommerce.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import giftsFromHistoryECommerce.Model.Customer;
import giftsFromHistoryECommerce.Service.CustomerService;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private final CustomerService customerService;

    // Constructor injection of CustomerService
    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    // Endpoint to create a new customer
    @PostMapping("/create")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer);
    }

    // Endpoint to fetch a customer by ID
    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable Long id) {
        return customerService.getCustomerById(id);
    }

    // Endpoint to fetch all customers
    @GetMapping("/all")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    
    @PostMapping("/login")
    public ResponseEntity<Customer> authenticate(@RequestBody Customer customer) {
      Customer existingCustomer = customerService.getCustomerByEmail(customer.getEmail());
      if (existingCustomer != null && existingCustomer.getPassword().equals(customer.getPassword())) {
        return new ResponseEntity<>(existingCustomer, HttpStatus.OK);
      } else {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
    }

    // Other endpoints for specific customer operations
    // ...
}
