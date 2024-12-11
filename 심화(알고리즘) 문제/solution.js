function findEulerianPath(edges) {
  // 그래프 생성
  const graph = {};
  for (const [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }

  // 홀수 차수 노드 추출
  const oddDegreeNodes = [];
  for (const node in graph) {
    if (graph[node].length % 2 === 1) oddDegreeNodes.push(node);
  }

  // 오일러 경로 생성 불가능 경우
  if (oddDegreeNodes.length !== 0 && oddDegreeNodes.length !== 2) {
    return null;
  }

  const startNode =
    oddDegreeNodes.length === 2 ? oddDegreeNodes[0] : Object.keys(graph)[0];
  const stack = [startNode];
  const path = [];
  const localGraph = JSON.parse(JSON.stringify(graph)); // 복사본

  // 깊이 우선 탐색
  while (stack.length) {
    const node = stack[stack.length - 1];
    if (localGraph[node].length === 0) {
      path.push(stack.pop());
    } else {
      const nextNode = localGraph[node].pop();
      localGraph[nextNode] = localGraph[nextNode].filter((n) => n !== node);
      stack.push(nextNode);
    }
  }

  const finalPath = path.reverse(); // 최종 경로
  return finalPath;
}
