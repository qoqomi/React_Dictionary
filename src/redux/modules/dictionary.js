// dictionary.js

//Actions
//creat: 새로생성
const CREATE = "dictionary/CREATE";
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";

//초기값
const initialState = {
  list: [
    {
      word: "단어입니다",
      sang: "성조입니다.",
      description: "뜻입니다.",
      sampleword: "예제한자입니다",
    },
  ],
};
// Action Creators(새로운 card data)
export function createCard(card) {
  console.log("액션을 생성할거야");
  return { type: CREATE, card: card };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/CREATE": {
      console.log("값을 바꿀거야");
      const new_card = [state.list, action.card];
      return { list: new_card };
    }
    default:
      return state;
  }
}
