// let arr = [10,20,30,40]

// arr.map(inc)


// function inc(item){
//     console.log(item+2) 
// }


// api call  => getting data from server
// 1. fetch => 


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })


//     .catch(error => {
//         console.log("something error ", error)
//     })



    // fecth = api call  
    // .json = converts response to json
    // data = > get actual data 
    // catch()=> handle error





    async function getalldata(){
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            console.log(data)
        }

        catch(err){
            console.log("somthing error", err)
        }

        
    }

    getalldata()


    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    // })


    // .catch(error => {
    //     console.log("something error ", error)
    // })
