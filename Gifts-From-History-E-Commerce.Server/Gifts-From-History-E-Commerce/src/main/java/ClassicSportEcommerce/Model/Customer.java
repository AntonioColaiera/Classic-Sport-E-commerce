package ClassicSportEcommerce.Model;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "customer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_customer")
    private Long id;

    @Column(name = "First_name", length = 255)
    private String firstName;

    @Column(name = "Last_name", length = 255)
    private String lastName;

    @Column(name = "Email", nullable = false, length = 255)
    private String email;

    @Column(name = "Password", nullable = false, length = 255)
    private String password;

    @Column(name = "Country", length = 255)
    private String country;

    @Column(name = "City", length = 255)
    private String city;

    @Column(name = "Address", length = 255)
    private String address;

    @Column(name = "Phone", length = 20)
    private String phone;
}
