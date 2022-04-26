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
    fetchApple(store){
        axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-04-05&to=2022-04-05&sortBy=popularity&apiKey=0ab9db08d50f465fa9cff55d959a99db').then((response) => {
            store.commit("setList", response.data.articles);
            console.log(response.data.articles);
        });
    },
    fetchTesla(store){
        axios.get('https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=0ab9db08d50f465fa9cff55d959a99db').then((response) => {
            store.commit("setList", response.data.articles);
            console.log(response.data.articles);
        });
    },
    fetchTech(store){
        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ab9db08d50f465fa9cff55d959a99db').then((response) => {
            store.commit("setList", response.data.articles);
            console.log(response.data.articles);
        });
    },
    fetchWall(store){
        axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0ab9db08d50f465fa9cff55d959a99db').then((response) => {
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