// import React, { useState } from 'react'
// import firebase from "../../firebase"

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [erroMsg, setErrorMsg] = useState("");
//     const navigate = useNavigate()


//     const LoginFunc = async (e) => {
//         e.preventDefault();
//         if (!(email && password)) {
//             return alert("모든 값을 채워주세요!")
//         }
//         try {
//             await firebase.auth().signInWithEmailAndPassword(email, password);
//             alert("로그인에 성공하였습니다")
//             navigate("/")
//         } catch (err) {
//             console.log(err.code);
//             if (err.codoe === "quth/invalid-email") {
//                 setErrorMsg("존재하지 않는 이메일입니다.")
//             } else if (err.code === "auth/invalid-credential") {
//                 setErrorMsg("비밀번호가 일치하지 않습니다.")
//             } else {
//                 setErrorMsg("로그인이 실패하였습니다.")
//             }
//         }
//     }
//     return (
//         <div className='login__wrap'>
//             <div className="login__header">
//                 <h3>login</h3>
//                 <p>회원가입은 했겠지?!</p>
//             </div>
//             <form className='login__form'>
//                 <fieldset>
//                     <legend className="blind">로그인 영역</legend>
//                     <div>
//                         <label htmlFor="youEmail" className="required blind">이메일</label>
//                         <input
//                             type="email"
//                             id="youEmail"
//                             name="youEmail"
//                             placeholder="이메일"
//                             className="input__style"
//                             autoComplete='off'
//                             required
//                             value={email}
//                             onChange={(e) => setPassword(e.currentTarget.value)}

//                         />
//                     </div>
//                     <div>
//                         {erroMsg !== "" && <p>{erroMsg}</p>}
//                     </div>
//                     <div>
//                         <label htmlFor="youPass" className="required blind">비밀번호</label>
//                         <input type="password" id="youPass" name="youPass" placeholder="비밀번호" className="input__style" autoComplete="off" required />
//                     </div>
//                     <button type="submit" onClock={(e) => LoginInFunc(e)} className="btn__style2 mt30">로그인</button>
//                 </fieldset>
//             </form>
//         </div>
//     )
// }

// export default Login