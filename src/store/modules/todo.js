// 초기 상태 설정
const initState = {
  list: [
    { id: 0, text: "리액트 공부하기", done: false },
    { id: 1, text: "허리 펴기", done: false },
    { id: 2, text: "취업 하기", done: false },
  ],
};

const counts = initState.list.length;
// initState.nextID = counts;
initState["nextID"] = counts;

// 액션 타입 정의
const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

// 액션 생성 함수 작성
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

// 리듀서 설정 (실제 작업)
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      // return console.log("CREATE 호출");
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      // return console.log("DONE 호출");
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
