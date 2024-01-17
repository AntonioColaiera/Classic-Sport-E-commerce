package giftsFromHistoryECommerce.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import giftsFromHistoryECommerce.Model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
	 List<Item> findByTypology(String typology);
}
