package ClassicSportEcommerce.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ClassicSportEcommerce.Model.Manager;
import ClassicSportEcommerce.Service.ManagerService;

import java.util.List;

@RestController
@RequestMapping("/managers")
public class ManagerController {

    private final ManagerService managerService;

    @Autowired
    public ManagerController(ManagerService managerService) {
        this.managerService = managerService;
    }

    @PostMapping("/create")
    public Manager createManager(@RequestBody Manager manager) {
        return managerService.createManager(manager);
    }

    @GetMapping("/{id}")
    public Manager getManagerById(@PathVariable Long id) {
        return managerService.getManagerById(id);
    }

    @GetMapping("/all")
    public List<Manager> getAllManagers() {
        return managerService.getAllManagers();
    }

    // Other specific manager-related endpoints
    // ...
}
