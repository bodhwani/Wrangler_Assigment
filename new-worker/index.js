addEventListener("fetch", event => {
  const links =[
    {
      "name": "Github" ,
      "url" : "https://github.com/Niranjani29"
    },
    {
        "name": "Linkedin" ,
        "url" : "https://www.linkedin.com/in/niranjaniwagh/"
    },
    
  ]
  const json = JSON.stringify(links, null, 2)

  return event.respondWith(
    new Response(json, {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    })
  )
})
