export function Logout() {
  localStorage.removeItem("ACCESS_TOKEN");
  alert("로그아웃 되셨습니다.");
  window.location.href = "/";
}
