let initialState = {
    friendItems: [
        {id: 1, img: "https://i.pinimg.com/236x/21/03/f3/2103f3747405e483b2ea4190bf42677e.jpg", name:"Sasha", surname:"Sur"}, 
        {id: 2, img: "https://sevelina.ru/images/uploads/2012/07/d78a229a1ec906d94b81dac1fd097f00_large.jpg", name:"Dima", surname:"Sur"}, 
        {id: 3, img: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png", name:"John", surname:"Sur"}, 
        {id: 4, img: "https://sun9-38.userapi.com/c625322/v625322554/5502/Z9FCBeQ2ZmA.jpg", name:"Lesha", surname:"Sur"}
    ]
};

const friendsPageReducer = (state = initialState, action) => {
    return state;
};

export default friendsPageReducer;