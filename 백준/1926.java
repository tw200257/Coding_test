import java.io.*;
import java.util.*;
  class Main {
    static int n, m;
    static int[][] board;
    static boolean[][] visited;
    
    // 상하좌우 탐색을 위한 방향 배열
    static int[] dx = {1, 0, -1, 0};
    static int[] dy = {0, 1, 0, -1};

    // 좌표를 저장할 내부 클래스
    static class Point {
        int x, y;
        Point(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

      static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());

        board = new int[n][m];
        visited = new boolean[n][m];

        // 도화지 정보 입력받기
        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < m; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        int count = 0;    // 그림의 개수
        int maxArea = 0;  // 가장 넓은 그림의 넓이

        // 도화지 전체를 순회하며 탐색
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                // 색칠이 되어 있고(1), 아직 방문하지 않은 지점이라면 새로운 그림 발견
                if (board[i][j] == 1 && !visited[i][j]) {
                    count++; // 그림 개수 증가
                    int currentArea = bfs(i, j); // BFS를 통해 현재 그림의 넓이 구하기
                    maxArea = Math.max(maxArea, currentArea); // 최대 넓이 갱신
                }
            }
        }

        // 결과 출력
        System.out.println(count);
        System.out.println(maxArea);
    }

    // 너비 우선 탐색 (BFS) 메서드
    static int bfs(int x, int y) {
        Queue<Point> queue = new LinkedList<>();
        queue.offer(new Point(x, y));
        visited[x][y] = true; // 시작점 방문 처리
        int area = 0; // 현재 그림의 넓이

        while (!queue.isEmpty()) {
            Point current = queue.poll();
            area++; // 큐에서 하나 뺄 때마다 넓이 1 증가

            // 상하좌우 탐색
            for (int i = 0; i < 4; i++) {
                int nx = current.x + dx[i];
                int ny = current.y + dy[i];

                // 도화지 범위를 벗어나지 않는지 확인
                if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                    // 색칠이 되어 있고 아직 방문하지 않았다면
                    if (board[nx][ny] == 1 && !visited[nx][ny]) {
                        visited[nx][ny] = true; // 방문 처리 (중복 큐 삽입 방지)
                        queue.offer(new Point(nx, ny));
                    }
                }
            }
        }
        return area; // 최종 넓이 반환
    }
}
