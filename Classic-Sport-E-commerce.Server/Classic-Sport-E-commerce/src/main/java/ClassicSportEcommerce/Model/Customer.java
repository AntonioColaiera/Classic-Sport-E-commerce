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
    @Column(name = "Id_customer")
    private Long id;

    @Column(name = "Name", nullable = false, length = 100)
    private String name;

    @Column(name = "Email", nullable = false, length = 255)
    private String email;

    @Column(name = "Password", nullable = false, length = 255)
    private String password;

    @Column(name = "Address", nullable = false, length = 255)
    private String address;

    @Column(name = "Phone")
    private Integer phone;

    @Column(name = "Payment_info", length = 300)
    private String paymentInfo;
    
}
