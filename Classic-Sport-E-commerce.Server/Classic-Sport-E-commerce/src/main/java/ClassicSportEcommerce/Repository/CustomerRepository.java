package ClassicSportEcommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ClassicSportEcommerce.Model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // Custom queries or methods related to Customer entity can be defined here if needed
}
