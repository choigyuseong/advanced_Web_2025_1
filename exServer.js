const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// express 설치법
// 실행하려는 파일인 exServer.js 가 있는 디렉토리에 들어가서 npm init 타이핑
//  - PowerShell 환경에서 실행시 정책 때문에 에러가 생길 가능성 있음. (관리자 권한으로 실행하거나 CMD 이용)
// npm init 후 정보들 입력하고 실행하면 package.json 파일 생성 완료
// npm install express --save 타이핑해서 express 설치
// 완료하면 package.json 파일 안에 dependencies 에 express 설치 된것 확인
// 이후 node exServer.js 타이핑 하면 실행되는 것을 확인 가능