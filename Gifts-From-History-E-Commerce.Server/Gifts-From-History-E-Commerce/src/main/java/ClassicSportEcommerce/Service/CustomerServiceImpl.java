package ClassicSportEcommerce.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ClassicSportEcommerce.Model.Customer;
import ClassicSportEcommerce.Repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;

    // Constructor injecting CustomerRepository
    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    // Logic to create a new customer
    @Override
    public Customer createCustomer(Customer customer) {
        // Implement business logic for creating a customer
        return customerRepository.save(customer);
    }

    // Logic to fetch a customer by ID
    @Override
    public Customer getCustomerById(Long id) {
        // Implement business logic to retrieve a customer by ID
        return customerRepository.findById(id).orElse(null);
    }

    // Logic to retrieve all customers
    @Override
    public List<Customer> getAllCustomers() {
        // Implement business logic to fetch all customers
        return customerRepository.findAll();
    }

    // Logic to fetch a customer by email
    @Override
    public Customer getCustomerByEmail(String email) {
        Optional<Customer> customerOptional = customerRepository.findByEmail(email);
        return customerOptional.orElse(null);
    }

    // Other specific business operations implementations
}
