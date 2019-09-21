import { DomSanitizer } from '@angular/platform-browser';

class Skill {
  name: string;
  type?: string;
  icon: string; 
}

const skillArray = [
    {
      name: "c-sharp",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC4zMiwtMTAuMzIpIHNjYWxlKDEuMTIsMS4xMikiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik04Mi4wNjkwOCwxMS43NzQ4M2MyLjQzMzA4LC0xLjM2NTI1IDUuNDI4NzUsLTEuMzY1MjUgNy44NTgyNSwwYzEyLjAyMjA4LDYuNzQ3NDIgNDguMTk5NDIsMjcuMDU3NzUgNjAuMjI1MDgsMzMuODA1MTdjMi40MzMwOCwxLjM2MTY3IDMuOTMwOTIsMy44ODQzMyAzLjkzMDkyLDYuNjE0ODNjMCwxMy40OTQ4MyAwLDU0LjExMTkyIDAsNjcuNjA2NzVjMCwyLjczMDUgLTEuNDk3ODMsNS4yNTMxNyAtMy45MzA5Miw2LjYxODQyYy0xMi4wMjIwOCw2Ljc0NzQyIC00OC4xOTk0MiwyNy4wNTc3NSAtNjAuMjI1MDgsMzMuODA1MTdjLTIuNDMzMDgsMS4zNjUyNSAtNS40Mjg3NSwxLjM2NTI1IC03Ljg1ODI1LDBjLTEyLjAyMjA4LC02Ljc0NzQyIC00OC4xOTk0MiwtMjcuMDU3NzUgLTYwLjIyNTA4LC0zMy44MDUxN2MtMi40Mjk1LC0xLjM2NTI1IC0zLjkyNzMzLC0zLjg4NDMzIC0zLjkyNzMzLC02LjYxNDgzYzAsLTEzLjQ5NDgzIDAsLTU0LjExMTkyIDAsLTY3LjYwNjc1YzAsLTIuNzMwNSAxLjQ5NzgzLC01LjI1MzE3IDMuOTMwOTIsLTYuNjE4NDJjMTIuMDE4NSwtNi43NDc0MiA0OC4yMDMsLTI3LjA1Nzc1IDYwLjIyMTUsLTMzLjgwNTE3eiIgZmlsbD0iIzM3NDc0ZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xOS4wMDYsMTIzLjI4MWMtMC45NTMxNywtMS4yNzU2NyAtMS4wODkzMywtMi40ODY4MyAtMS4wODkzMywtNC4xMTcyNWMwLC0xMy40MTYgMCwtNTMuODAwMTcgMCwtNjcuMjE5NzVjMCwtMi43MTYxNyAxLjQ5NDI1LC01LjIyNDUgMy45MjAxNywtNi41NzljMTEuOTc5MDgsLTYuNzA4IDQ4LjAzNDU4LC0yNi45MDAwOCA2MC4wMTM2NywtMzMuNjExNjdjMi40MjU5MiwtMS4zNTgwOCA1LjcxMTgzLC0xLjMyOTQyIDguMTM3NzUsMC4wMjg2N2MxMS45NzkwOCw2LjcwOCA0Ny45MTI3NSwyNi43MjgwOCA1OS44OTE4MywzMy40MzYwOGMwLjk2NzUsMC41NDQ2NyAxLjcwNTY3LDEuMjAwNDIgMi4zNjUsMi4wNjR6IiBmaWxsPSIjNTQ2ZTdhIj48L3BhdGg+PHBhdGggZD0iTTg2LDM1LjgzMzMzYzI3LjY4ODQyLDAgNTAuMTY2NjcsMjIuNDc4MjUgNTAuMTY2NjcsNTAuMTY2NjdjMCwyNy42ODg0MiAtMjIuNDc4MjUsNTAuMTY2NjcgLTUwLjE2NjY3LDUwLjE2NjY3Yy0yNy42ODg0MiwwIC01MC4xNjY2NywtMjIuNDc4MjUgLTUwLjE2NjY3LC01MC4xNjY2N2MwLC0yNy42ODg0MiAyMi40NzgyNSwtNTAuMTY2NjcgNTAuMTY2NjcsLTUwLjE2NjY3ek04Niw2MC45MTY2N2MxMy44NDI0MiwwIDI1LjA4MzMzLDExLjIzNzMzIDI1LjA4MzMzLDI1LjA4MzMzYzAsMTMuODQyNDIgLTExLjI0MDkyLDI1LjA4MzMzIC0yNS4wODMzMywyNS4wODMzM2MtMTMuODQyNDIsMCAtMjUuMDgzMzMsLTExLjI0MDkyIC0yNS4wODMzMywtMjUuMDgzMzNjMCwtMTMuODQ2IDExLjIzNzMzLC0yNS4wODMzMyAyNS4wODMzMywtMjUuMDgzMzN6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTE1Mi4yMzc5Miw0Ny4zMTc5MmMxLjg0OSwxLjczMDc1IDEuODEzMTcsNC4zMzk0MiAxLjgxMzE3LDYuMzkyNjdjMCwxMy41OTg3NSAtMC4xMTQ2Nyw1Mi4yNzcyNSAwLjAzMjI1LDY1Ljg3NmMwLjAxNDMzLDEuNDE5IC0wLjQ1NTA4LDIuOTEzMjUgLTEuMTU3NDIsNC4wMzg0MmwtNjguMzg0MzMsLTM3LjYyNXoiIGZpbGw9IiM0NTVhNjQiPjwvcGF0aD48cGF0aCBkPSJNMTIxLjgzMzMzLDcxLjY2NjY3aDMuNTgzMzN2MjguNjY2NjdoLTMuNTgzMzN6TTEzMi41ODMzMyw3MS42NjY2N2gzLjU4MzMzdjI4LjY2NjY3aC0zLjU4MzMzeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTQuNjY2NjcsODkuNTgzMzNoMjguNjY2Njd2My41ODMzM2gtMjguNjY2Njd6TTExNC42NjY2Nyw3OC44MzMzM2gyOC42NjY2N3YzLjU4MzMzaC0yOC42NjY2N3oiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4="
    },
    {
      name: "javascript",
      type: "svg",
      icon: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNS44LC0yNS44KSBzY2FsZSgxLjMsMS4zKSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48Zz48cGF0aCBkPSJNMjEuNSwxNTAuNXYtMTI5aDEyOXYxMjl6IiBmaWxsPSIjZmZkNjAwIj48L3BhdGg+PHBhdGggZD0iTTEwNS44NDQ1LDExOC4wNjAwOGMyLjQ3OTY3LDQuMDI3NjcgNS4xNzQzMyw3Ljg4NjkyIDEwLjg4MjU4LDcuODg2OTJjNC43OTQ1LDAgNy4zMSwtMi4zODI5MiA3LjMxLC01LjY3OTU4YzAsLTMuOTQ1MjUgLTIuNjAxNSwtNS4zNDYzMyAtNy44NzYxNywtNy42NDMyNWwtMi44OTE3NSwtMS4yMzI2N2MtOC4zNDU1OCwtMy41NDAzMyAtMTMuODk2MTcsLTcuOTc2NSAtMTMuODk2MTcsLTE3LjM0NjkyYzAsLTguNjM1ODMgNi42MTEyNSwtMTUuMjA3NjcgMTYuOTQyLC0xNS4yMDc2N2M3LjM1NjU4LDAgMTIuNjQyLDIuNTQ3NzUgMTYuNDU0NjcsOS4yMTk5MmwtOS4wMDg1LDUuNzU4NDJjLTEuOTgxNTgsLTMuNTQwMzMgLTQuMTI0NDIsLTQuOTM0MjUgLTcuNDQ2MTcsLTQuOTM0MjVjLTMuMzg5ODMsMCAtNS41MzYyNSwyLjEzOTI1IC01LjUzNjI1LDQuOTM0MjVjMCwzLjQ1NDMzIDIuMTUsNC44NTE4MyA3LjExMjkyLDYuOTkxMDhsMi44OTE3NSwxLjIzMjY3YzkuODM2MjUsNC4xODg5MiAxNS4zODMyNSw4LjQ2NzQyIDE1LjM4MzI1LDE4LjA4NTA4YzAsMTAuMzYzIC04LjE4NDMzLDE2LjA0MjU4IC0xOS4xNzA4MywxNi4wNDI1OGMtMTAuNzQ2NDIsMCAtMTYuODQ4ODMsLTUuMzkyOTIgLTIwLjI0NTgzLC0xMi4wNjg2N3pNNjQuMzI4LDExOC4zNTM5MmMxLjgxMzE3LDMuMjQ2NSA0LjU2ODc1LDUuNzQ0MDggOC41MzE5Miw1Ljc0NDA4YzMuNzkxMTcsMCA1Ljk3MzQyLC0xLjQ5NzgzIDUuOTczNDIsLTcuMzIwNzV2LTM3Ljk0MzkyaDExLjk0MzI1djM5Ljc3ODU4YzAsMTIuMDY1MDggLTYuOTk4MjUsMTcuNTU0NzUgLTE3LjIxNzkyLDE3LjU1NDc1Yy05LjIzNDI1LDAgLTE1Ljg5OTI1LC02LjI1NjUgLTE4LjYxNTQyLC0xMi4wNjg2N3oiIGZpbGw9IiMwMDAwMDEiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=`
    },
    {
      name: "angular",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
    },
    {
      name: "sql-server",
      icon: "https://www.freeiconspng.com/uploads/sql-server-icon-png-2.png"
    },
    {
      name: "html-5",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNS44LC0yNS44KSBzY2FsZSgxLjMsMS4zKSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48Zz48cGF0aCBkPSJNMTQ2LjkxNjY3LDE3LjkxNjY3aC0xMjEuODMzMzNsMTAuNzUsMTIxLjgzMzMzbDUwLjE2NjY3LDE0LjMzMzMzbDUwLjE2NjY3LC0xNC4zMzMzM2wxMC43NSwtMTIxLjgzMzMzeiIgZmlsbD0iI2U2NTEwMCI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwyOC42NjY2N3YxMTQuMzA4MzNsNDAuMTMzMzMsLTExLjQ2NjY3bDguOTU4MzMsLTEwMi44NDE2N3oiIGZpbGw9IiNmZjZkMDAiPjwvcGF0aD48cGF0aCBkPSJNODYsODkuNTgzMzN2LTE0LjMzMzMzaDMwLjgxNjY3bC0yLjUwODMzLDQxLjIwODMzbC0yOC4zMDgzMyw5LjMxNjY3di0xNS4wNWwxNC42OTE2NywtNS4wMTY2N2wxLjA3NSwtMTYuMTI1ek0xMTcuODkxNjcsNjAuOTE2NjdsMS4wNzUsLTE0LjMzMzMzaC0zMi45NjY2N3YxNC4zMzMzM3oiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNODYsMTEwLjcyNXYxNS4wNWwtMjguMzA4MzMsLTkuMzE2NjdsLTEuNDMzMzMsLTE5LjcwODMzaDE0LjMzMzMzbDAuNzE2NjcsOC45NTgzM3pNNjguNDQxNjcsNjAuOTE2NjdoMTcuNTU4MzN2LTE0LjMzMzMzaC0zMi42MDgzM2wyLjUwODMzLDQzaDMwLjF2LTE0LjMzMzMzaC0xNi40ODMzM3oiIGZpbGw9IiNlZWVlZWUiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4="
    },
    {
      name: "css",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNS44LC0yNS44KSBzY2FsZSgxLjMsMS4zKSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48Zz48cGF0aCBkPSJNMTQ2LjkxNjY3LDE3LjkxNjY3aC0xMjEuODMzMzNsMTAuNzUsMTIxLjgzMzMzbDUwLjE2NjY3LDE0LjMzMzMzbDUwLjE2NjY3LC0xNC4zMzMzM2wxMC43NSwtMTIxLjgzMzMzeiIgZmlsbD0iIzAyNzdiZCI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwyOC42NjY2N3YxMTQuMzA4MzNsNDAuMTMzMzMsLTExLjQ2NjY3bDguOTU4MzMsLTEwMi44NDE2N3oiIGZpbGw9IiMwMzliZTUiPjwvcGF0aD48cGF0aCBkPSJNMTE4LjYwODMzLDQ2LjU4MzMzaC0zMi42MDgzM3YxNC4zMzMzM2gxNy41NTgzM2wtMS4wNzUsMTQuMzMzMzNoLTE2LjQ4MzMzdjE0LjMzMzMzaDE1Ljc2NjY3bC0xLjA3NSwxNi4xMjVsLTE0LjY5MTY3LDUuMDE2Njd2MTUuMDVsMjguMzA4MzMsLTkuMzE2NjdsMi41MDgzMywtNDEuMjA4MzN2MHoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNODYsNDYuNTgzMzN2MTQuMzMzMzNoLTMxLjg5MTY3bC0xLjA3NSwtMTQuMzMzMzN6TTY5LjUxNjY3LDc1LjI1bDAuNzE2NjcsMTQuMzMzMzNoMTUuNzY2Njd2LTE0LjMzMzMzek03MC45NSw5Ni43NWgtMTQuMzMzMzNsMS4wNzUsMTkuNzA4MzNsMjguMzA4MzMsOS4zMTY2N3YtMTUuMDVsLTE0LjY5MTY3LC01LjAxNjY3eiIgZmlsbD0iI2VlZWVlZSI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=="
    },
    {
      name: "git",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOC45MiwtMTguOTIpIHNjYWxlKDEuMjIsMS4yMikiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2Y0NTExZSI+PHBhdGggZD0iTTE1MS4yMTY2Nyw3OS4xOTE2N2wtNTguNDA4MzMsLTU4LjQwODMzYy0xLjc5MTY3LC0xLjc5MTY3IC00LjMsLTIuODY2NjcgLTYuODA4MzMsLTIuODY2Njd2MGMtMi41MDgzMywwIC01LjAxNjY3LDEuMDc1IC02LjgwODMzLDIuODY2NjdsLTEyLjU0MTY3LDEyLjU0MTY3bDE0LjY5MTY3LDE0LjY5MTY3YzEuNDMzMzMsLTAuNzE2NjcgMi44NjY2NywtMS4wNzUgNC42NTgzMywtMS4wNzVjNi4wOTE2NywwIDEwLjc1LDQuNjU4MzMgMTAuNzUsMTAuNzVjMCwxLjc5MTY3IC0wLjM1ODMzLDMuMjI1IC0xLjA3NSw0LjY1ODMzbDE0LjMzMzMzLDE0LjMzMzMzYzEuNDMzMzMsLTAuNzE2NjcgMi44NjY2NywtMS4wNzUgNC42NTgzMywtMS4wNzVjNi4wOTE2NywwIDEwLjc1LDQuNjU4MzMgMTAuNzUsMTAuNzVjMCw2LjA5MTY3IC00LjY1ODMzLDEwLjc1IC0xMC43NSwxMC43NWMtNi4wOTE2NywwIC0xMC43NSwtNC42NTgzMyAtMTAuNzUsLTEwLjc1YzAsLTEuNzkxNjcgMC4zNTgzMywtMy4yMjUgMS4wNzUsLTQuNjU4MzNsLTE0LjMzMzMzLC0xNC4zMzMzM2MtMC4zNTgzMywwIC0wLjcxNjY3LDAuMzU4MzMgLTEuMDc1LDAuMzU4MzN2MzcuMjY2NjdjNC4zLDEuNDMzMzMgNy4xNjY2Nyw1LjM3NSA3LjE2NjY3LDEwLjAzMzMzYzAsNi4wOTE2NyAtNC42NTgzMywxMC43NSAtMTAuNzUsMTAuNzVjLTYuMDkxNjcsMCAtMTAuNzUsLTQuNjU4MzMgLTEwLjc1LC0xMC43NWMwLC00LjY1ODMzIDIuODY2NjcsLTguNiA3LjE2NjY3LC0xMC4wMzMzM3YtMzcuNjI1Yy00LjMsLTEuNDMzMzMgLTcuMTY2NjcsLTUuMzc1IC03LjE2NjY3LC0xMC4wMzMzM2MwLC0xLjc5MTY3IDAuMzU4MzMsLTMuMjI1IDEuMDc1LC00LjY1ODMzbC0xNC42OTE2NywtMTQuNjkxNjdsLTQwLjg1LDQxLjIwODMzYy0xLjc5MTY3LDEuNzkxNjcgLTIuODY2NjcsNC4zIC0yLjg2NjY3LDYuODA4MzNjMCwyLjUwODMzIDEuMDc1LDUuMDE2NjcgMi44NjY2Nyw2LjgwODMzbDU4LjQwODMzLDU4LjQwODMzdjBjMS43OTE2NywxLjc5MTY3IDQuMywyLjg2NjY3IDYuODA4MzMsMi44NjY2N2MyLjUwODMzLDAgNS4wMTY2NywtMS4wNzUgNi44MDgzMywtMi44NjY2N2w1OC40MDgzMywtNTguNDA4MzNjMS43OTE2NywtMS43OTE2NyAyLjg2NjY3LC00LjMgMi44NjY2NywtNi44MDgzM2MwLC0yLjUwODMzIC0xLjA3NSwtNS4wMTY2NyAtMi44NjY2NywtNi44MDgzM3oiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4="
    },
    {
      name: "sass",
      icon: "https://cdn.iconscout.com/icon/free/png-128/sass-13-1175092.png"
    },
    {
      name: "typescript",
      icon: "/assets/images/typescript.png"
    },
    {
      name: ".NET Core",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/120px-.NET_Core_Logo.svg.png"
    },
    {
      name: "node-js",
      icon: "https://cdn.iconscout.com/icon/free/png-128/nodejs-6-569582.png"
    }
  ];

  export const skills: Skill[] = skillArray.map((v) => {
    return Object.assign(new Skill(), v);
  });
