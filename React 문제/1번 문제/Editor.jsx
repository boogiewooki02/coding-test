import React, { Component, createRef, forwardRef } from "react";

const BaseTextArea = forwardRef((props, ref) => {
  const { className, ...restProps } = props;
  return <textarea {...restProps} ref={ref} />;
});

class Editor extends Component {
  // 초기화
  constructor(props) {
    super(props);
    this.textAreaRef = createRef();
  }

  // 입력 초기화 함수
  handleClear = () => {
    if (this.textAreaRef.current) {
      this.textAreaRef.current.value = "";
    }
  };

  // 애너그램 개수 계산 함수
  handleAnagramCount = () => {
    const input = this.textAreaRef.current.value.trim();

    const words = input.split(/\s+/);
    const sorted = words.map((word) => word.split("").sort().join(""));

    let count = 0;
    const uniqueWords = new Set();

    sorted.forEach((word) => {
      if (uniqueWords.has(word)) {
        count++;
      } else {
        uniqueWords.add(word);
      }
    });

    alert(`애너그램 개수: ${count}`);
  };

  render() {
    return (
      <div>
        <h1>Editor</h1>
        <BaseTextArea ref={this.textAreaRef} placeholder="입력 하세요." />
        <button onClick={this.handleClear}>버튼1(초기화)</button>
        <button onClick={this.handleAnagramCount}>버튼2(애너그램 개수)</button>
      </div>
    );
  }
}

export default Editor;
