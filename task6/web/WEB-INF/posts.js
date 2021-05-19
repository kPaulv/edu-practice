var posts = (function () {
    let posts = [
        {
            id: '1',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:13:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '2',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:14:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '3',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:15:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '4',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:16:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '5',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:17:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '6',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:18:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '7',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:19:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '8',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:20:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '9',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:21:00'),
            author: 'Иван Иванов',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: []
        },
        {
            id: '10',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:22:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: []
        },
        {
            id: '11',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:23:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
        },
        {
            id: '12',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:24:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ]
        },
        {
            id: '13',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:25:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ]
        },
        {
            id: '14',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:26:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: []
        },
        {
            id: '15',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:27:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: []
        },
        {
            id: '16',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:28:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ]
        },
        {
            id: '17',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:29:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ]
        },
        {
            id: '18',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:30:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ]
        },
        {
            id: '19',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:31:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [],
            likes: [
                'Андрей Андреев'
            ]
        },
        {
            id: '20',
            description: 'Задача организации, в особенности же укрепление и развитие структуры играет важную роль ' +
                'в формировании существенных финансовых и административных условий.',
            createdAt: new Date('2020-03-22T13:32:00'),
            author: 'Пётр Петров',
            photoLink: 'https://sun9-28.userapi.com/c4449/u136559210/a_6471ce12.jpg?ava=1',
            tags: [
                '#JavaScript'
            ],
            likes: [
                'Андрей Андреев'
            ]
        },
    ];

    function compDate (a, b) {
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

    function compArrays (postsTags, filterConfigTags) {
        let equal = true;
        if (filterConfigTags != null && postsTags.length === filterConfigTags.length) {
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

    function validatePost (post) {
        if (typeof post.id === 'string' && post.id !== '' && typeof post.description === 'string'
            && post.description !== '' && post.createdAt !== undefined && !isNaN(Date.parse(post.createdAt)) && typeof post.author === 'string'
            && post.author !== '') {
            console.log('method: validatePost, valid.');
            return true;
        } else {
            console.log('method: validatePost, invalid.');
            return false;
        }
    }

    return {
        getPost: function (id) {
            let post = posts.find(item => item.id == id);
            if(post !== undefined) {
                console.log('method: getPost, found.');
                return post;
            }
            else {
                console.log('method: getPost, not found.');
                return null;
            }
        },

        removePost: function (id) {
            if(posts.find(item => item.id == id)) {
                posts.splice(posts.findIndex(item => item.id === id), 1);
                console.log('method: removePost, post removed.');
                return true;
            }
            else {
                console.log('method: removePost, post not found.')
                return false;
            }
        },

        getPosts: function (skip, top, filterConfig) {
            let filteredPosts = [];
            let fill = false;
            if (filterConfig) {
                if (filterConfig.author !== undefined) {
                    filteredPosts = posts.filter(item => item.author === filterConfig.author);
                    if(posts.findIndex(item => item.author == filterConfig.author) !== -1) {
                        fill = true;
                    }
                }
                if (filterConfig.createdAt !== undefined) {
                    filteredPosts = posts.filter(item => item.createdAt === filterConfig.createdAt);
                    if(posts.findIndex(item => item.createdAt == filterConfig.createdAt) !== -1) {
                        fill = true;
                    }
                }
                if (filterConfig.tags !== undefined) {
                    filteredPosts = posts.filter(item => compArrays(item.tags, filterConfig.tags));
                    if(posts.findIndex(item => item.tags == filterConfig.tags) !== -1) {
                        fill = true;
                    }
                }
                if (filterConfig.likes !== undefined) {
                    filteredPosts = posts.filter(item => compArrays(item.likes, filterConfig.likes));
                    if(posts.findIndex(item => item.likes == filterConfig.likes) !== -1) {
                        fill = true;
                    }
                }
                if(fill) {
                    filteredPosts.sort(compDate);
                    console.log('method: getPosts, filtered and sorted.');
                }
                else {
                    console.log('method: getPosts, not found.');
                }
            }
            else {
                for (let i = skip; i < skip + top; i++) {
                    filteredPosts.push(posts[i]);
                }
                filteredPosts.sort(compDate);
                console.log('method: getPost, sorted.');
            }

            return filteredPosts;
        },

        addPost: function (post) {
            if (validatePost(post)) {
                post.id = posts[posts.length - 1].id + 1;
                post.createdAt = new Date();
                posts.push(post);
                console.log('method: addPost, post added.');
                return true;
            } else {
                console.log('method: addPost, post not added.');
                return false;
            }
        },

        editPost: function (id2, post) {
            let complete = false;
            if (post.description !== null) {
                let ind = posts.findIndex(item => item.id == id2);
                if(validatePost(posts[ind])) {
                    posts[ind].description = post.description;
                    complete = true;
                    console.log('method: editPost, description edited.');
                }
            }
            if (post.photoLink !== null) {
                if(validatePost(posts[posts.findIndex(item => item.id == id2)])) {
                    posts[posts.findIndex(item => item.id == id2)].photoLink = post.photoLink;
                    complete = true;
                    console.log('method: editPost, photoLink edited.');
                }
            }
            if (post.tags !== null) {
                if(validatePost(posts[posts.findIndex(item => item.id == id2)])) {
                    posts[posts.findIndex(item => item.id == id2)].tags.splice(0);
                    posts[posts.findIndex(item => item.id == id2)].tags.concat(post.tags);
                    complete = true;
                    console.log('method: editPost, tags edited.');
                }
            }
            if (post.likes !== null) {
                if(validatePost(posts[posts.findIndex(item => item.id == id2)])) {
                    posts[posts.findIndex(item => item.id == id2)].likes.splice(0);
                    posts[posts.findIndex(item => item.id == id2)].likes.concat(post.likes);
                    complete = true;
                    console.log('method: editPost, likes edited.');
                }
            }
            if(complete === true) {
                console.log('method: editPost, post edited.');
            }
            else {
                console.log('method: editPost, post not edited.');
            }
            return complete;
        },
    }
})();
