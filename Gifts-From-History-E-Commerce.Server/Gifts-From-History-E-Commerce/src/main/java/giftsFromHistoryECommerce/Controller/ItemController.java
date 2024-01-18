package giftsFromHistoryECommerce.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import giftsFromHistoryECommerce.Model.Item;
import giftsFromHistoryECommerce.Service.ItemService;

import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemController {

    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @PostMapping("/create")
    public Item createItem(@RequestBody Item item) {
        return itemService.createItem(item);
    }

    @GetMapping("/{id}")
    public Item getItemById(@PathVariable Long id) {
        return itemService.getItemById(id);
    }
    
    @GetMapping("/byTypology/{typology}")
    public List<Item> getItemsByTypology(@PathVariable String typology) {
        return itemService.findByTypology(typology);
    }

    @GetMapping("/all")
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }
    
    @DeleteMapping("/{id}")
    public String deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return "Item with ID " + id + " deleted successfully";
    }

    // Other specific item-related endpoints
    // ...
}

