import { configureStore } from '@reduxjs/toolkit'
import { costomreducer } from '../Reducer/reducer'
import { postreducer } from '../Reducer/postreducer'




const store = configureStore({
    reducer: {
mainreducer:costomreducer,
postscall:postreducer
    }
  })
  
  export default store