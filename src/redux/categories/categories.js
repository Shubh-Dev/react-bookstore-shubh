const CHECK_STATUS = 'CHECK_STATUS';

export const checkBookStatus = () => ({
    type: CHECK_STATUS,
    payload: 'Under construction'

});

const Categoryreducer = (categoryState = [], action) => {
    switch(action.type) {
        case CHECK_STATUS:
            return categoryState.push(action.payload);
        default: 
            return categoryState;    
    }
}

export default Categoryreducer;
