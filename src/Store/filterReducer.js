import { createSlice  , createAsyncThunk} from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk('filterSlice/fetchData' , async () => {
    const response = await fetch('http://localhost:3005/listings')
    const data = await response.json()
    return data
})

const initialState = {data : [] , isLoading : true , error : null}

const filterSlice = createSlice({
    name : 'filterSlice',
    initialState : initialState,
    reducers : {
        filterById : (state , action) => {
            if(action.payload !== ''){
                state.data = state.data.filter(row => {
                    return row.unit_id.includes(action.payload)
                })
            }
        },
        sortByType : (state , action) => {
            state.data = state.data.sort((a, b) => {
                if (a[action.payload] < b[action.payload]) {
                  return -1;
                } else if (a[action.payload] > b[action.payload]) {
                  return 1;
                } else {
                  return 0;
                }
              });;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchData.fulfilled , (state , action) => {
            state.data = action.payload
            state.isLoading = false
        })
    }
})

export const filterActions = filterSlice.actions

export default filterSlice.reducer