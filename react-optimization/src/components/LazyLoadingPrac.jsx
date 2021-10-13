import React, { lazy, Suspense } from "react";
const LazyLoadingComp = lazy(() => import("./LazyLoadingComponent"));

//구성요소가 제대로 렌더링되는 동안 무언가를 렌더링하기위해 Suspense를 사용한다.

//lazyloading을 사용하려면 react 16.6 이상이 필요하다
const LazyLoadingPrac = () => {
    return (
        <div>
            <span>LazyLoading 연습하기</span>
            {/* lazyLoadingComponent가 로딩되기 전까지 Suspense의 fallback props에 있는 내용이 뜨고, 그다음 lazyLoadingComponent가 렌더링된다.*/}
            <Suspense fallback={<div>loading...</div>}>
                <LazyLoadingComp />
            </Suspense>
        </div>
    );
};

export default LazyLoadingPrac;
