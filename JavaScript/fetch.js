```
let api = 'https://..........'

async function get(){
  try{
    let response = await fetch(api, {
      method:"POST",
      body:JSON.stringify({
        name: "urga",
        password: "ulaanbaatar"
      }),
      headers:{
        'content-type':'application/json'
      }
    })
    let res = await response.json()
    console.log(res, response.status)
    }catch{
      console.log('error')
    }
}

get()
```
