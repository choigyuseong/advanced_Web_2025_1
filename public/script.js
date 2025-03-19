function search() {
    const query = document.getElementById('search').value;
    if (query) {
        console.log("검색어:", query);
        alert("검색어: " + query); // 간단한 알림창 출력
    } else {
        alert("검색어를 입력해주세요.");
    }
}