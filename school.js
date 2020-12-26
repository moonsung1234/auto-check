const PUBKEY = "-----BEGIN PUBLIC KEY-----\n" +
                "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA81dCnCKt0NVH7j5Oh2+SGgEU0aqi5u6sYXemouJWXOlZO3jqDsHYM1qfEjVvCOmeoMNFXYSXdNhflU7mjWP8jWUmkYIQ8o3FGqMzsMTNxr+bAp0cULWu9eYmycjJwWIxxB7vUwvpEUNicgW7v5nCwmF5HS33Hmn7yDzcfjfBs99K5xJEppHG0qc+q3YXxxPpwZNIRFn0Wtxt0Muh1U8avvWyw03uQ/wMBnzhwUC8T4G5NclLEWzOQExbQ4oDlZBv8BM/WxxuOyu0I8bDUDdutJOfREYRZBlazFHvRKNNQQD2qDfjRz484uFs7b5nykjaMB9k/EJAuHjJzGs9MMMWtQIDAQAB" +
                "\n-----END PUBLIC KEY-----";

const request = require("request");
const crypto = require("crypto");
let SearchSchool_OPTION = {
    uri : "https://hcs.eduro.go.kr/v2/searchSchool",
    method : "GET",
    qs : {
        lctnScCode : 17,
        schulCrseScCode : 3,
        orgName : "월산중학교",
        loginType : "school"
    },
    headers : {
        "Host" : "hcs.eduro.go.kr",     
        "Connection" : "keep-alive",
        "Accept" : "application/json, text/plain, */*",
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        "X-Requested-With" : "XMLHttpRequest",
        "Sec-Fetch-Site" : "same-origin",
        "Sec-Fetch-Mode" : "cors",
        "Sec-Fetch-Dest" : "empty",
        "Referer" : "https://hcs.eduro.go.kr/",
        "Accept-Encoding" : "gzip, deflate, br",
        "Accept-Language" : "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cookie" : "WAF=f462c52c3d18155765ffae906e0a31dd"
    }
};
let FindUser_OPTION = {
    uri : "https://hcs.eduro.go.kr/v2/findUser",
    method : "POST",
    headers : {
        "Host" : "gnehcs.eduro.go.kr",
        "Connection" : "keep-alive",
        "Content-Length" : null,
        "Accept" : "application/json, text/plain, */*",
        "X-Requested-With" : "XMLHttpRequest",
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36 Edg/86.0.622.69",
        "Content-Type" : "application/json;charset=UTF-8",
        "Origin" : "https://hcs.eduro.go.kr",
        "Sec-Fetch-Site" : "same-site",
        "Sec-Fetch-Mode" : "cors",
        "Sec-Fetch-Dest" : "empty",
        "Referer" : "https://hcs.eduro.go.kr/",
        "Accept-Encoding" : "gzip, deflate, br",
        "Accept-Language" : "ko,en;q=0.9,en-US;q=0.8"
    },
    body : {
        "orgCode" : "S100001148",
        "name" : "sFyAIqx/f2XRoq76MyjA10QNpCZWz8LBDRo7agfeBhnyWON06GQ2cF9i6J8eyw7hF4kFXFA0gxQkYWajf6H7sHs9YfpONoWMeVxyR1hpyDRtKVqq9cqb6cVqHsF6o3t9EaoqVw5aNSuTXBtZTV95FK+R+AlrIP4MZaUjKqxwmvpgdr6C9Lfu22TqaRtmGJsE8JEVRXJ1A3H43APQwpFEQHEW9YtdRODmhuYmvDv7mp/FDCVb7mhX2LsbPA4ddvCSN7BgXqvcF33ceB7fkg1JHdnAYbg+CNK0KCG4yv+xanHMn9CgWycdnqRhBvTUUcAlcu7vV4BEKr9hCvzGfDEkhA==",
        "birthday" : "BeSCmDrutrn867JSJnTQqM56dkYyKRc50DStr0Nhr2WbtcWokc8Fb5dHC90T96O10UTXWuvQ5p1Fx5/XUohHnlx54V7YS8iIRgY7RrwE6l3aT7ZFPR65Ll6JUgzHALdkbEcyoDXaYOiz+s7y1ccHlExBOLZMTg0VTxq0e5PDm0ccJhR0bm/9lXPirah0MqAODibTwOWFGjSHzjdG+R5tBZrXEH4Y91bSeaVrXZhtUJVr0IKkbh1GEZ0gLJI7M6XsQeoC7LF6VH6z0P78gslKdc+UHBnma273VJ85COhsdC9ul91txjPoXpseQ0CGi5ZENEkl0UouUa/36Xz4w1bQdw==",
        "stdntPNo" : null,
        "loginType" : "school"
    },
    json : true
}

let ValidatePassword_OPTION = {
    uri : "https://hcs.eduro.go.kr/v2/validatePassword",
    method : "POST",
    headers : {
        "Host" : "gnehcs.eduro.go.kr",
        "Connection" : "keep-alive",
        "Content-Length" : null,
        "Accept" : "application/json, text/plain, */*",
        "X-Requested-With" : "XMLHttpRequest",
        "Authorization" : null,
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60",
        "Content-Type" : "application/json;charset=UTF-8",
        "Origin" : "https://hcs.eduro.go.kr",
        "Sec-Fetch-Site" : "same-site",
        "Sec-Fetch-Mode" : "cors",
        "Sec-Fetch-Dest" : "empty",
        "Referer" : "https://hcs.eduro.go.kr/",
        "Accept-Encoding" : "gzip, deflate, br",
        "Accept-Language" : "ko,en;q=0.9,en-US;q=0.8"
    },
    body : {
        "password" : "KA/76PmsoANjoQFcoiIRYbzNWe/wRyhX8dAciqhtY68IR/IE6hbj3Ox1f1z69RuWWF1gZrknSR3y1CNrRFQYLn4oPAVxsuc5ZQWar/xfKsQJ19eVsPCsAoq5x9qJeMPkLzB0CLUcfoQn/bV9sL0hC/O4UTCLhr5+tNdKXV0BQSKQuAAP3nnhYytU1fS6yqP610mOnUxeO3d6tWm8ZE+jpr2Ydzmf/I/72y6lRDmpS3jHYWiwCGFlw8OHX09+FSJ3yyilxyFjY7baNzG/LuPf0+s/WIDx82VDLfu1v5nXI3pPzPqbbFIHA4D4MZna4ST5v03P4H+lflEDnMKu2xEWww==",
        "deviceUuid" : ""
    },
    json : true
}

let SelectUserGroup_OPTION = {
    uri : "https://hcs.eduro.go.kr/v2/selectUserGroup",
    method : "POST",
    headers : {
        "Host" : "gnehcs.eduro.go.kr",
        "Connection" : "keep-alive",
        "Content-Length" : null,
        "Accept" : "application/json, text/plain, */*",
        "X-Requested-With" : "XMLHttpRequest",
        "Authorization" : null,
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60",
        "Content-Type" : "application/json;charset=UTF-8",
        "Origin" : "https://hcs.eduro.go.kr",
        "Sec-Fetch-Site" : "same-site",
        "Sec-Fetch-Mode" : "cors",
        "Sec-Fetch-Dest" : "empty",
        "Referer" : "https://hcs.eduro.go.kr/",
        "Accept-Encoding" : "gzip, deflate, br",
        "Accept-Language" : "ko,en;q=0.9,en-US;q=0.8"
    },
    body : {},
    json : true
}
let GetUserInfo_OPTION = {
    uri : "https://hcs.eduro.go.kr/v2/getUserInfo",
    method : "POST",
    headers : {
        "Host" : "gnehcs.eduro.go.kr",
        "Connection" : "keep-alive",
        "Content-Length" : null,
        "Accept" : "application/json, text/plain, */*",
        "X-Requested-With" : "XMLHttpRequest",
        "Authorization" : null,
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36 Edg/86.0.622.69",
        "Content-Type" : "application/json;charset=UTF-8",
        "Origin" : "https://hcs.eduro.go.kr",
        "Sec-Fetch-Site" : "same-site",
        "Sec-Fetch-Mode" : "cors",
        "Sec-Fetch-Dest" : "empty",
        "Referer" : "https://hcs.eduro.go.kr/",
        "Accept-Encoding" : "gzip, deflate, br",
        "Accept-Language" : "ko,en;q=0.9,en-US;q=0.8"
    },
    body : {
        "orgCode" : "S100001148",
        "userPNo" : "2020000202"
    },
    json : true
}
let RegisterServey_OPTION = {
    uri : "https://hcs.eduro.go.kr/registerServey",
    method : "POST",
    headers : {
        "Host" : "gnehcs.eduro.go.kr",
        "Connection" : "keep-alive",
        "Content-Length" : null,
        "Accept" : "application/json, text/plain, */*",
        "X-Requested-With" : "XMLHttpRequest",
        "Authorization" : null,
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36 Edg/86.0.622.69",
        "Content-Type" : "application/json;charset=UTF-8",
        "Origin" : "https://hcs.eduro.go.kr",
        "Sec-Fetch-Site" : "same-site",
        "Sec-Fetch-Mode" : "cors",
        "Sec-Fetch-Dest" : "empty",
        "Referer" : "https://hcs.eduro.go.kr/",
        "Accept-Encoding" : "gzip, deflate, br",
        "Accept-Language" : "ko,en;q=0.9,en-US;q=0.8"
    },
    body : {
        "rspns01" : "1",
        "rspns02" : "1",
        "rspns03" : null,
        "rspns04" : null,
        "rspns05" : null,
        "rspns06" : null,
        "rspns07" : null,
        "rspns08" : null,
        "rspns09" : "0",
        "rspns10" : null,
        "rspns11" : null,
        "rspns12" : null,
        "rspns13" : null,
        "rspns14" : null,
        "rspns15" : null,
        "rspns00" : "Y",
        "deviceUuid" : "",
        "upperToken" : null,
        "upperUserNameEncpt" : "문성"
    },
    json : true
}

//let result = crypto.publicEncrypt({"key" : PUBKEY, padding : crypto.constants.RSA_PKCS1_PADDING}, Buffer.from("문성", "base64")).toString("base64");
//console.log(result);

let first, second, third, fourth, fifth;

request.get(SearchSchool_OPTION, (err, res, body) => {
    if(err) console.log(err);

    first = body;
    console.log("search school : ", body);

    FindUser_OPTION.headers["Content-Length"] = JSON.stringify(FindUser_OPTION.body).length;
    console.log(FindUser_OPTION.headers["Content-Length"]);

    request.post(FindUser_OPTION, (err, res, body) => {
        if(err) console.log(err);

        second = body;
        console.log("find user : ", body);

        ValidatePassword_OPTION.headers.Authorization = second.token;
        ValidatePassword_OPTION.headers["Content-Length"] = JSON.stringify(ValidatePassword_OPTION.body).length;
        console.log(ValidatePassword_OPTION.headers["Content-Length"]);

        request.post(ValidatePassword_OPTION, (err, res, body) => {
            if(err) console.log(err);

            third = body;
            console.log("validate password : ", body);
            
            SelectUserGroup_OPTION.headers.Authorization = body;
            SelectUserGroup_OPTION.headers["Content-Length"] = JSON.stringify(SelectUserGroup_OPTION.body).length;
            console.log(SelectUserGroup_OPTION.headers["Content-Length"]);

            request.post(SelectUserGroup_OPTION, (err, res, body) => {
                if(err) console.log(err);
        
                fourth = body;
                console.log("select user group : ", body);
    
                GetUserInfo_OPTION.headers.Authorization = fourth[0].token;
                GetUserInfo_OPTION.headers["Content-Length"] = JSON.stringify(GetUserInfo_OPTION.body).length;
                console.log(GetUserInfo_OPTION.headers["Content-Length"]);
    
                request.post(GetUserInfo_OPTION, (err, res, body) => {
                    if(err) console.log(err);
            
                    fifth = body;
                    console.log("get user info : ", body);
    
                    RegisterServey_OPTION.headers.Authorization = fifth.token;
                    RegisterServey_OPTION.body.upperToken = fifth.token;
                    RegisterServey_OPTION.headers["Content-Length"] = 540; //JSON.stringify(RegisterServey_OPTION.body).length;
                    console.log(RegisterServey_OPTION.headers["Content-Length"]);
    
                    request.post(RegisterServey_OPTION, (err, res, body) => {
                        if(err) console.log(err);
                
                        fifth = body;
                        console.log("register servey : ", body);
                    });
                });
            });
        });
    });
});
