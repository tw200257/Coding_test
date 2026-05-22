import java.io.*;
import java.util.*;

// 우선순위 큐에 넣을 노드 클래스 정의
// Comparable을 구현하여 비용(cost) 기준으로 오름차순 정렬되도록 설정
class Node implements Comparable<Node> {
    int to;
    int cost;

    public Node(int to, int cost) {
        this.to = to;
        this.cost = cost;
    }

    @Override
    public int compareTo(Node o) {
        return this.cost - o.cost; // 최소 힙 구성
    }
}

public class Main {
    static int N, M;
    static ArrayList<ArrayList<Node>> graph;
    static int[] dist;

    public static void main(String[] args) throws Exception {
        // 빠른 입출력을 위한 BufferedReader 사용
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        // 인접 리스트 초기화
        graph = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            graph.add(new ArrayList<>());
        }

        // 간선 정보 입력 (양방향)
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            int w = Integer.parseInt(st.nextToken());

            graph.get(u).add(new Node(v, w));
            graph.get(v).add(new Node(u, w));
        }

        // 다익스트라 실행
        dijkstra();

        // 1번 노드에서 N번 노드까지의 최소 비용 출력
        System.out.println(dist[N]);
    }

    static void dijkstra() {
        PriorityQueue<Node> pq = new PriorityQueue<>();
        dist = new int[N + 1];
        Arrays.fill(dist, Integer.MAX_VALUE); // 무한대로 초기화

        // 시작점 설정
        dist[1] = 0;
        pq.offer(new Node(1, 0));

        while (!pq.isEmpty()) {
            Node current = pq.poll();

            // 최적화: 큐에서 꺼낸 비용이 현재 기록된 거리보다 크면 이미 처리된 노드이므로 무시
            if (dist[current.to] < current.cost) continue;

            // 인접 노드 탐색
            for (Node next : graph.get(current.to)) {
                int nextCost = current.cost + next.cost;

                // 거쳐가는 것이 더 짧은 경우 거리 갱신 및 큐에 추가
                if (nextCost < dist[next.to]) {
                    dist[next.to] = nextCost;
                    pq.offer(new Node(next.to, nextCost));
                }
            }
        }
    }
}
