package giftsFromHistoryECommerce.Service;

import java.util.List;

import giftsFromHistoryECommerce.Model.Item;

public interface ItemService {

    Item createItem(Item item);

    Item getItemById(Long id);

    List<Item> getAllItems();
    
    List<Item> findByTypology(String typology);

    void deleteItem(Long id);
}
