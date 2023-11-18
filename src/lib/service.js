
export const chat = async (message) => {
  if (!message) return '';

  const data =await new Promise((res,rej)=>{
    fetch(`http://127.0.0.1:5000/api?messageinfo=${message}`,{
      headers:{
        'Content-Type': 'application/json'
      },
      method:"GET",
    })
    .then(response => response.json())
    .then(data => res(data.answer))
    .catch(error=>{
      rej(error)
    })
  }) 

  return data
}