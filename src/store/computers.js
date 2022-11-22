export default {
  namespaced: true,
  state: () => ({  
    
        compList:[
            {
                id:'1',
                imgSrc:'https://content1.rozetka.com.ua/goods/images/big_tile/248481399.jpg',
                title:'Personal computer 1',
                price:'11',
            },
            {
                id:'2',
                imgSrc:'https://content.rozetka.com.ua/goods/images/big_tile/285886587.jpg',
                title:'Personal computer 2',
                price:'22',
            },
            {
                id:'3',
                imgSrc:'https://content1.rozetka.com.ua/goods/images/big_tile/144249735.jpg',
                title:'Personal computer 3',
                price:'33',
            },
            {
                id:'4',
                imgSrc:'https://content1.rozetka.com.ua/goods/images/big_tile/274406560.jpg',
                title:'Personal computer 4',
                price:'44',
            },
            {
              id:'5',
              imgSrc:'https://content.rozetka.com.ua/goods/images/big_tile/275080618.jpg',
              title:'Personal computer 5',
              price:'55',
            },
            {
              id:'6',
              imgSrc:'https://content.rozetka.com.ua/goods/images/big_tile/229714101.jpg',
              title:'Personal computer 6',
              price:'66',
            },
          ],
          compBucket: [
            {
              id:'thsgfbd345',
              compId:'2',
              count: 2
            },
            {
              id:'fdhkbfmnk14',
              compId:'3',
              count: 3
            },
            {
              id:'thacnrd345',
              compId:'4',
              count: 4
            }
          ]
    }),
 
    getters: {
      getCompList: state => state.compList,
      getCompBucket: state => state.compBucket,
      getCompById: state => (compId) => state.compList.find(item => item.id === compId),
    },

    mutations: {
      addComp(state, compId) {
        const comp = state.compBucket.find(item => item.compId === compId)
        if(comp)
        comp.count++
        else
        state.compBucket.push(
          {
            id: new Date().getTime(),
            compId,
            count: 1
          }
        )
      }
    },

    actions: {
      addComp({commit}, compId) {
        commit('addComp', compId)
      }
    }

}
