export const state = () => ({
    list: [],
});

export const mutations = {
    setList(state, param){
        state.list = param;
    },
};

export const actions = {
    async getApiList(store){
        const res = await this.$axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0ab9db08d50f465fa9cff55d959a99db')
        store.commit("setList", res.data.articles);
    },
    async getAppleList(store){
        const res = await this.$axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-04-05&to=2022-04-05&sortBy=popularity&apiKey=0ab9db08d50f465fa9cff55d959a99db')
        store.commit("setList", res.data.articles);
    },
    async getTeslaList(store){
        const res = await this.$axios.get('https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=0ab9db08d50f465fa9cff55d959a99db')
        store.commit("setList", res.data.articles);
    },
    async getWallList(store){
        const res = await this.$axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0ab9db08d50f465fa9cff55d959a99db')
        store.commit("setList", res.data.articles);
    },
    async getTechList(store){
        const res = await this.$axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ab9db08d50f465fa9cff55d959a99db')
        store.commit("setList", res.data.articles);
    },
};