package ClassicSportEcommerce.Service;

import ClassicSportEcommerce.Model.Manager;
import java.util.List;

public interface ManagerService {

    Manager createManager(Manager manager);

    Manager getManagerById(Long id);

    List<Manager> getAllManagers();
}
