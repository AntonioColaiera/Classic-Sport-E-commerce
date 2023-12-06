package ClassicSportEcommerce.Model;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "manager")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Manager {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_manager")
    private Long id;

    @Column(name = "Name", nullable = false, length = 100)
    private String name;

    @Column(name = "Email", nullable = false, length = 255)
    private String email;

    @Column(name = "Passworld", nullable = false, length = 255)
    private String password;

    @Column(name = "Role", nullable = false, length = 45)
    private String role;
    
   
}
