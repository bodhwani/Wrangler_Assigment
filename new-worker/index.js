// addEventListener('fetch', event => {
//   event.respondWith(handleRequest(event.request))
// })
// /**
//  * Respond with hello worker text
//  * @param {Request} request
//  */
// async function handleRequest(request) {
//   return new Response('Hello worker!', {
//     headers: { 'content-type': 'text/plain' },
//   })
// }
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
    {
        "name": "Portfolio" ,
        "url" : "https://niranjani29.github.io/"
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
