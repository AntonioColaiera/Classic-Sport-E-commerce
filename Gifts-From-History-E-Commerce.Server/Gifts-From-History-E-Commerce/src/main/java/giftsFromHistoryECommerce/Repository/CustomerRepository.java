package giftsFromHistoryECommerce.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import giftsFromHistoryECommerce.Model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    
    // This interface extends JpaRepository, which provides CRUD functionality for the Customer entity.

    // This method signature declares a custom query method that retrieves a Customer entity by email.
    // It returns an Optional<Customer> object, which may or may not contain a Customer.
    // The method name follows Spring Data's method naming conventions for query creation.
    Optional<Customer> findByEmail(String email);
}
