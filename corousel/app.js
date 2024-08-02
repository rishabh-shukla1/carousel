
let rishabh=document.querySelector('img')

rishabh.style.border='black solid 5px';
rishabh.style.height='400px'
rishabh.style.width='400px'



let a=[ 'https://images.unsplash.com/photo-1722525901281-a238b4fb63de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8 ',
     'https://images.unsplash.com/photo-1722353616484-d00b732d1fd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1722081393586-e3a0c12535b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1722503281278-6af1393f7517?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1722025274771-cd0adaf26f08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D' 
    ]

    let n=0



setInterval(()=>{

    rishabh.style.border='black solid 5px'
    rishabh.style.height='400px'
    rishabh.style.width='400px'

    rishabh.setAttribute('src',a[n])

     n= (n +  1) % 5
},3000)