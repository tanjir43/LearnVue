import {createStore} from 'vuex'
import axiosClient from '../axios';

const tmpSurveys = [
  {
    id              : 100,
    title           : 'This is one',
    slug            : 'This-is-one',
    image           : 'https://picsum.photos/200/300',
    description     : 'This is a description',
    created_at      : '2021-05-01 12:00:00',
    updated_at      : '2021-05-01 12:00:00',
    expired_date    : '2021-05-01 12:00:00',
    questions       : [
      {
        id          : 1,
        type        : 'select',
        question    : 'From which country you are?',
        description : null,
        data : {
          options : [
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Bangladesh'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'India'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Pakistan'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Srilanka'
            }
          ]
        }
      }
    ]
  },
  {
    id              : 101,
    title           : 'This is one',
    slug            : 'This-is-one',
    image           : 'https://picsum.photos/200/300',
    description     : 'This is a description',
    created_at      : '2021-05-01 12:00:00',
    updated_at      : '2021-05-01 12:00:00',
    expired_date    : '2021-05-01 12:00:00',
    questions       : [
      {
        id          : 1,
        type        : 'select',
        question    : 'From which country you are?',
        description : null,
        data : {
          options : [
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Bangladesh'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'India'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Pakistan'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Srilanka'
            }
          ]
        }
      }
    ]
  },
  {
    id              : 101,
    title           : 'This is one',
    slug            : 'This-is-one',
    image           : 'https://picsum.photos/200/300',
    description     : 'This is a description',
    created_at      : '2021-05-01 12:00:00',
    updated_at      : '2021-05-01 12:00:00',
    expired_date    : '2021-05-01 12:00:00',
    questions       : [
      {
        id          : 1,
        type        : 'select',
        question    : 'From which country you are?',
        description : null,
        data : {
          options : [
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Bangladesh'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'India'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Pakistan'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Srilanka'
            }
          ]
        }
      }
    ]
  },
  {
    id              : 101,
    title           : 'This is one',
    slug            : 'This-is-one',
    image           : 'https://picsum.photos/200/300',
    description     : 'This is a description',
    created_at      : '2021-05-01 12:00:00',
    updated_at      : '2021-05-01 12:00:00',
    expired_date    : '2021-05-01 12:00:00',
    questions       : [
      {
        id          : 1,
        type        : 'select',
        question    : 'From which country you are?',
        description : null,
        data : {
          options : [
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Bangladesh'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'India'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Pakistan'
            },
            {
              uuid : '12324356-34534534345-34534534',
              text : 'Srilanka'
            }
          ]
        }
      }
    ]
  }
];

const store = createStore({
    state       : {
        user: {
           data : {},
           token: sessionStorage.getItem("TOKEN"),
          },
        surveys: [...tmpSurveys],
    },
    getters     : {},
    actions: {
      register({commit},user) {
        return axiosClient.post('/register',user)
        .then(({data}) => {
          commit('setUser',data);
          return data;
        })
      },
      login({commit}, user) {
        return axiosClient.post('/login', user)
          .then(({data}) => {
            commit('setUser', data);
            return data;
          })
      },
      logout({commit}) {
        return axiosClient.post('/logout')
          .then(response => {
            commit('logout')
            return response;
          })
      },
    },
    
      
    mutations   : {
      logout: (state) => {
        state.user.token = null;
        state.user.data = {};
        sessionStorage.removeItem("TOKEN");
      },
        setUser : (state, userData) => {
            state.user.data  = userData.user;
            state.user.token = userData.token;
            sessionStorage.setItem('TOKEN',userData.token);
        }
    },
    modules     : {}
});

export default store;



/* by fetch we can pass the data like that in actions

register({ commit }, user) {
  return fetch(`http://localhost:8000/api/register`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => {
      commit('setUser', res);
      return res;
    });
} */