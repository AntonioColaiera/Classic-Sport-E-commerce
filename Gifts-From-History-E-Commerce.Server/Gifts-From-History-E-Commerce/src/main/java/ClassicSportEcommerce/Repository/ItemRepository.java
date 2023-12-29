package ClassicSportEcommerce.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import ClassicSportEcommerce.Model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
	 List<Item> findByTypology(String typology);
}
