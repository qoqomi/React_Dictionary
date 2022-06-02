import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
//Actions
//creat: 새로생성
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const DELETE = "dictionary/DELETE";
const LOADED = "dictionary/LOADED";
//초기값

// Action Creators(새로운 card data)
export function loadCard(cardtotal) {
  //파이어스토어 모든데이터
  return { type: LOAD, cardtotal };
}

export function createCard(card) {
  return { type: CREATE, card: card };
}

export function deleteCard(card_index) {
  return { type: DELETE, card_index };
}
//스피너
export function isLoaded(loaded) {
  return { type: LOADED, loaded };
}

//middlewares
export const loadCardFB = () => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "dictionaryAdd"));

    let card_list = [];

    card_data.forEach((doc) => {
      card_list.push({ id: doc.id, ...doc.data() });
    });

    dispatch(loadCard(card_list));
  };
};

export const addCardFB = (addcard) => {
  return async function (dispatch) {
    dispatch(isLoaded(false));
    const docRef = await addDoc(collection(db, "dictionaryAdd"), addcard);
    const _card = await getDoc(docRef);
    const bucket = { id: _card.id, ..._card.data() };
    dispatch(createCard(bucket));
  };
};

export const deleteCardFB = (card_id) => {
  return async function (dispatch, getState) {
    if (!card_id) {
      window.alert("아이디가 없어요");
      return;
    }
    const docRef = doc(db, "dictionaryAdd", card_id);
    await deleteDoc(docRef);

    const _card_list = getState().dictionary.list;
    // findIndex로 몇 번째에 있는 지 찾기!
    const card_index = _card_list.findIndex((b) => {
      // getState 해서 index 값들 중에 받아 온 index 값이랑 같은 index 뽑아내기
      return b.id === card_id;
    });
    dispatch(deleteCard(card_index));
  };
};

const initialState = {
  is_loaded: false,
  list: [
    // {
    //   word: "1입니다",
    //   description: "성조입니다.",
    //   exmple: "뜻입니다.",
    //   addmemo: "메모입니다",
    // },
  ],
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      return { list: action.cardtotal, is_loaded: true };
    }
    case "dictionary/CREATE": {
      const new_word_list = [...state.list, action.card];
      return { ...state, list: new_word_list, is_loaded: true };
    }
    case "dictionary/DELETE": {
      const new_word_list = state.list.filter((el, idx) => {
        console.log(action.card_index, idx);
        return action.card_index != idx;
      });
      return { ...state, list: new_word_list };
    }
    case "dictionary/LOADED": {
      return { ...state, is_loaded: action.loaded };
    }

    default:
      return state;
  }
}
