package oslomet.data1700.eksamen2024;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class EksamenController {
    @Autowired
    private JdbcTemplate db;

    // Oppgave 3
    @GetMapping("/getBooks")
    public List<Book> getBooks() {
        String sql = "SELECT * FROM Books";
        List<Book> allBooks = db.query(sql, new BeanPropertyRowMapper<>(Book.class));
        return allBooks;
    }

    // Ikke en del av eksamensoppgavene
    @GetMapping("/getUsers")
    public List<User> getUsers() {
        String sql = "SELECT * FROM Users";
        List<User> allUsers = db.query(sql, new BeanPropertyRowMapper<>(User.class));
        return allUsers;
    }

    @PostMapping("/saveUser")
    public void saveUser(User user) {
        String sql = "INSERT INTO Users (id, firstname, lastname, date_Of_Birth, phone_Number, email, password) VALUES (?,?,?,?,?,?,?)";
        db.update(sql, 1, user.getFirstname(), user.getLastname(), user.getDateOfBirth(), user.getPhoneNumber(), user.getEmail(), user.getPassword());
        // MÅ FIKSES SENERE! Fikk ikke auto increment for id til å funke.
        // Tok derfor en hatløsning og definerte id til 1 her.
        // Dette hindrer i å opprette flere brukere da id er PK i tabellen...
    }

    @PostMapping("/saveBook")
    public void saveBook(Book book) {
        String sql = "INSERT INTO Books (id, title, author, release_Year, rating) VALUES (?,?,?,?,?)";
        db.update(sql, 1, book.getTitle(), book.getAuthor(), book.getReleaseYear(), book.getRating());
        // MÅ FIKSES SENERE! Fikk ikke auto increment for id til å funke.
        // Tok derfor en hatløsning og definerte id til 1 her.
        // Dette hindrer i å opprette flere brukere da id er PK i tabellen...
    }
}
