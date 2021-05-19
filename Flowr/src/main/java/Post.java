import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Post {
    private String id;
    private String description;
    private Date createdAt;
    private String author;
    private String photoLink;
    private List<String> tags;
    private List<String> likes;

    public Post(String id, String description, Date createdAt, String author, String photoLink,
         List<String> tags, List<String> likes) {
        this.id = id;
        this.description = description;
        this.author = author;
        this.createdAt = createdAt;
        this.photoLink = photoLink;
        this.tags = new ArrayList<>(tags);
        this.likes = new ArrayList<>(likes);
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getAuthor() {
        return author;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public List<String> getLikes() {
        return likes;
    }

    public List<String> getTags() {
        return tags;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setLikes(List<String> likes) {
        if(!this.likes.isEmpty()) {
            this.likes.clear();
        }
        this.likes.addAll(likes);
        //this.likes = likes;
    }

    public void setTags(List<String> tags) {
        if(!this.tags.isEmpty()) {
            this.tags.clear();
        }
        this.tags.addAll(tags);
        //this.tags = tags;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
