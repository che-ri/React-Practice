import "../style/global.css"; // _app.js 에서 글로벌 css를 지정하면된다.
import "semantic-ui-css/semantic.min.css";

//components
import Top from "../src/components/Top";
import Footer from "../src/components/Footer";

//semantic-ui를 이용하여 컴포넌트 작성
//레이아웃을 만들기 위해서는 _app.js 파일을 활용해야한다.

//_app.js 파일 활용할 시 장점은?
//1. 페이지 전환 시 레이아웃 유지 가능
//2. 페이지 전환 시 상태값 유지 가능
//3. componentDidCatch를 이용해서 커스텀 에러 핸들링 가능
//4. 추가적인 데이터를 페이지로 주입하는 것이 가능
//5. 글로벌 css를 여기에 선언

//props로 받아온 Component는 현재 페이지를 의미한다. 페이지 전환 시 이 Component props가 변경된다.
//pageProps는 데이터 패칭 메서드를 통해 미리 가져온 초기 객체이다. 이것을 사용하지 않으면 빈 객체가 전달된다.
const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Top />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
};

export default MyApp;
