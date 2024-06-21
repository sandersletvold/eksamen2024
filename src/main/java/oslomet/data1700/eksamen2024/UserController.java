package oslomet.data1700.eksamen2024;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private JdbcTemplate db;

    @PostMapping("/saveUser")
    public void saveUser(User user) {
        String sql = "INSERT INTO Users (firstname, surname, phoneNumber, email, birthDate) VALUES (?,?,?,?,?)";
        db.update(sql, user.getFirstname(), user.getSurname(), user.getPhoneNumber(), user.getEmail(), user.getBirthDate());
    }
}
