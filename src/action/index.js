export const increment = (someValue) => {
    return{
        type: 'INCREMENT',
        payload: someValue
    };
};

export const decrement = () => {
    return{
        type: 'DECREMENT'
    };
};
