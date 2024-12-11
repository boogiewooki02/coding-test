## Vanila JS (기초)

1. `구조 분해 할당`에 대해 서술하시오.
   > **구조 분해 할당**은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식입니다.
   ```js
   // 사용 예시
   const person = { name: "Alice", age: 25 };
   const { name, age } = person;
   console.log(name, age); // Alice 25
   ```
2. `Optional Chaning`에 대해 서술하고 하위 호환을 위해 어떻게 표기해야 하는지 서술하시오.

   > **Optinal Chaning**은 존재하지 않을 수 있는 객체의 프로퍼티 또는 메서드를 안전하게 호출할 수 있도록 도와주는 문법입니다. 연산자 `?.`를 통해 평가 대상이 undefined 또는 null이면 에러 대신 `undefined`를 반환합니다.  
   > `객체에 존재하지 않을 수도 있는 중첩된 속성에 접근할 때 자주 사용합니다.`

   ```js
   // 사용 예시
   const user = { profile: { address: { city: "Seoul" } } };

   // 일반적인 접근 방식
   console.log(user.profile.address.city); // 'Seoul'

   // 옵셔널 체이닝 사용
   console.log(user?.profile?.address?.city); // 'Seoul'

   // 객체가 일부 없을 경우
   console.log(user?.contact?.email); // undefined
   ```

3. 빈 배열에 아래 일련의 과정을 거칠 경우, 배열에 담긴 내용을 작성하시오.
   1. `push('a')`
   2. `shift()`
   3. `unshift('e')`
      > 최종 결과: ['e']  
      > 과정: [] -> ['a] -> [] -> ['e']
4. `Promise`에 대해 서술하고, `Promise`를 사용할 때 주의할 점을 2가지 이상 서술하시오.

   > Promise는 비동기 작업을 처리하기 위한 객체입니다. 비동기 작업이 성공했는지, 실패했는지를 나타내며, 작업의 결과값 또는 에러를 처리할 수 있도록 합니다.  
   > Promise는 pending(작업중), fulfilled(작업성공), rejected(작업실패) 3가지 상태 중 하나의 상태를 가질 수 있습니다.  
   > 콜백 지옥을 방지하고 가독성 향상에 도움을 줄 수 있습니다.

   > **주의할 점:**
   >
   > 1. 에러 처리 필요  
   >    비동기 작업 중 발생하는 오류를 .catch()나 try...catch로 처리해야 합니다. 에러 처리를 하지 않으면 UnhandledPromiseRejection 경고가 발생할 수 있습니다.
   > 2. 반환 값 지정  
   >    데이터 손실을 방지하기 위해 .then() 내부에서 반환된 값을 다음 .then()에 전달해야 합니다.
