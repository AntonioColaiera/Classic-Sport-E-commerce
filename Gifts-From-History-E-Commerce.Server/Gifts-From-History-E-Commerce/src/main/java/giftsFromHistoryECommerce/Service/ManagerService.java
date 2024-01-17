package giftsFromHistoryECommerce.Service;

import java.util.List;

import giftsFromHistoryECommerce.Model.Manager;

public interface ManagerService {

    Manager createManager(Manager manager);

    Manager getManagerById(Long id);

    List<Manager> getAllManagers();
}
