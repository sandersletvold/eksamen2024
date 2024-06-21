package oslomet.data1700.eksamen2024;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Book {
    private String ISBN;
    private String title;
    private String author;
    private Integer releaseYear;
    private Double rating;
}
