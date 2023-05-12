import { IS_SMALL } from '../../Actions/ActionType'
const initialState = {
    isSmall: false,
    display: '',
    icon: '<RiLoginBoxLine  className="p-10 position-absolute mt-20"/>'
}

function IsSmall(state, action) {
    const isSmall = {
        ...state,
        isSmall: !isSmall,
        display: display == '' ? 'd-none' : '',
        icon: icon == "<RiLoginBoxLine  className='p-10 position-absolute mt-20'/>"
            ? "<RiLoginBoxRLine  className='p-10 position-absolute mt-20'/>" : "<RiLoginBoxLine  className='p-10 position-absolute mt-20'/>"
    }
    return isSmall;
}





const SideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_SMALL: IsSmall(state, action);

    }
};

export default SideBarReducer;