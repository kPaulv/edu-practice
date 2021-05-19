class TweetList {
    constructor(posts) {
        this._tweets = [];
        this._tweets = posts;
    }

    addAll(posts) {
        let count = 0;
        for(let i = 0; i < posts.length; i++) {
            if(TweetList.validate(posts[i])) {
                this._tweets.push(posts[i]);
                count++;
            }
        }
        console.log(count + ' posts added');
    }

    clear() {
        this._tweets.splice(0, this._tweets.length);
        console.log('tweets array deleted.');
    }

    getPage(skip, top, filterConfig) {
        let filteredPosts = [];
        let fill = false;
        if (filterConfig) {
            if (filterConfig.author !== undefined) {
                filteredPosts = this._tweets.filter(item => item.author === filterConfig.author);
                if(this._tweets.findIndex(item => item.author == filterConfig.author) !== -1) {
                    fill = true;
                }
            }
            if (filterConfig.createdAt !== undefined) {
                filteredPosts = this._tweets.filter(item => item.createdAt === filterConfig.createdAt);
                if(this._tweets.findIndex(item => item.createdAt == filterConfig.createdAt) !== -1) {
                    fill = true;
                }
            }
            if (filterConfig.tags !== undefined) {
                filteredPosts = this._tweets.filter(item => this._compArrays(item.tags, filterConfig.tags));
                if(this._tweets.findIndex(item => item.tags == filterConfig.tags) !== -1) {
                    fill = true;
                }
            }
            if (filterConfig.likes !== undefined) {
                filteredPosts = this._tweets.filter(item => this._compArrays(item.likes, filterConfig.likes));
                if(this._tweets.findIndex(item => item.likes == filterConfig.likes) !== -1) {
                    fill = true;
                }
            }

            if(fill) {
                filteredPosts.sort(this._compDate);
                console.log('method: getPage(), filtered and sorted.');
            }
            else {
                console.log('method: getPage(), not found.');
            }
        }
        else {
            for (let i = skip; i < skip + top; i++) {
                filteredPosts.push(this._tweets[i]);
            }

            filteredPosts.sort(this._compDate);
            console.log('method: getPage(), sorted.');
        }

        return filteredPosts;
    }

    _compDate(a, b) {
        if (a.createdAt > b.createdAt) {
            return 1;
        }
        if (a.createdAt === b.createdAt) {
            return 0;
        }
        if (a.createdAt < b.createdAt) {
            return -1;
        }
    }

    _compArrays(postsTags, filterConfigTags) {
        let equal = true;
        if (postsTags.length === filterConfigTags.length) {
            for (let i = 0; i < postsTags.length; i++) {
                if (postsTags[i] !== filterConfigTags[i]) {
                    equal = false;
                }
            }
        } else {
            equal = false;
        }
        return equal;
    }

    get(id) {
        let post = this._tweets.find(item => item.id == id);
        if (post !== undefined) {
            console.log('method: get(), found.');
            return post;
        } else {
            console.log('method: get(), not found.');
            return null;
        }
    }

    static validate(post) {
        if (typeof post.id === typeof 'string' && post.id !== '' && typeof post.description === typeof 'string' && post.description !== '' &&
            post.createdAt !== undefined && !isNaN(Date.parse(post.createdAt)) && typeof post.author === typeof 'string' &&
            post.author !== '') {
            console.log('method: validate(), valid.');
            return true;
        } else {
            console.log('method: validate(), invalid.');
            return false;
        }
    }

    add(post) {
        if (TweetList.validate(post)) {
            post.id = this._tweets[this._tweets.length - 1].id + 1;
            this._tweets.push(post);
            console.log('method: add(), post added.');
            return true;
        } else {
            console.log('method: add(), post not added.');
            return false;
        }
    }

    edit(id, post) {
        let complete = false;
        if (post.description !== undefined) {
            if(TweetList.validate(this._tweets[this._tweets.findIndex(item => item.id == id)])) {
                this._tweets[this._tweets.findIndex(item => item.id == id)].description = post.description;
                complete = true;
                console.log('method: edit(), description edited.');
            }
        }
        if (post.photoLink !== undefined) {
            if(TweetList.validate(this._tweets[this._tweets.findIndex(item => item.id == id)])) {
                this._tweets[this._tweets.findIndex(item => item.id == id)].photoLink = post.photoLink;
                complete = true;
                console.log('method: edit(), photoLink edited.');
            }
        }
        if (post.tags !== undefined) {
            if(TweetList.validate(this._tweets[this._tweets.findIndex(item => item.id == id)])) {
                this._tweets[this._tweets.findIndex(item => item.id === id)].tags.splice(0);
                this._tweets[this._tweets.findIndex(item => item.id === id)].tags.concat(post.tags);
                complete = true;
                console.log('method: edit(), tags edited.');
            }
        }
        if (post.likes !== undefined) {
            if(TweetList.validate(this._tweets[this._tweets.findIndex(item => item.id == id)])) {
                this._tweets[this._tweets.findIndex(item => item.id === id)].likes.splice(0);
                this._tweets[this._tweets.findIndex(item => item.id === id)].likes.concat(post.likes);
                complete = true;
                console.log('method: edit(), likes edited.');
            }
        }
        if (complete === true) {
            console.log('method: edit(), post edited.');
        } else {
            console.log('method: edit(), post not edited.');
        }
        return complete;
    }

    remove(id) {
        if (this._tweets.find(item => item.id == id)) {
            this._tweets.splice(this._tweets.findIndex(item => item.id === id), 1);
            console.log('method: remove(), post removed.');
            return true;
        } else {
            console.log('method: remove(), post not found.');
            return false;
        }
    }
}