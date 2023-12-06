package ClassicSportEcommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ClassicSportEcommerce.Model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
    // Custom queries or methods related to Item entity can be defined here if needed
}
