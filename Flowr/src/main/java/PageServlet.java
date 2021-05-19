import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class PageServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //request.getRequestDispatcher("/page.jsp").forward(request, response);
        getServletContext().getRequestDispatcher("/WEB-INF/page.html").forward(request, response);
        //getServletContext().getRealPath("/web/WEB-INF/page.html")
    }
}
