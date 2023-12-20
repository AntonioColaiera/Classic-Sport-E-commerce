package ClassicSportEcommerce.Service;

import ClassicSportEcommerce.Model.Item;
import java.util.List;

public interface ItemService {

    Item createItem(Item item);

    Item getItemById(Long id);

    List<Item> getAllItems();
    
    List<Item> findByTypology(String typology);
}
