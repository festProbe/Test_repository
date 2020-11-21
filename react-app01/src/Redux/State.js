let state =
    {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are u'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],

        posts: [
            {id: 1, message: 'Hi, how are u?', likesCount: 12, repostsCount: 3},
            {id: 2, message: 'Its my first post', likesCount: 11, repostsCount: 5},
            {id: 3, message: 'Bla bla', likesCount: 151, repostsCount: 55},
            {id: 4, message: 'Da da', likesCount: 1, repostsCount: 3}
        ]
    }

    export default state;