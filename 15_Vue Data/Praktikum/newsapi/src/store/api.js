import axios from "axios"

const state = () => ({
    list: [],
});

const mutations = {
    setList(state, param){
        state.list = param;
    },
};

const actions = {
    fetchList(store){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0ab9db08d50f465fa9cff55d959a99db').then((response) => {
            store.commit("setList", response.data.articles);
            console.log(response.data.articles);
        });
    },
    
};

export default {
    state,
    mutations,
    actions,
}