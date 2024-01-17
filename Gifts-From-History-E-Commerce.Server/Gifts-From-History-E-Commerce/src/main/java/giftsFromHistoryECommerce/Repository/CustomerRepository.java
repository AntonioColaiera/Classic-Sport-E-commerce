package giftsFromHistoryECommerce.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import giftsFromHistoryECommerce.Model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    

    Optional<Customer> findByEmail(String email);
}
