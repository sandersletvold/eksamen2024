package oslomet.data1700.eksamen2024;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @Autowired
    private JdbcTemplate db;

    @Autowired
    private HttpSession session;

    // CREATE USER
    @PostMapping("/saveUser")
    public void saveUser(User user) {
        String sql = "INSERT INTO Users (firstname, surname, phoneNumber, email, birthDate, password) VALUES (?,?,?,?,?,?)";
        db.update(sql, user.getFirstname(), user.getSurname(), user.getPhoneNumber(), user.getEmail(), user.getBirthDate(), user.getPassword());
    }

    // LOG IN
    @GetMapping("/logIn")
    public boolean logIn(User user) {
        String sql = "SELECT COUNT(*) FROM Users WHERE email=? AND password=?";
        try {
            int foundUser = db.queryForObject(sql, Integer.class, user.getEmail(), user.getPassword());
            if (foundUser > 0) {
                session.setAttribute("loggedIn", true);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
    }

    @GetMapping("/logOut")
    public String logOut() {
        session.removeAttribute("loggedIn");
        return "Logged out!";
    }

    // SAVE BOOK
    @PostMapping("/saveBook")
    public void saveBook(Book book) {
        if (session.getAttribute("loggedIn") != null) {
            String sql = "INSERT INTO Books (ISBN, title, author, releaseYear, rating) VALUES (?,?,?,?,?)";
            db.update(sql, book.getISBN(), book.getTitle(), book.getAuthor(), book.getReleaseYear(), book.getRating());
        }
    }
}
