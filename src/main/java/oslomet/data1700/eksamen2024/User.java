package oslomet.data1700.eksamen2024;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    private Integer id;
    private String firstname;
    private String surname;
    private String phoneNumber;
    private String email;
    private String password;
    private Date birthDate;

    public User(String firstname, String surname, String phoneNumber, String email, String password, Date birthDate) {
        this.firstname = firstname;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
    }
}
