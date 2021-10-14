//프로젝트의 모든 Story에 global하게 적용될 포맷을 세팅하는 곳

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        //controls는 Storybook에서 arguments를 동적으로 바꿔가며 인터렉션할 수 있도록 도와주는 기능입니다.
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
