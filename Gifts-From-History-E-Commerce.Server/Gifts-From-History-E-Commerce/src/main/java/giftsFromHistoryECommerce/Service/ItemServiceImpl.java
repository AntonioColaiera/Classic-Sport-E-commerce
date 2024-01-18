package giftsFromHistoryECommerce.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import giftsFromHistoryECommerce.Model.Item;
import giftsFromHistoryECommerce.Repository.ItemRepository;
import jakarta.persistence.EntityNotFoundException;

import java.util.List;

@Service
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;

    @Autowired
    public ItemServiceImpl(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Override
    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public Item getItemById(Long id) {
        return itemRepository.findById(id).orElse(null);
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }
    
    @Override
    public List<Item> findByTypology(String typology) {
        return itemRepository.findByTypology(typology);
    }

    @Override
    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
}

