import './scss/kcy.scss';


const App = () => {
  const mytext = '내가 이 집의 주인장이였는데 이제 아니야'
  return (
  <div className='App'>
    {mytext}입니다.
  </div>
  )
}

// function App2(){
// 이것이 일반 함수
// }

// 아래가 화살표 함수
// 이름 변경이 불가능한 const만을 사용한다.
// 선언식 const는 출력되기 이전, return 위에 입력한다.

const App2 = () => {
  const 오늘평가날 = 627
  return (
    <div className='App'>
      <h1>리액트 훈련</h1>
      {
        오늘평가날 == 627 &&
        <div>
          오늘은 평가날입니다.
        </div>
      }
      </div>
    
  )
}


// export App2;
// export App3;

export { App, App2}