package giftsFromHistoryECommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import giftsFromHistoryECommerce.Model.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Long> {
    // Custom queries or methods related to Manager entity can be defined here if needed
}
