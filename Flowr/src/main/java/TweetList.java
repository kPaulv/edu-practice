import java.util.*;
import java.util.stream.Collectors;

public class TweetList {
    private List<Post> tweets;

    public TweetList() {
        this.tweets = new ArrayList<>();

        List<String> tags = new ArrayList<>();
        tags.add("#javascript");
        List<String> likes = new ArrayList<>();
        likes.add("Ivan Ivanov");

        Post post = new Post("1", "Задача организации, в особенности же укрепление и развитие ]" +
                "структуры играет важную роль в формировании существенных финансовых и административных условий.",
                new Date(), "Ivan Ivanov",
                "https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1", tags, likes);
        tweets.add(post);
        tags.add("#programming");
        likes.add("Пётр Петров");
        post = new Post("2", "Задача организации, в особенности же укрепление и развитие ]" +
                "структуры играет важную роль в формировании существенных финансовых и административных условий.",
                new Date(), "Андрей Андреев",
                "https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1", tags, likes);
        tweets.add(post);
    }

    public TweetList(List<Post> posts) {
        addAll(posts);
    }

    public void addAll(List<Post> posts) {
        for(Post item : posts) {
            if(validate(item)) {
                tweets.add(item);
            }
        }
    }

    public boolean validate(Post post) {
        if(post.getId() != null && !post.getId().equals("") && post.getDescription() != null &&
                !post.getDescription().equals("") && post.getDescription().length() < 200 &&
                post.getCreatedAt() != null && post.getAuthor() != null && !post.getAuthor().equals("")) {
            return true;
        } else {
            return false;
        }
    }

    public void clear() {
        tweets.clear();
    }

    public List<Post> getPage(int skip, int top, Post filterConfig) {
        List<Post> filteredPosts = new ArrayList<>();
        boolean fill = false;

        if (filterConfig != null) {
            if (filterConfig.getAuthor() != null) {
                filteredPosts = tweets.stream().filter(item -> item.getAuthor().equals(filterConfig.getAuthor())).collect(Collectors.toList());
                fill = true;
            }
            if (filterConfig.getCreatedAt() != null) {
                filteredPosts = tweets.stream().filter(item -> item.getCreatedAt().equals(filterConfig.getCreatedAt())).collect(Collectors.toList());
                fill = true;
            }
            if (filterConfig.getTags() != null && !filterConfig.getTags().isEmpty()) {
                for(Post i : tweets) {
                    if(i.getTags().equals(filterConfig.getTags())) {
                        filteredPosts.add(i);
                    }
                }
                fill = true;
            }
            if (filterConfig.getLikes() != null && !filterConfig.getLikes().isEmpty()) {
                for(Post i : tweets) {
                    if(i.getLikes().equals(filterConfig.getLikes())) {
                        filteredPosts.add(i);
                    }
                }
                fill = true;
            }

            if(fill) {
                filteredPosts = filteredPosts.stream().sorted(new Comparator<Post>() {
                    @Override
                    public int compare(Post o1, Post o2) {
                        if (o1.getCreatedAt().after(o2.getCreatedAt())) {
                            return 1;
                        }
                        else if (o1.getCreatedAt().equals(o2.getCreatedAt())) {
                            return 0;
                        }
                        else {
                            return -1;
                        }
                    }
                }).collect(Collectors.toList());

                filteredPosts = filteredPosts.subList(skip, skip + top);
                System.out.println("method: getPage(), filtered and sorted.");
            }
            else {
                System.out.println("method: getPage(), not found.");
            }
        }
        else {
            for (int i = skip; i < skip + top; i++) {
                filteredPosts.add(tweets.get(i));
            }

            filteredPosts = filteredPosts.stream().sorted(new Comparator<Post>() {
                @Override
                public int compare(Post o1, Post o2) {
                    //return 0;
                    if (o1.getCreatedAt().after(o2.getCreatedAt())) {
                        return 1;
                    }
                    else if (o1.getCreatedAt().equals(o2.getCreatedAt())) {
                        return 0;
                    }
                    else {
                        return -1;
                    }
                }
            }).collect(Collectors.toList());
        }

        return filteredPosts;
    }

   public Post get(String id) {
       for(Post item : tweets) {
           if(item.getId().equals(id)) {
               return item;
           }
       }
       return null;
   }

    public boolean addPost(Post post) {
        if (validate(post)) {
            tweets.add(post);
            return true;
        } else {
            return false;
        }
    }

    public boolean edit(String id, Post post) {
        boolean complete = false;
        if (post.getDescription() != null) {
            if(validate(this.get(id))) {
                this.get(id).setDescription(post.getDescription());
                complete = true;
            }
        }
        if (post.getPhotoLink() != null) {
            if(validate(this.get(id))) {
                this.get(id).setPhotoLink(post.getPhotoLink());
                complete = true;
            }
        }
        if (post.getTags() != null) {
            if(validate(this.get(id))) {
                this.get(id).setTags(post.getTags());
                complete = true;
            }
        }
        if (post.getLikes() != null) {
            if(validate(this.get(id))) {
                this.get(id).setLikes(post.getLikes());
                complete = true;
            }
        }
        if (complete) {
            System.out.println("method: edit(), post edited.");
            //console.log('method: edit(), post edited.');
        } else {
            System.out.println("method: edit(), post not edited.");
            //console.log('method: edit(), post not edited.');
        }
        return complete;
    }

    public boolean remove(String id) {
        if (this.get(id) != null) {
            this.tweets.remove(this.get(id));
            System.out.println("method: remove(), post removed.");
            return true;
        } else {
            System.out.println("method: remove(), post not found.");
            return false;
        }
    }
}
