package giftsFromHistoryECommerce.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "item")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_item")
    private Long id;

    @Column(name = "Tipology", length = 100)
    private String typology;
    
    @Column(name = "Image", nullable = false, length = 500)
    private String image;

    @Column(name = "Title", nullable = false, length = 200)
    private String title;

    @Column(name = "Price", nullable = false, precision = 10, scale = 0)
    private Long price;

    @Column(name = "Information", length = 5000)
    private String information;

    @Column(name = "Size", length = 45)
    private String size;

    @Column(name = "Quantity", nullable = false)
    private Integer quantity;
    
}
