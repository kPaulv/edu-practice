import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class NameServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        //request.getRequestDispatcher("status.jsp").forward(request, response);
        String name = request.getParameter("name");
        PrintWriter pw = response.getWriter();
        try {
            if(name.length() <= 100) {
                pw.println("Name is " + name);
            } else {
                pw.println("Error. Name must be less than 100 symbols.");
            }
        }
        finally {
            pw.close();
        }
    }
}
