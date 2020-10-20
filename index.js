addEventListener("fetch", event => {
  const links = {
      "name": "Github" ,
      "url" : "https://github.com/Niranjani29"
    },
    {
        "name": "Linkedin" ,
        "url" : "https://www.linkedin.com/in/niranjaniwagh/"
    },
    {
        "name": "Portfolio" ,
        "url" : "https://niranjani29.github.io/"
    }

  const json = JSON.stringify(data, null, 2)

  return event.respondWith(
    new Response(json, {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    })
  )
})