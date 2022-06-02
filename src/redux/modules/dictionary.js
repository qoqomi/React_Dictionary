// dictionary.js

import { faL } from "@fortawesome/free-solid-svg-icons";

//Actions
//creat: 새로생성
const CREATE = "dictionary/CREATE";
const DELETE = "dictionary/DELETE";
const MODIFY = "dictionary/MODIFY";
//초기값

// Action Creators(새로운 card data)
export function createCard(card) {
  return { type: CREATE, card: card };
}

export function deleteCard(card_index) {
  return { type: DELETE, card_index };
}

export function modifyCard(card_index, edit_word) {
  console.log("바꿀거야");
  return { type: MODIFY, card_index, edit_word };
}
// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }
const initialState = {
  list: [
    {
      word: "1입니다",
      description: "성조입니다.",
      exmple: "뜻입니다.",
      addmemo: "메모입니다",
    },
    {
      word: "2입니다",
      description: "성조입니다.",
      exmple: "뜻입니다.",
      addmemo: "메모입니다",
    },
    {
      word: "3입니다",
      description: "성조입니다.",
      exmple: "뜻입니다.",
      addmemo: "메모입니다",
    },
    {
      word: "4입니다",
      description: "성조입니다.",
      exmple: "뜻입니다.",
      addmemo: "메모입니다",
    },
    {
      word: "5입니다",
      description: "성조입니다.",
      exmple: "뜻입니다.",
      addmemo: "메모입니다",
    },
    {
      word: "6입니다",
      description: "성조입니다.",
      exmple: "뜻입니다.",
      addmemo: "메모입니다",
    },
    {
      word: "7입니다",
      description: "성조입니다.",
      exmple: "뜻입니다.",
      addmemo: "메모입니다",
    },
  ],
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/CREATE": {
      const new_word_list = [...state.list, action.card];
      return { list: new_word_list };
    }
    case "dictionary/DELETE": {
      const new_word_list = state.list.filter((el, idx) => {
        console.log(action.card_index, idx);
        return action.card_index != idx;
      });
      return { list: new_word_list };
    }
    case "dictionary/MODIFY": {
      return state;
    }
    default:
      return state;
  }
}
