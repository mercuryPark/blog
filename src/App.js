/* eslint-disable */
import './App.css';
import { useState } from 'react';
// import { Button } from '@material-ui/core'



function App() {
  let [name,name변경] = useState(['(다)남자 코트 추천','(가)여자 아우터 추천', '(나)여자 배낭 추천']);
  let [좋아요, 좋아요변경] = useState([0,0,0])
  let [모달, 모달창변경] = useState(false)
  let [타이틀, 타이틀변경] = useState(0)
  let [입력값, 입력값변경] = useState('')
  return (
    <div className="App">
    <div className="black-nav">
      <div>개발 blog</div>
    </div>
    {/* <Button variant="contained" color="primary">Hello World</Button> */}
   
    <button onClick={()=>{
      let sort = Array.from(name)
      sort.sort();
      name변경(sort)
    }}>가나다순 정렬</button>
   {
    name.map((title, i)=>{
      return(
      <div className="list">
       
      <button onClick={()=>{
        let copy = Array.from(name)
        copy[0] = '여자 코트 추천'
        name변경(copy)
      }}>글 수정</button>
        <h4 onClick={()=>{
          타이틀변경(i)
          {
            모달 == false 
            ? 모달창변경(true)
            : 모달창변경(false)
          }
         
        }

        }>{title} <button className="likeBtn" onClick={()=>{
          let like = [...좋아요];
          like[i] = like[i] + 1
          좋아요변경(like) 
        }}>좋아요</button>{좋아요[i]}
         </h4>
         <button onClick={()=>{
          let copy = Array.from(name)
          copy.splice(i, 1)
          name변경(copy)
         }}>삭제</button>
        <p>2월 17일 발행</p>
      </div>
      )
    })
   
  }
{
  모달 == true
  ? <Modal name={name} 타이틀={타이틀}></Modal>
  : null

}

<input style={{margin : '30px'}} type="text" onChange={(e)=>{
      입력값변경(e.target.value)}}/>
     <button onClick={()=>{
      let copy = [...name];
      copy.push(입력값);
      name변경(copy)
    }
      }>글발행</button>
  </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
  <h4>{props.name[props.타이틀]}</h4>
  <p>날짜</p>
  <p>상세내용</p>
</div>
  )
}

export default App;

