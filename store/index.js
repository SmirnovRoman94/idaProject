import port from '~/store/works.json'

export const state = () => ({
    works: port
})
export const actions = {
    addWork({commit}, work){
        commit('adWork', work)
    },
    deleteWork({commit}, work){
        commit('delWork', work)
    },
    SortMin({commit}){
        commit ('sortMini')
    },
    SortName({commit}){
        commit('sortNam')
    },
    SortMax({commit}){
        commit('sortMaximum')
    }
}
export const mutations = {
    adWork(state, work){
        state.works.push(work)
    },
    delWork(state, work){
        const index = state.works.findIndex(n => n.id === work.id);
      if (index !== -1) {
        state.works.splice(index, 1);
      }
    },
    sortMini(state){
        let a = state.works
        let sort = a.sort((a,b) => a.price > b.price ? 1 : -1)
    },
    sortNam(state){
        let a = state.works
        let sort = a.sort((a,b) => a.title > b.title ? 1 : -1)
    },
    sortMaximum(state){
        let a = state.works
        let sort = a.sort((a,b) => a.price < b.price ? 1 : -1)
    }
}
export const getters = {
    getWorks (state) {
        return state.works
    }
}