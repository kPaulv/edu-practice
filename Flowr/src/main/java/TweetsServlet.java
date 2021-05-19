import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class TweetsServlet extends HttpServlet {

    /*Например, для отправки, удаления и получения конкретного поста должен быть создан
    один сервлет с маппингом “/tweets”. Т.е.
            Получение: GET /tweets/{id} или /tweets?id={id}
    Удаление: DELETE /tweets/{id} или /tweets?id={id}
    Для получения страницы твитов: POST /tweets/search
    Тестировать полученный REST API с помощью Postman или Fiddler*/
    private TweetList tweetList = new TweetList();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //GET /tweets/{id} или /tweets?id={id}
        String postId = request.getParameter("id");
        PrintWriter pw = response.getWriter();
        try {
            /*if(postId.length() <= 100) {
                pw.println("Name is " + name);
            } else {
                pw.println("Error. Name must be less than 100 symbols.");
            }*/
            if(!postId.equals("")) {
                TweetList tweetList = new TweetList();
                Post post = tweetList.get(postId);
                System.out.println("id: " + post.getId() + ", author: " + post.getAuthor());
                pw.println("id: " + post.getId() + ", author: " + post.getAuthor());
            }
            else {
                System.out.println("wrong id.");
                pw.println("wrong id.");
            }
        }
        finally {
            pw.close();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        response.setContentType("text");

        PrintWriter pw = response.getWriter();
        try {
            //TweetList tweetList = new TweetList();
            //pw.println("{\"success\" : true}");
            List<Post> page = tweetList.getPage(0, 1, null);
            for(Post item : page) {
                //pw.println("{\"success\" : false}");
                pw.println("{\"id\" : " + item.getId() +"," + "\"author\" : " + item.getAuthor() + "}");
            }
            //pw.println("{\"success\" : true}");
        }
        finally {
            pw.close();
        }
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        //String postId = request.getParameter("id");
        String postId = request.getContextPath();
        TweetList tweetList = new TweetList();
        tweetList.remove(postId);
        PrintWriter pw = response.getWriter();
        try {
            pw.println("deleted.");
        } finally {
            pw.close();
        }
    }
}
