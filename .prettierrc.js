module.exports = {
  arrowParens: 'always', // 화살표 함수 괄호 사용 방식
  bracketSpacing: true, // 객체 리터럴에서 괄호에 공백 삽입 여부
  endOfLine: 'auto', // EoF 방식, OS별로 처리 방식이 다름
  htmlWhitespaceSensitivity: 'css', // HTML 공백 감도 설정
  jsxBracketSameLine: false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
  jsxSingleQuote: false, // JSX에 singe 쿼테이션 사용 여부
  printWidth: 130, //  줄 바꿈 할 폭 길이
  semi: true, // 세미콜론 사용 여부
  singleQuote: true, // single 쿼테이션 사용 여부
  tabWidth: 2, // 탭 너비
  trailingComma: 'none', // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  singleAttributePerLine: true,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200
      }
    }
  ] // 특정 파일별로 옵션을 다르게 지정함, ESLint 방식 사용
};
