package ClassicSportEcommerce.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import ClassicSportEcommerce.Model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    

    Optional<Customer> findByEmail(String email);
}
