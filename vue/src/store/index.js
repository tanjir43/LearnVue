import {createStore} from 'vuex'

const store = createStore({
    state       : {
        user: {
            data: {
                name    : 'John Doe',
                email   : 'johndoe@gmail.com',
                imageUrl: 'https://via.placeholder.com/150',
            },
            token: '123',
          },
    },
    getters     : {},
    actions     : {},
    mutations   : {
        logout  : (state) => {
            state.user.data = {};
            state.user.token = null;
        },
    },
    modules     : {}
});

export default store;